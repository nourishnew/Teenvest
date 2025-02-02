"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

// 1. Define proper schema
export const formSchema = z.object({
	price: z.number().min(10000, "Minimum price is $10,000"),
	downPayment: z
		.string()
		.nonempty("Please select a down payment")
		.transform((val) => Number(val)),
	loanTerm: z.number().min(1).max(30),
	interestRate: z.number().min(0.1).max(30),
});

const MortgageForm = () => {
	const [mounted, setIsMounted] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			price: 250000,
			downPayment: "",
			loanTerm: 20,
			interestRate: 4.5,
		},
	});

	// 3. Watch form values
	const price = form.watch("price");
	const downPayment = form.watch("downPayment");
	const loanTerm = form.watch("loanTerm");
	const interestRate = form.watch("interestRate");

	// 4. Proper monthly payment calculation
	const calculateMonthlyPayment = () => {
		const principal = price - downPayment;
		const monthlyRate = interestRate / 100 / 12;
		const numberOfPayments = loanTerm * 12;

		return (
			(principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
			(Math.pow(1 + monthlyRate, numberOfPayments) - 1)
		);
	};

	const monthlyPayment = calculateMonthlyPayment();

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="p-6 max-w-lg mx-auto rounded-lg shadow-xl">
			<h1 className="text-3xl font-bold text-center mb-6">
				🏡 Buy Your Dream House!
			</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					{/* Price Field */}
					<FormField
						control={form.control}
						name="price"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Home Price</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled
										type="number"
										onChange={(e) => field.onChange(Number(e.target.value))}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Down Payment Field */}
					<FormField
						control={form.control}
						name="downPayment"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Down Payment</FormLabel>
								<FormControl>
									<div className="space-y-4">
										<Select
											value={String(field.value)} // Convert to string if needed
											onValueChange={(value) => {
												// Convert the selected string value back to a number if necessary
												field.onChange(value);
											}}>
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Select downpayment" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="1000">1000</SelectItem>
												<SelectItem value="2000">2000</SelectItem>
												<SelectItem value="3000">3000</SelectItem>
											</SelectContent>
										</Select>
										<div className="text-sm text-muted-foreground">
											Down Payment: ${field.value.toLocaleString()} (
											{((field.value / price) * 100).toFixed(1)}%)
										</div>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Loan Term Field */}
					<FormField
						control={form.control}
						name="loanTerm"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Loan Term (years)</FormLabel>
								<FormControl>
									<div className="flex gap-2">
										{[15, 20, 30].map((term) => (
											<Button
												key={term}
												type="button"
												variant={field.value === term ? "default" : "outline"}
												onClick={() => field.onChange(term)}>
												{term} years
											</Button>
										))}
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Interest Rate Field */}
					<FormField
						control={form.control}
						name="interestRate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Interest Rate (%)</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="number"
										disabled
										step="0.1"
										onChange={(e) => field.onChange(Number(e.target.value))}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Payment Display */}
					<div className="text-center p-4 bg-muted rounded-lg">
						<h3 className="text-lg font-semibold">Monthly Payment</h3>
						<p className="text-3xl font-bold text-primary">
							${monthlyPayment.toFixed(2)}
						</p>
					</div>

					<Button type="submit" className="w-full">
						Calculate
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default MortgageForm;
