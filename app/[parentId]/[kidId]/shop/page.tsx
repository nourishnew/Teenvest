"use client";
import Car from "@/components/Car";
import House from "@/components/House";
import Navbar from "@/components/Navbar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
function Shop() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return (
		<div className="h-[100vh]">
			<Navbar />
			<div className="max-w-sm mx-auto">
				<Carousel>
					<CarouselContent>
						<CarouselItem>
							<Canvas camera={{ position: [0, 0, 5] }}>
								<OrbitControls />
								<House />
								<ambientLight intensity={0.5} />
								<directionalLight position={[0, 0, 5]} color="white" />
							</Canvas>
						</CarouselItem>
						<CarouselItem>
							<Canvas camera={{ position: [0, 0, 5] }}>
								<OrbitControls />
								<House />
								<ambientLight intensity={0.5} />
								<directionalLight position={[0, 0, 5]} color="white" />
							</Canvas>
						</CarouselItem>
						<CarouselItem>
							<Canvas camera={{ position: [0, 0, 5] }}>
								<OrbitControls />
								<House />
								<ambientLight intensity={0.5} />
								<directionalLight position={[0, 0, 5]} color="white" />
							</Canvas>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<div className="max-w-sm mx-auto">
				<Carousel>
					<CarouselContent>
						<CarouselItem>
							<Canvas camera={{ position: [3, 3, 5] }}>
								<OrbitControls />
								<Car />
								<ambientLight intensity={3} />
								<directionalLight position={[0, 2, 5]} color="white" />
							</Canvas>
						</CarouselItem>
						<CarouselItem>
							<Canvas camera={{ position: [0, 3, 5] }}>
								<OrbitControls />
								<Car />
								<ambientLight intensity={3} />
								<directionalLight position={[0, 0, 5]} color="white" />
							</Canvas>
						</CarouselItem>
						<CarouselItem>
							<Canvas camera={{ position: [0, 3, 5] }}>
								<OrbitControls />
								<Car />
								<ambientLight intensity={3} />
								<directionalLight position={[0, 0, 5]} color="white" />
							</Canvas>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}
export default Shop;
