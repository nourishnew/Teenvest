"use client";
import Navbar from "@/components/Navbar";
import { useAuth } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Graph } from "@/components/Graph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Account } from "@/lib/constants";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
const DashboardPage = () => {
	// Use the `useParams` hook to access dynamic route parameters
	const { parentId, kidId } = useParams();
	const { isLoaded, userId, sessionId, getToken } = useAuth();
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		const fetchAccount = async () => {
			const response = await axios.get("/api/fetchAccounts?childId=" + kidId);
			const data = await response.data.data;
			setAccounts(data);
			console.log(data);
		};
		fetchAccount();
	}, []);
	if (userId !== parentId) {
		return null;
	}

	return (
		<div>
			<Navbar />
			<div className="p-5">
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
				<div className="flex w-full justify-between">
					<div className="w-2/3 mr-1">
						<Graph />
					</div>
					<div className="w-1/3">
						<div className="max-w-md m-auto">
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Total Revenue
									</CardTitle>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="h-4 w-4 text-muted-foreground">
										<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
									</svg>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">$45,231.89</div>
									<p className="text-xs text-muted-foreground">
										+20.1% from last month
									</p>
								</CardContent>
							</Card>
						</div>
						<div className="max-w-md m-auto">
							<Link href={`/${parentId}/${kidId}/account-selection`}>
								<Button className="w-full h-20 mt-2">
									<div className="text-2xl font-bold">Add account</div>
									<Card></Card>
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<h2 className="text-3xl font-bold tracking-tight">Accounts</h2>
				{accounts &&
					accounts.map((account: Account) => {
						return (
							<Link
								href={`/${parentId}/${kidId}/${account.id}`}
								key={account.id}>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											{account.accountType}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">${account.balance}</div>
									</CardContent>
								</Card>
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default DashboardPage;
