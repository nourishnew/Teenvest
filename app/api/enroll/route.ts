
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createChild } from "@/lib/parent";
export const config = {
	api: {
		bodyParser: false,
	},
};
export async function POST(req: Request) {
	try {
		// const { name, age, pin } = JSON.parse(body);con
		const { userId } = await auth();
		const body = await req.json();
		const { name, age, pin } = body;
		if (!userId) {
			return NextResponse.json({ status: 401, statusText: "Unauthorized" });
		}
		if (!name || !age || !pin) {
			return NextResponse.json({ status: 400, statusText: "Missing fields" });
		}
		await createChild(name, age, pin, userId);
		return NextResponse.json({
			status: 200,
			statusText: "User added successfully",
		});
	} catch (err) {
		console.log(err);
		return NextResponse.json({ status: 500, statusText: "Error adding child" });
	}
}
