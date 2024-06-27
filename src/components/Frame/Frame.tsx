import { MeshPortalMaterial, Text } from "@react-three/drei";
import { extend, ThreeEvent } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { FC, PropsWithChildren, useRef } from "react";

import { fontBaseUrl } from "@/config";
import { SkillsModalType } from "@/types";
import { geometry } from "maath";
import * as THREE from "three";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

extend(geometry);

interface Props {
	id: SkillsModalType;
	bg?: string;
	width?: number;
	height?: number;
	title: string;
	description?: string;
	position: [number, number, number];
	rotation?: [number, number, number];
	fontSize?: number;
	fontColor?: string;
}

const Frame: FC<PropsWithChildren<Props>> = ({
	id,
	title,
	description,
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

	const updateSocialActive = createSelectors(useAppStore).use.updateActiveItem();
	const updateFrameVisibility = createSelectors(useAppStore).use.updateFrameVisibility();

	const handleDoubleClick = (e: ThreeEvent<MouseEvent>) => {
		e.stopPropagation();

		updateFrameVisibility({
			open: true,
			type: id,
		});
	};

	const handleIntersectionEnter = () => {
		updateSocialActive(id);
	};

	const handleIntersectionExit = () => {
		updateSocialActive("");
	};

	return (
		<RigidBody type={"fixed"} name={id}>
			<CuboidCollider
				args={[3, 2.4, height]}
				position={position}
				sensor
				onIntersectionEnter={handleIntersectionEnter}
				onIntersectionExit={handleIntersectionExit}
			/>
			<group rotation={rotation} position={position} scale={3}>
				<Text
					font={fontBaseUrl}
					fontSize={fontSize}
					color={fontColor}
					anchorY="top"
					anchorX="left"
					lineHeight={0.8}
					position={[-0.375, 0.715, 0.01]}
					material-toneMapped={false}>
					{title}
				</Text>

				<Text
					visible={Boolean(description)}
					font={fontBaseUrl}
					fontSize={0.08}
					color={"white"}
					anchorY="top"
					anchorX="left"
					lineHeight={0.8}
					position={[-0.4, -0.55, 0.01]}
					material-toneMapped={false}>
					{description}
				</Text>

				<mesh name={id} onDoubleClick={handleDoubleClick}>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-expect-error */}
					<roundedPlaneGeometry args={[width, height, 0.1]} />
					<MeshPortalMaterial
						ref={portal}
						worldUnits
						// events={params?.id === id}
						side={THREE.DoubleSide}>
						<color attach="background" args={[bg]} />
						{children}
					</MeshPortalMaterial>
				</mesh>
			</group>
		</RigidBody>
	);
};

export default Frame;
