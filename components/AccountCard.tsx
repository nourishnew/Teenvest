import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { createTradingAccountForChild } from "@/lib/child";
import { useParams } from "next/navigation";
import { AccountType } from "@/lib/constants";
import axios from "axios";

interface AccountCardProps {
	title: AccountType;
	description: string;
	content: string;
}
export function AccountCard({ title, description, content }: AccountCardProps) {
	const [isChecked, setIsChecked] = useState(false);
	const [open, setOpen] = useState(false);
	const [error, setError] = useState("");
	const handleCheckboxChange = (checked: boolean) => {
		setIsChecked(checked); // `checked` is true or false
		console.log("Checkbox is now:", checked ? "Checked" : "Unchecked");
	};
	const { kidId, parentId } = useParams();

	async function handleCreateAccount() {
		try {
			if (isChecked) {
				await axios.post("/api/addAccount", {
					account: title,
					childId: Number(kidId),
					balance: 0,
				}); // Replace with your actual API endpoint
				setOpen(false);
				setError("");
			} else {
				setError("Accept the termins and conditions to continue");
			}
		} catch (error) {
			setOpen(false);
			console.error("Error creating account:", error);
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Card className="w-[350px] shadow-md hover:shadow-lg cursor-pointer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 text-black font-bold p-4 rounded-lg">
					<CardHeader>
						<CardTitle>{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="max-w-2xl text-lg font-light text-foreground">
							{content}
						</p>
					</CardContent>
					<CardFooter className="flex justify-between"></CardFooter>
				</Card>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create {title} Account</DialogTitle>
					<DialogDescription>
						Great job. Lets see how you can create a {title} account. At a bank,
						you would be ask to sign some forms, add beneficiaries and accept
						their terms and conditions. This is a simulation of that.
					</DialogDescription>
				</DialogHeader>
				<div className="items-top flex space-x-2">
					<Checkbox
						id="terms1"
						checked={isChecked}
						onCheckedChange={handleCheckboxChange}
					/>
					<div className="grid gap-1.5 leading-none">
						<label
							htmlFor="terms1"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							Accept terms and conditions
						</label>
						<p className="text-sm text-muted-foreground">
							You agree to our Terms of Service and Privacy Policy.
						</p>
					</div>
				</div>
				{error && <p className="text-red-500">{error}</p>}
				<DialogFooter>
					<Button type="submit" onClick={handleCreateAccount}>
						Create Account
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
