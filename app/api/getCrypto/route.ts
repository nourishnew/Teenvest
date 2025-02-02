// app/api/crypto-prices/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic"; // Ensure this route is dynamic

export async function GET() {
	const apiKey = process.env.CRYPTOCOMPARE_API_KEY;
	if (!apiKey) {
		return NextResponse.json(
			{ error: "CryptoCompare API key not configured" },
			{ status: 500 }
		);
	}

	try {
		// Use a predefined list of the 10 most popular cryptocurrencies
		const popularSymbols = [
			"BTC",
			"ETH",
			"USDT",
			"BNB",
			"ADA",
			"SOL",
			"XRP",
			"DOT",
			"DOGE",
			"AVAX",
		];

		// Fetch the full coin list to get extra info (name, image URL, etc.)
		const coinListResponse = await axios.get(
			"https://min-api.cryptocompare.com/data/all/coinlist",
			{
				params: {
					api_key: apiKey,
				},
			}
		);

		if (coinListResponse.status !== 200 || !coinListResponse.data.Data) {
			throw new Error("Failed to fetch coin list");
		}

		const coinListData = coinListResponse.data.Data;

		// Fetch price data for the popularSymbols
		const priceResponse = await axios.get(
			"https://min-api.cryptocompare.com/data/pricemulti",
			{
				params: {
					fsyms: popularSymbols.join(","),
					tsyms: "USD",
					api_key: apiKey,
				},
			}
		);

		if (priceResponse.status !== 200 || !priceResponse.data) {
			throw new Error("Failed to fetch price data");
		}

		// Format the response using the coin list and price data
		const result = popularSymbols.map((symbol) => {
			const coinInfo = coinListData[symbol];
			return {
				name: coinInfo ? coinInfo.FullName : symbol,
				symbol,
				price: priceResponse.data[symbol]?.USD || 0,
				imageUrl: coinInfo
					? `https://www.cryptocompare.com${coinInfo.ImageUrl}`
					: "",
			};
		});

		return NextResponse.json(result);
	} catch (error) {
		console.error("Error fetching crypto prices:", error);
		return NextResponse.json(
			{ error: "Failed to fetch cryptocurrency prices" },
			{ status: 500 }
		);
	}
}
