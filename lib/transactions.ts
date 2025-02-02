import { BuyStockInput, SellStockInput } from "./constants";
import { prisma } from "./prismadb";

/**
 * Buy stock for a child in a specific trading account
 */

const symbolToNameMap: { [key: string]: string } = {
	AAPL: "Apple Inc.",
	MSFT: "Microsoft Corporation",
	GOOGL: "Alphabet Inc.",
	AMZN: "Amazon.com Inc.",
	TSLA: "Tesla Inc.",
	SPY: "SPDR S&P 500 ETF",
	BTC: "Bitcoin",
	ETH: "Ethereum",
	USDT: "Tether",
	BNB: "Binance Coin",
	ADA: "Cardano",
	SOL: "Solana",
	XRP: "XRP",
	DOT: "Polkadot",
	DOGE: "Dogecoin",
	AVAX: "Avalanche",
	QQQ: "Invesco QQQ Trust",
	VTI: "Vanguard Total Stock Market ETF",
	SHOP: "Shopify Inc.",
	RY: "Royal Bank of Canada",
	TD: "Toronto-Dominion Bank",
	BAM: "BMO Bank",
	// Add more mappings as needed
};
// Add more mappings as needed

export async function buyStock({
	symbol,
	childId,
	tradingAccountId,
	quantity,
	purchasePrice,
}: BuyStockInput) {
	console.log("Buying stock");
	console.log(childId);
	try {
		// Find the stock using the symbol
		let stock = await prisma.stock.findUnique({
			where: { symbol },
		});

		if (!stock) {
			await addStock(symbol, symbolToNameMap[symbol]);
			stock = await prisma.stock.findUnique({
				where: { symbol },
			});
		}

		// Check if stock ownership exists for the child and the stock
		let stockOwnership = await prisma.stockOwnership.findUnique({
			where: {
				childId_stockId: {
					childId,
					stockId: stock.id,
				},
			},
		});

		if (!stockOwnership) {
			// If no ownership exists, create a new record
			stockOwnership = await prisma.stockOwnership.create({
				data: {
					childId,
					stockId: stock.id,
					tradingAccountId,
					shares: quantity,
					purchasePrice,
				},
			});
		} else {
			// If ownership exists, update the number of shares
			stockOwnership = await prisma.stockOwnership.update({
				where: {
					childId_stockId: {
						childId,
						stockId: stock.id,
						tradingAccountId,
					},
				},
				data: {
					shares: stockOwnership.shares + quantity,
					purchasePrice,
				},
			});
		}

		// Create the transaction record
		const transaction = await prisma.stockTransaction.create({
			data: {
				stockId: stock.id,
				transactionType: "BUY",
				quantity,
				price: purchasePrice,
				date: new Date(),
			},
		});

		return { stockOwnership, transaction };
	} catch (error) {
		console.error("Error buying stock:", error);
		throw error;
	}
}

export async function sellStock({
	symbol,
	childId,
	tradingAccountId,
	quantity,
	salePrice,
}: SellStockInput) {
	try {
		// Find the stock using the symbol
		const stock = await prisma.stock.findUnique({
			where: { symbol },
		});

		if (!stock) {
			throw new Error(`Stock with symbol ${symbol} not found.`);
		}

		// Find the stock ownership for the child, the stock, and the specific trading account
		const stockOwnership = await prisma.stockOwnership.findFirst({
			where: {
				childId,
				stockId: stock.id,
				tradingAccountId,
			},
		});

		if (!stockOwnership || stockOwnership.shares < quantity) {
			throw new Error(
				`Not enough shares of ${symbol} in the selected trading account to sell.`
			);
		}

		// Update the stock ownership by reducing the number of shares in the specified trading account
		const updatedOwnership = await prisma.stockOwnership.update({
			where: {
				id: stockOwnership.id, // Using the unique stock ownership ID
			},
			data: {
				shares: stockOwnership.shares - quantity,
			},
		});

		// Create the transaction record for the sale
		const transaction = await prisma.stockTransaction.create({
			data: {
				stockId: stock.id,
				transactionType: "SELL",
				quantity,
				price: salePrice,
				date: new Date(),
			},
		});

		return { updatedOwnership, transaction };
	} catch (error) {
		console.error("Error selling stock:", error);
		throw error;
	}
}

export async function addStock(symbol: string, name: string) {
	// Check if stock already exists
	const existingStock = await prisma.stock.findUnique({
		where: { symbol },
	});

	if (existingStock) {
		console.log("Stock already exists:", existingStock);
		return existingStock; // Return existing stock
	}

	// Create new stock if it doesn't exist
	const newStock = await prisma.stock.create({
		data: {
			symbol,
			name,
		},
	});

	console.log("New stock added:", newStock);
	return newStock;
}
