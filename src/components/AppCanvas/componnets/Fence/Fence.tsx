import { Clone, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { fenceData } from "@/components/AppCanvas/componnets/Fence/data.ts";
import { GLTFResult } from "@/components/AppCanvas/componnets/Fence/types.ts";

const castShadow = false;
const receiveShadow = false;

const Fence = (props: JSX.IntrinsicElements["group"]) => {
	const { scene } = useGLTF("/models/gothic_fence/scene.gltf") as GLTFResult;

	return (
		<RigidBody type={"fixed"}>
			{/* Top */}
			<group {...props} rotation-y={Math.PI} scale={0.6} dispose={null}>
				{fenceData.map((item, index) => {
					return (
						<Clone
							castShadow={castShadow}
							receiveShadow={receiveShadow}
							key={index}
							scale={item.scale}
							object={scene}
							position={item.position}
						/>
					);
				})}
			</group>
			{/* Front */}
			<group {...props} scale={0.6} dispose={null}>
				{fenceData.map((item, index) => {
					return (
						<Clone
							castShadow={castShadow}
							receiveShadow={receiveShadow}
							key={index}
							scale={item.scale}
							object={scene}
							position={item.position}
						/>
					);
				})}
			</group>
			{/* Right */}
			<group rotation-y={Math.PI * 0.5} {...props} scale={0.6} dispose={null}>
				{fenceData.map((item, index) => {
					return (
						<Clone
							castShadow={castShadow}
							receiveShadow={receiveShadow}
							key={index}
							scale={item.scale}
							object={scene}
							position={item.position}
						/>
					);
				})}
			</group>
			{/* Left */}
			<group rotation-y={-Math.PI * 0.5} {...props} scale={0.6} dispose={null}>
				{fenceData.map((item, index) => {
					return (
						<Clone
							castShadow={castShadow}
							receiveShadow={receiveShadow}
							key={index}
							scale={item.scale}
							object={scene}
							position={item.position}
						/>
					);
				})}
			</group>
		</RigidBody>
	);
};

useGLTF.preload("/models/gothic_fence/scene.gltf");

export default Fence;
