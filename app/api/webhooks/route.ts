import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser } from "@/lib/parent";

export async function POST(req: Request) {
	const SIGNING_SECRET = process.env.SIGNING_SECRET;

	if (!SIGNING_SECRET) {
		throw new Error(
			"Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
		);
	}

	// Create new Svix instance with secret
	const wh = new Webhook(SIGNING_SECRET);

	// Get headers
	const headerPayload = await headers();
	const svix_id = headerPayload.get("svix-id");
	const svix_timestamp = headerPayload.get("svix-timestamp");
	const svix_signature = headerPayload.get("svix-signature");

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("Error: Missing Svix headers", {
			status: 400,
		});
	}

	// Get body
	const payload = await req.json();
	const body = JSON.stringify(payload);

	let evt: WebhookEvent;

	// Verify payload with headers
	try {
		evt = wh.verify(body, {
			"svix-id": svix_id,
			"svix-timestamp": svix_timestamp,
			"svix-signature": svix_signature,
		}) as WebhookEvent;
	} catch (err) {
		console.error("Error: Could not verify webhook:", err);
		return new Response("Error: Verification error", {
			status: 400,
		});
	}

	// Do something with payload
	// For this guide, log payload to console
	console.log(evt.data);
	console.log("Webhook payload:", body);
	if (evt.type === "user.created") {
		const first_name = evt.data.first_name;
		const last_name = evt.data.last_name;
		const email_addresses = evt.data.email_addresses;
		const phone_numbers = evt.data.phone_numbers;
		const email_address = email_addresses[0].email_address;
		const phone_number = phone_numbers[0].phone_number;
		const id = evt.data.id;
		await createUser(first_name, last_name, id, email_address, phone_number);
		console.log("userId:", evt.data.first_name);
	}
	return new Response("Webhook received", { status: 200 });
}
