import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { sellStock } from "@/lib/transactions";
import { SellStockInput } from "@/lib/constants";

export async function POST(req: Request) {
	try {
		// const { name, age, pin } = JSON.parse(body);con
		const { userId } = await auth();
		const body = await req.json();
		const { symbol, childId, accountId, quantity, price } = body;
		console.log(symbol, childId, accountId, quantity, price);
		if (!userId) {
			console.log("unauthorized");
			return NextResponse.json({ status: 401, statusText: "Unauthorized" });
		}
		if (!accountId || !price || !quantity) {
			return NextResponse.json({ status: 400, statusText: "Missing fields" });
		}
		const sellInput: SellStockInput = {
			symbol: symbol, // Apple stock symbol
			childId: childId, // Child ID (user ID)
			tradingAccountId: accountId, // Trading account ID
			quantity: quantity, // Number of shares to sell
			salePrice: price, // Sale price per share
		};
		console.log("Selling stock");
		await sellStock(sellInput);
		console.log("selling stock done");

		return NextResponse.json({
			status: 200,
			statusText: "Sell transaction completed",
		});
	} catch (err) {
		console.log(err);
		return NextResponse.json({ status: 500, statusText: "Error adding child" });
	}
}
