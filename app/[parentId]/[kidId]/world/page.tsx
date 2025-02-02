"use client";
import House from "@/components/House";
import { Button } from "@/components/ui/button";
import MortgageForm from "@/components/ui/MortgageForm";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const World = () => (
	<div className="h-[100vh]">
		<Canvas camera={{ position: [0, 0, 5] }}>
			<OrbitControls />
			<House />
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 0, 5]} color="white" />
		</Canvas>
		<Button>Buy house</Button>
	</div>
);

export default World;
