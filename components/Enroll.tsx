"use client";
import axios from "axios";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { formschema } from "@/lib/constants";
import { useState } from "react";
import { UserRoundPlus } from "lucide-react";

const Enroll = ({ handleFetch }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const form = useForm<z.infer<typeof formschema>>({
		resolver: zodResolver(formschema),
		defaultValues: {
			name: "",
			age: 0,
			pin: 0,
		},
	});
	const {
		formState: { errors },
	} = form;
	const isLoading = form.formState.isSubmitting;

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formschema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const name = values.name;
		const age = values.age;
		const pin = values.pin;

		try {
			const response = await axios.post(
				"/api/enroll",
				{
					name: name,
					age: age,
					pin: pin,
				},
				{
					headers: {
						"Content-Type": "application/json", // Add this header to ensure the server treats it as JSON
					},
				}
			);
			handleFetch();
			setIsDialogOpen(false);
		} catch (error) {
			console.error("Error enrolling:", error);
		}

		console.log(values);
	};
	return (
		<div className="w-fit m-2">
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger asChild>
					<Button className="ml-auto">
						<UserRoundPlus />
						Enroll a child
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Enroll a child</DialogTitle>
						<DialogDescription>
							Add a child to your account here.
						</DialogDescription>
					</DialogHeader>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormDescription>Name of the child.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="age"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Age</FormLabel>
										<FormControl>
											<Input {...field} type="number" />
										</FormControl>
										<FormDescription>Age of the child.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="pin"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Pin</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} type="number" />
										</FormControl>
										<FormDescription>
											Enter a 4 digit pin. Pin protects the account from other
											enrolled users.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							{errors.name && <p className="text-red-500">error</p>}
							{/* Display name error */}
							<DialogFooter>
								<Button type="submit" disabled={isLoading}>
									Enroll
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Enroll;
