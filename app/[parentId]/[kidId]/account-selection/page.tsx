"use client";
import { AccountCard } from "@/components/AccountCard";
import Navbar from "@/components/Navbar";
import { createTradingAccountForChild } from "@/lib/child";
import { AccountType } from "@/lib/constants";
import { useAuth } from "@clerk/nextjs";
import { useParams } from "next/navigation";
const accounts = [
	{
		title: AccountType.TFSA,
		description: "Tax-free Savings Account",
		content:
			"A tax-free account that lets you invest and save -perfect for big savings goal in shorter frame",
	},
	{
		title: AccountType.RRSP,
		description: "Retirement Savings Plan",
		content:
			"A tax-free retirement account that lets you save and invest for the long term",
	},
	{
		title: AccountType.FHSA,
		description: "First Home Savings account",
		content:
			"Contribute upto $8000 annually to save for your first home. Completely tax free.",
	},
	{
		title: AccountType.SAVINGS,
		description: "Deposit money and earn upto 2.5%",
		content:
			"Move money from your cash account to get 2.5% interest rate annually",
	},
	{
		title: AccountType.CRYPTO,
		description: "Crypto Account",
		content:
			"Buy, sell and convert top cryptocurrencies like Bitcoin and Ethereum. High risk and high reward",
	},
];
const AccountSelection = () => {
	const { kidId, parentId } = useParams();
	const { isLoaded, userId, sessionId, getToken } = useAuth();
	if (userId !== parentId) {
		return null;
	}
	return (
		<div>
			<Navbar />
			<div className="m-5">
				<h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
					Which account would you like to open?
				</h1>
				<p className="max-w-2xl text-lg font-light text-foreground">
					Whether you are saving up for the long run or building your first
					emergency fund, our accounts can help you get the most of your money
				</p>
				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
					{accounts.map((account) => {
						return (
							<AccountCard
								key={account.title}
								title={account.title}
								description={account.description}
								content={account.content}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AccountSelection;
