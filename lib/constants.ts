import * as z from "zod";

export const formschema = z.object({
	name: z.string().min(1, "Name is required"), // Name must be a non-empty string
	age: z.coerce
		.number() // Convert the string to a number
		.int() // Ensure it's an integer
		.gte(10, "Age must be a two-digit number") // Minimum age is 10
		.lte(99, "Age must be a two-digit number"), // Maximum age is 99
	pin: z
		.string()
		.length(4, "Pin must be exactly 4 digits")
		.regex(/^\d{4}$/, "Pin must be 4 digits") // Pin should be exactly 4 digits
		.transform((val) => Number(val)) // Convert the pin string to a number
		.refine((val) => !isNaN(val), { message: "Pin must be a valid number" }),
});

export const portalSchema = z.object({
	quantity: z.coerce
		.number() // Convert the string to a number
		.int()
		.positive({ message: "Quantity must be a positive number" })
		.min(0.01, { message: "Quantity must be greater than 0" })
		.max(10000, { message: "Quantity must be less than 10000" }),
});

export interface Child {
	id: number;
	name: string;
	age: number;
	pin: number;
}

export enum AccountType {
	TFSA = "TFSA",
	RRSP = "RRSP",
	FHSA = "FHSA",
	SAVINGS = "SAVINGS",
	CRYPTO = "CRYPTO",
	CASH = "CASH",
}

export interface Account {
	id: number;
	accountType: string;
	balance: number;
}

export enum TransactionType {
	BUY,
	SELL,
}
export interface BuyStockInput {
	symbol: string; // Stock symbol (e.g., AAPL, TSLA)
	childId: number; // The child/user making the purchase
	tradingAccountId: number; // Trading account ID for the child
	quantity: number; // Number of shares to buy
	purchasePrice: number; // Price at which the stock was purchased
}

export interface SellStockInput {
	symbol: string; // Stock symbol (e.g., AAPL, TSLA)
	childId: number; // The child/user making the sale
	tradingAccountId: number; // Trading account ID for the child
	quantity: number; // Number of shares to sell
	salePrice: number; // Price at which the stock was sold
}
