"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { Child } from "@/lib/constants";
import { MoreHorizontal } from "lucide-react";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "react-responsive";
interface PinDialogProps {
	child: Child;
}
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export function ChildCard({ child }: PinDialogProps) {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery({ minWidth: 768 });
	const [pinCode, setPinCode] = useState(child.pin);
	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Card>
						<CardContent>
							<h4 className="text-sm font-medium leading-none"></h4>
							<p className="text-sm text-muted-foreground"></p>
							<div className="space-y-4  ">
								<div
									className="grid gap-6 m-2 p-10 rounded-2xl shadow-md transition-shadow hover:shadow-lg cursor-pointer bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100"
									key={child.name}>
									<div className="flex items-center justify-between space-x-4">
										<div className="flex items-center space-x-4">
											<Avatar>
												<AvatarImage src="/avatars/avatar.png" />
												<AvatarFallback>OM</AvatarFallback>
											</Avatar>
											<div>
												<p className="text-xl font-bold leading-none">
													{child.name}
												</p>
												<p className="text-sm text-muted-foreground">
													Age:{child.age}
												</p>
											</div>
										</div>
										<div className="ml-auto">
											<DropdownMenu>
												<DropdownMenuTrigger>
													<MoreHorizontal className="ml-auto rounded-2xl hover:bg-gray-100" />
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end" side="bottom">
													<DropdownMenuLabel>Manage account</DropdownMenuLabel>
													<DropdownMenuSeparator />
													<DropdownMenuItem>Delete child</DropdownMenuItem>
													<DropdownMenuItem>Change pin</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Enter pin for the child</DialogTitle>
						<DialogDescription>
							Pin protects other enrolled children from accessing this account.
						</DialogDescription>
					</DialogHeader>
					<PinDialog child={child} />
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Card>
					<CardContent>
						<h4 className="text-sm font-medium leading-none"></h4>
						<p className="text-sm text-muted-foreground"></p>
						<div className="space-y-4  ">
							<div
								className="grid gap-6 m-2 p-10 rounded-2xl shadow-md transition-shadow hover:shadow-lg cursor-pointer bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100"
								key={child.name}>
								<div className="flex items-center justify-between space-x-4">
									<div className="flex items-center space-x-4">
										<Avatar>
											<AvatarImage src="/avatars/avatar.png" />
											<AvatarFallback>OM</AvatarFallback>
										</Avatar>
										<div>
											<p className="text-xl font-bold leading-none">
												{child.name}
											</p>
											<p className="text-sm text-muted-foreground">
												Age:{child.age}
											</p>
										</div>
									</div>
									<div className="ml-auto">
										<DropdownMenu>
											<DropdownMenuTrigger>
												<MoreHorizontal className="ml-auto rounded-2xl hover:bg-gray-100" />
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end" side="bottom">
												<DropdownMenuLabel>Manage account</DropdownMenuLabel>
												<DropdownMenuSeparator />
												<DropdownMenuItem>Delete child</DropdownMenuItem>
												<DropdownMenuItem>Change pin</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Enter Pin</DrawerTitle>
					<DrawerDescription>
						Pin protects other enrolled children from accessing this account
					</DrawerDescription>
				</DrawerHeader>
				<PinDialog child={child} />
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

function PinDialog({ child }: PinDialogProps) {
	const router = useRouter();
	const { isLoaded, userId, sessionId, getToken } = useAuth();

	const [savedPin, setSavedPin] = useState(child.pin);
	const [inputPin, setInputPin] = useState("");
	const [error, setError] = useState("");
	const pinSchema = z
		.string()
		.length(4, "PIN must be exactly 4 digits")
		.transform((val) => Number(val))
		.refine((pin) => pin === savedPin, {
			message: "Invalid PIN. Please try again.",
		});
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		try {
			pinSchema.parse(inputPin); // Validate user input against the schema
			setError(""); // Clear any previous errors
			router.push(`/${userId}/${child.id}/dashboard`);
		} catch (err: any) {
			setError(err.errors[0].message); // Display the validation error
		}
	}
	return (
		<form className="grid items-start gap-4 m-2" onSubmit={handleSubmit}>
			<div className="grid gap-2">
				<Label htmlFor="pin">Pin</Label>
				<Input
					type="number"
					id="pin"
					value={inputPin}
					onChange={(e) => setInputPin(e.target.value)}
				/>
			</div>
			<Button type="submit">Enter</Button>
			{error && <p className="text-red-500 mt-2">{error}</p>}
		</form>
	);
}
