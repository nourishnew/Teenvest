"use client";
import Enroll from "@/components/Enroll";
import Navbar from "@/components/Navbar";
import { MoreHorizontal, UserRoundPlus } from "lucide-react";
import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ChildCard } from "@/components/ChildCard";
import { Separator } from "@/components/ui/separator";

interface Child {
	id: number;
	name: string;
	age: number;
	pin: number;
}

const HomePage = () => {
	const [mounted, setMounted] = useState(false);
	const { isLoaded, userId, sessionId, getToken } = useAuth();
	const [users, setUsers] = useState<Child[]>([]);
	const [loading, setLoading] = useState(false);
	const isDesktop = useMediaQuery({ minWidth: 768 });

	console.log(userId);
	const fetchChildren = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/fetchUsers"); // Replace with your actual API endpoint
			const data = await response.json();
			setUsers(data.data);
			console.log(data); // Replace with your desired output format
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchChildren();
	}, []);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			<Navbar />
			<Card className="m-2 p-4">
				<CardHeader>
					<CardTitle>Enrolled users</CardTitle>
					<CardDescription>
						Need pin of each user to access their profile.
					</CardDescription>
				</CardHeader>
				<Enroll handleFetch={fetchChildren} />

				<Separator className="h-[1px] bg-gray-100 m-1" />

				<CardContent>
					<h4 className="text-sm font-medium leading-none"></h4>
					<p className="text-sm text-muted-foreground"></p>
					<div className="space-y-4  ">
						{users &&
							users.map((child: Child) => {
								return <ChildCard child={child} key={child.name} />;
							})}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default HomePage;
