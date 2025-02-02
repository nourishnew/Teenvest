import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { fetchAllChildrenByParentUserId } from "@/lib/parent";
import { NextApiRequest, NextApiResponse } from "next";
import {
	getTradingAccountByIdAndChildId,
	getTradingAccountsByChildId,
} from "@/lib/child";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const childId = searchParams.get("childId");
		const accountId = searchParams.get("accountId");

		const { userId } = await auth();
		if (!userId) {
			return NextResponse.json({ status: 401, statusText: "Unauthorized" });
		}
		const account = await getTradingAccountByIdAndChildId(
			Number(accountId),
			Number(childId)
		);

		console.log(account);
		return NextResponse.json({
			status: 200,
			data: account,
		});
	} catch (err) {
		console.log(err);
		return NextResponse.json({ status: 500, statusText: "Error adding child" });
	}
}
