import { MeshPortalMaterial, Text } from "@react-three/drei";
import { extend, ThreeEvent, useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { FC, PropsWithChildren, useRef } from "react";

import { RigidItem } from "@/constants";
import { easing, geometry } from "maath";
import * as THREE from "three";
import { useLocation, useRoute } from "wouter";

extend(geometry);

interface Props {
	id: string;
	bg?: string;
	width?: number;
	height?: number;
	title: string;
	position: [number, number, number];
	rotation?: [number, number, number];
	fontSize?: number;
	fontColor?: string;
}

const Frame: FC<PropsWithChildren<Props>> = ({
	id,
	title,
	bg = "#080a01",
	fontColor = "#f69e3a",
	width = 1,
	height = 1.61803398875,
	children,
	position,
	fontSize = 0.2,
	rotation,
}) => {
	const portal = useRef(null);
	const [, setLocation] = useLocation();
	const [, params] = useRoute("/item/:id");

	useFrame((_state, dt) => {
		if (portal.current) {
			return easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, dt);
		}
	});

	const handleDoubleClick = (e: ThreeEvent<MouseEvent>) => {
		e.stopPropagation();
		setLocation("/item/" + e.object.name);
	};

	return (
		<RigidBody type={"fixed"} name={RigidItem.SKILLS}>
			<group rotation={rotation} position={position}>
				<Text
					font={"/fonts/get_schwifty.ttf"}
					fontSize={fontSize}
					color={fontColor}
					anchorY="top"
					anchorX="left"
					lineHeight={0.8}
					position={[-0.375, 0.715, 0.01]}
					material-toneMapped={false}>
					{title}
				</Text>

				<mesh name={id} onDoubleClick={handleDoubleClick}>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-expect-error */}
					<roundedPlaneGeometry args={[width, height, 0.1]} />
					<MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
						<color attach="background" args={[bg]} />
						{children}
					</MeshPortalMaterial>
				</mesh>
			</group>
		</RigidBody>
	);
};

export default Frame;
