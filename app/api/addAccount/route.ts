import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createChild } from "@/lib/parent";
import { createTradingAccountForChild } from "@/lib/child";

export async function POST(req: Request) {
	try {
		// const { name, age, pin } = JSON.parse(body);con
		const { userId } = await auth();
		const body = await req.json();
		const { account, childId, balance } = body;
		console.log(account, childId, balance);
		if (!userId) {
			console.log("unauthorized");
			return NextResponse.json({ status: 401, statusText: "Unauthorized" });
		}
		if (!account) {
			return NextResponse.json({ status: 400, statusText: "Missing fields" });
		}
		console.log("creating account");
		await createTradingAccountForChild(childId, account, balance);
		return NextResponse.json({
			status: 200,
			statusText: "Account create successfully",
		});
	} catch (err) {
		console.log(err);
		return NextResponse.json({ status: 500, statusText: "Error adding child" });
	}
}
