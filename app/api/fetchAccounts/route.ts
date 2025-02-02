import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { fetchAllChildrenByParentUserId } from "@/lib/parent";
import { NextApiRequest, NextApiResponse } from "next";
import { getTradingAccountsByChildId } from "@/lib/child";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const childId = searchParams.get("childId");
		const { userId } = await auth();
		console.log(childId);
		if (!userId) {
			return NextResponse.json({ status: 401, statusText: "Unauthorized" });
		}
		const accounts = await getTradingAccountsByChildId(Number(childId));
		console.log(accounts);
		return NextResponse.json({
			status: 200,
			data: accounts,
		});
	} catch (err) {
		console.log(err);
		return NextResponse.json({ status: 500, statusText: "Error adding child" });
	}
}
