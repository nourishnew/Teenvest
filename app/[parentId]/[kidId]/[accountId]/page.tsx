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
import { Graph } from "@/components/Graph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Account } from "@/lib/constants";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ModalProvider } from "@/components/ModalProvider";
import { useProModalPortal } from "@/hooks/use-pro-modal-portal";

interface StockData {
	symbol: string;
	price: string;
	change: string;
	changePercent: string;
}
interface CryptoData {
	// Adjust these fields according to your crypto API response.
	name: string;
	symbol: string;
	price: string;
	imageUrl: string;
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AccountPage = () => {
	// Use the `useParams` hook to access dynamic route parameters
	const { parentId, kidId, accountId } = useParams();
	const { isLoaded, userId, sessionId, getToken } = useAuth();
	const [account, setAccount] = useState<Account>();
	const [usStockData, setUsStockData] = useState<StockData[]>([]);
	const [etfStockData, setEtfStockData] = useState<StockData[]>([]);
	const [caStockData, setCaStockData] = useState<StockData[]>([]);
	const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

	const proModal = useProModalPortal();

	useEffect(() => {
		const fetchAccount = async () => {
			console.log(kidId);
			const response = await axios.get(
				"/api/fetchAccount?childId=" + kidId + "&" + "accountId=" + accountId
			);
			const data = await response.data.data;
			setAccount(data);
			console.log(data);
		};
		fetchAccount();
	}, []);

	useEffect(() => {
		if (!account) return;

		if (account.accountType === "CRYPTO") {
			// Fetch crypto data
			axios
				.get("/api/getCrypto")
				.then((response) => {
					setCryptoData(response.data);
					console.log("Crypto data:", response.data);
				})
				.catch((error) => {
					console.error("Error fetching crypto data:", error);
				});
		} else {
			// Assume any non-crypto account should display stock data
			console.log(account);
			axios
				.get("/api/getStocks")
				.then((response) => {
					setUsStockData(response.data.us);
					setCaStockData(response.data.can);
					setEtfStockData(response.data.etf);
					console.log(response.data);
				})
				.catch((error) => {
					console.error("Error fetching stock data:", error);
				});
		}
	}, [account]);

	if (userId !== parentId) {
		return null;
	}

	return (
		<div>
			<Navbar />
			<div className="p-5">
				<h2 className="text-3xl font-bold tracking-tight">
					{account && account.accountType}
				</h2>
				Test
				<div className="flex w-full justify-between">
					<div className="w-1/2 mr-1">
						<Graph />
					</div>
					<div className="w-1/2">
						<div className="max-w-lg m-auto">
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
						<div className="max-w-lg m-auto">
							<ModalProvider />
							{account && account.accountType != "CRYPTO" && (
								<Tabs defaultValue="us">
									<TabsList className="grid w-full grid-cols-3">
										<TabsTrigger value="us">US stocks</TabsTrigger>
										<TabsTrigger value="ca">CA stocks</TabsTrigger>
										<TabsTrigger value="etf">ETF</TabsTrigger>
									</TabsList>
									<TabsContent value="us">
										<Card>
											<CardHeader>
												<CardTitle>Stocks</CardTitle>
												<CardDescription>
													Buy/Sell ownership of popular companies
												</CardDescription>
											</CardHeader>
											<CardContent className="space-y-2">
												<Table>
													<TableCaption>
														A list of your recent invoices.
													</TableCaption>
													<TableHeader>
														<TableRow>
															<TableHead className="w-[100px]">
																Symbol
															</TableHead>
															<TableHead>Price</TableHead>
															<TableHead>Change</TableHead>
															<TableHead>Change Percent</TableHead>
														</TableRow>
													</TableHeader>
													<TableBody>
														{usStockData &&
															usStockData.map((stock, index) => (
																<TableRow
																	key={index}
																	onClick={() => {
																		proModal.setStock(stock.symbol);
																		proModal.setStockPrice(Number(stock.price));
																		proModal.onOpen();
																	}}>
																	<TableCell className="font-medium">
																		{stock.symbol}
																	</TableCell>
																	<TableCell>{stock.price}</TableCell>
																	<TableCell>{stock.change}</TableCell>
																	<TableCell>{stock.changePercent}</TableCell>
																</TableRow>
															))}
													</TableBody>
												</Table>
											</CardContent>
										</Card>
									</TabsContent>
									<TabsContent value="ca">
										<Card>
											<CardHeader>
												<CardTitle>CA stocks</CardTitle>
												<CardDescription>Buy Canadian stocks</CardDescription>
											</CardHeader>
											<CardContent className="space-y-2">
												<Table>
													<TableCaption>
														A list of your recent invoices.
													</TableCaption>
													<TableHeader>
														<TableRow>
															<TableHead className="w-[100px]">
																Symbol
															</TableHead>
															<TableHead>Price</TableHead>
															<TableHead>Change</TableHead>
															<TableHead>Change Percent</TableHead>
														</TableRow>
													</TableHeader>
													<TableBody>
														{caStockData &&
															caStockData.map((stock, index) => (
																<TableRow
																	key={index}
																	onClick={() => {
																		proModal.setStock(stock.symbol);
																		proModal.setStockPrice(Number(stock.price));
																		proModal.onOpen();
																	}}>
																	<TableCell className="font-medium">
																		{stock.symbol}
																	</TableCell>
																	<TableCell>{stock.price}</TableCell>
																	<TableCell>{stock.change}</TableCell>
																	<TableCell>{stock.changePercent}</TableCell>
																</TableRow>
															))}
													</TableBody>
												</Table>
											</CardContent>
										</Card>
									</TabsContent>
									<TabsContent value="etf">
										<Card>
											<CardHeader>
												<CardTitle>ETFs</CardTitle>
												<CardDescription>Buy ETF</CardDescription>
											</CardHeader>
											<CardContent className="space-y-2">
												<Table>
													<TableCaption>
														A list of ETFs available for purchase.
													</TableCaption>
													<TableHeader>
														<TableRow>
															<TableHead className="w-[100px]">
																Symbol
															</TableHead>
															<TableHead>Price</TableHead>
															<TableHead>Change</TableHead>
															<TableHead>Change Percent</TableHead>
														</TableRow>
													</TableHeader>
													<TableBody>
														{etfStockData &&
															etfStockData.map((stock, index) => (
																<TableRow
																	key={index}
																	onClick={() => {
																		proModal.setStock(stock.symbol);
																		proModal.setStockPrice(Number(stock.price));
																		proModal.onOpen();
																	}}>
																	<TableCell className="font-medium">
																		{stock.symbol}
																	</TableCell>
																	<TableCell>{stock.price}</TableCell>
																	<TableCell>{stock.change}</TableCell>
																	<TableCell>{stock.changePercent}</TableCell>
																</TableRow>
															))}
													</TableBody>
												</Table>
											</CardContent>
										</Card>
									</TabsContent>
								</Tabs>
							)}
							{account && account.accountType === "CRYPTO" && (
								<div>
									<Card>
										<CardHeader>
											<CardTitle>Stocks</CardTitle>
											<CardDescription>
												Buy/Sell ownership of cryptocurrencies
											</CardDescription>
										</CardHeader>
										<CardContent className="space-y-2">
											<Table>
												<TableCaption>
													A list of your recent invoices.
												</TableCaption>
												<TableHeader>
													<TableRow>
														<TableHead className="w-[100px]">Name</TableHead>
														<TableHead>Symbol</TableHead>
														<TableHead>Price</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{cryptoData &&
														cryptoData.map((stock, index) => (
															<TableRow
																key={index}
																onClick={() => {
																	proModal.setStock(stock.symbol);
																	proModal.setStockPrice(Number(stock.price));
																	proModal.onOpen();
																}}>
																<TableCell>{stock.name}</TableCell>
																<TableCell>{stock.symbol}</TableCell>
																<TableCell>{stock.price}</TableCell>
															</TableRow>
														))}
												</TableBody>
											</Table>
										</CardContent>
									</Card>
								</div>
							)}
						</div>
					</div>
				</div>
				<h2 className="text-3xl font-bold tracking-tight">Accounts</h2>
			</div>
		</div>
	);
};

export default AccountPage;
