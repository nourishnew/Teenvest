import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Car(props) {
	const { nodes, materials } = useGLTF("/fennec_-_rocket_league_car.glb");
	return (
		<group {...props} dispose={null} scale={[0.05, 0.05, 0.05]}>
			<group
				position={[45.393, 10.971, -29.963]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[-76.424, 76.424, 76.424]}>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes["Alpha_-_FR_(Fennec)_Alpha_Rim_0"] as Mesh).geometry}
					material={materials.Alpha_Rim}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={
						(nodes["Alpha_-_FR_(Fennec)_Dieci_Tread_0"] as Mesh).geometry
					}
					material={materials.Dieci_Tread}
				/>
			</group>
			<group
				position={[45.585, 10.971, 29.092]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={76.424}>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes["Alpha_-_FL_(Fennec)_Alpha_Rim_0"] as Mesh).geometry}
					material={materials.Alpha_Rim}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={
						(nodes["Alpha_-_FL_(Fennec)_Dieci_Tread_0"] as Mesh).geometry
					}
					material={materials.Dieci_Tread}
				/>
			</group>
			<group
				position={[-39.833, 12.069, -30.363]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[-82.349, 82.349, 82.349]}>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes["Alpha_-_BR_(Fennec)_Alpha_Rim_0"] as Mesh).geometry}
					material={materials.Alpha_Rim}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={
						(nodes["Alpha_-_BR_(Fennec)_Dieci_Tread_0"] as Mesh).geometry
					}
					material={materials.Dieci_Tread}
				/>
			</group>
			<group
				position={[-39.917, 12.069, 30.259]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={82.349}>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes["Alpha_-_BL_(Fennec)_Alpha_Rim_0"] as Mesh).geometry}
					material={materials.Alpha_Rim}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={
						(nodes["Alpha_-_BL_(Fennec)_Dieci_Tread_0"] as Mesh).geometry
					}
					material={materials.Dieci_Tread}
				/>
			</group>
			<group
				position={[-3.516, 16.743, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes.Fennec_Fennec_Chassis_0 as Mesh).geometry}
					material={materials.Fennec_Chassis}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes.Fennec_Headlights_0 as Mesh).geometry}
					material={materials.Headlights}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes["Fennec_Fennec_-_Body_0"] as Mesh).geometry}
					material={materials["Fennec_-_Body"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes.Fennec_Window_0 as Mesh).geometry}
					material={materials.Window}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={(nodes.Fennec_Paint_0 as Mesh).geometry}
					material={materials.Paint}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/fennec_-_rocket_league_car.glb");
