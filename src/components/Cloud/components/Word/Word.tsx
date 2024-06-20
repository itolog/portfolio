import { Billboard, Text } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

import { fontBaseUrl } from "@/config";
import { Color, Vector3 } from "three";

interface Props {
	position: Vector3 | undefined;
}

const Word: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
	const color = new Color();
	const fontProps = {
		font: fontBaseUrl,
		fontSize: 2.5,
		letterSpacing: -0.05,
		lineHeight: 1,
		"material-toneMapped": false,
	};
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	const over = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		setHovered(true);
	};
	const out = () => setHovered(false);
	// Change the mouse cursor on hover¨
	useEffect(() => {
		if (hovered) document.body.style.cursor = "pointer";
		return () => {
			document.body.style.cursor = "auto";
		};
	}, [hovered]);
	// Tie component to the render-loop
	useFrame(() => {
		if (ref) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			ref.current.material.color.lerp(color.set(hovered ? "#fa2720" : "white"), 0.1);
		}
	});

	return (
		<Billboard {...props}>
			<Text
				ref={ref}
				onPointerOver={over}
				onPointerOut={out}
				onClick={() => console.log("clicked")}
				{...fontProps}>
				{children}
			</Text>
		</Billboard>
	);
};

export default Word;
