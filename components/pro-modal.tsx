"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { useProModalPortal } from "@/hooks/use-pro-modal-portal";
import axios from "axios";
import { portalSchema } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useParams } from "next/navigation";

export const ProModal = () => {
	const { parentId, kidId, accountId } = useParams();

	const proModal = useProModalPortal();
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const form = useForm<z.infer<typeof portalSchema>>({
		resolver: zodResolver(portalSchema),
		defaultValues: {
			quantity: 0,
		},
	});
	const {
		formState: { errors },
	} = form;
	const isLoading = form.formState.isSubmitting;

	// 2. Define a submit handler.
	const onBuy = async (values: z.infer<typeof portalSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const quantity = values.quantity;

		try {
			const response = await axios.post(
				"/api/buyStock",
				{
					symbol: proModal.stock,
					childId: Number(kidId),
					accountId: Number(accountId),
					quantity,
					price: proModal.stockPrice,
				},
				{
					headers: {
						"Content-Type": "application/json", // Add this header to ensure the server treats it as JSON
					},
				}
			);
			setIsDialogOpen(false);
		} catch (error) {
			console.error("Error enrolling:", error);
		}

		console.log(values);
	};
	const onSell = async (values: z.infer<typeof portalSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const quantity = values.quantity;

		try {
			const response = await axios.post(
				"/api/sellStock",
				{
					symbol: proModal.stock,
					childId: Number(kidId),
					accountId: Number(accountId),
					quantity,
					price: proModal.stockPrice,
				},
				{
					headers: {
						"Content-Type": "application/json", // Add this header to ensure the server treats it as JSON
					},
				}
			);
			setIsDialogOpen(false);
		} catch (error) {
			console.error("Error enrolling:", error);
		}

		console.log(values);
	};
	return (
		<div className="bg-yellow">
			<Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Buy/Sell shares {proModal.stock}</DialogTitle>
						<DialogDescription>
							Enter the number of shares you want to buy/sell.
						</DialogDescription>
					</DialogHeader>
					<Tabs defaultValue="account" className="w-[400px]">
						<TabsList>
							<TabsTrigger value="buy">Buy</TabsTrigger>
							<TabsTrigger value="sell">Sell</TabsTrigger>
						</TabsList>
						<TabsContent value="buy">
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onBuy)} className="space-y-8">
									<FormField
										control={form.control}
										name="quantity"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Enter the number of shares you want to buy
												</FormLabel>
												<FormControl>
													<Input placeholder="" {...field} type="number" />
												</FormControl>
												<FormDescription>Number of shares.</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									{errors && <p className="text-red-500">error</p>}{" "}
									{/* Display name error */}
									<DialogFooter>
										<Button type="submit" disabled={isLoading}>
											Enroll
										</Button>
									</DialogFooter>
								</form>
							</Form>
						</TabsContent>
						<TabsContent value="sell">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSell)}
									className="space-y-8">
									<FormField
										control={form.control}
										name="quantity"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Enter the number of shares you want to sell
												</FormLabel>
												<FormControl>
													<Input placeholder="" {...field} type="number" />
												</FormControl>
												<FormDescription>Number of shares.</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									{errors && <p className="text-red-500">error</p>}{" "}
									{/* Display name error */}
									<DialogFooter>
										<Button type="submit" disabled={isLoading}>
											Sell
										</Button>
									</DialogFooter>
								</form>
							</Form>
						</TabsContent>
					</Tabs>
				</DialogContent>
			</Dialog>
		</div>
	);
};
