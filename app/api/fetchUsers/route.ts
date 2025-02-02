import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { fetchAllChildrenByParentUserId } from "@/lib/parent";

export async function GET() {
	try {
		// const { name, age, pin } = JSON.parse(body);con
		const { userId } = await auth();
		if (!userId) {
			return NextResponse.json({ status: 401, statusText: "Unauthorized" });
		}
		const children = await fetchAllChildrenByParentUserId(userId);
		console.log(children);
		return NextResponse.json({
			status: 200,
			data: children,
		});
	} catch (err) {
		console.log(err);
		return NextResponse.json({ status: 500, statusText: "Error adding child" });
	}
}
