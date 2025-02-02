import { prisma } from "./prismadb";

enum AccountType {
	TFSA = "TFSA",
	RRSP = "RRSP",
	FHSA = "FHSA",
	SAVINGS = "SAVINGS",
	CRYPTO = "CRYPTO",
	CASH = "CASH",
}

export async function createTradingAccountForChild(
	childId: number,
	accountType: AccountType,
	initialBalance: number = 0
) {
	try {
		// Check if the child exists
		const child = await prisma.child.findUnique({
			where: { id: childId },
		});

		if (!child) {
			throw new Error(`Child with ID ${childId} does not exist`);
		}

		// Check if the child already has an account of the same type
		const existingAccount = await prisma.tradingAccount.findFirst({
			where: {
				childId: childId,
				accountType: accountType,
			},
		});

		if (existingAccount) {
			throw new Error(
				`Child with ID ${childId} already has a ${accountType} account`
			);
		}

		// Create the trading account
		const tradingAccount = await prisma.tradingAccount.create({
			data: {
				childId: childId,
				accountType: accountType,
				balance: initialBalance,
			},
		});

		console.log("Trading account created successfully:", tradingAccount);
		return tradingAccount;
	} catch (error) {
		console.error("Error creating trading account:", error);
	} finally {
		// Close the Prisma client connection
		await prisma.$disconnect();
	}
}

/**
 * Function to get all trading accounts for a specific child.
 * @param childId - The ID of the child.
 * @returns A list of trading accounts associated with the child.
 */
export async function getTradingAccountsByChildId(childId: number) {
	try {
		const tradingAccounts = await prisma.tradingAccount.findMany({
			where: {
				childId: childId,
			},
		});

		console.log("Trading accounts fetched successfully:", tradingAccounts);
		return tradingAccounts;
	} catch (error) {
		console.error("Error fetching trading accounts:", error);
		throw error;
	} finally {
		await prisma.$disconnect();
	}
}

/**
 * Function to get a trading account by its ID and child ID.
 * @param tradingAccountId - The ID of the trading account.
 * @param childId - The ID of the child.
 * @returns The trading account if found, or null if not.
 */
export async function getTradingAccountByIdAndChildId(
	tradingAccountId: number,
	childId: number
) {
	try {
		const tradingAccount = await prisma.tradingAccount.findFirst({
			where: {
				id: tradingAccountId,
				childId: childId,
			},
		});

		if (!tradingAccount) {
			console.log(
				`No trading account found for ID ${tradingAccountId} and child ID ${childId}`
			);
			return null;
		}

		console.log("Trading account retrieved:", tradingAccount);
		return tradingAccount;
	} catch (error) {
		console.error("Error retrieving trading account:", error);
		throw error;
	} finally {
		await prisma.$disconnect();
	}
}
