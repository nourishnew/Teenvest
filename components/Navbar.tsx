"use client";
import React from "react";
import { UserButton } from "@clerk/clerk-react";
const Navbar = () => {
	return (
		<div className="sticky top-0 z-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 p-4 flex items-center justify-between">
			<div className="text-lg font-bold text-gray-700">Teenvest</div>
			<div className="flex items-center">
				<UserButton />
			</div>
		</div>
	);
};

export default Navbar;
