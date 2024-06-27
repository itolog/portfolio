import { Canvas } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { FC, PropsWithChildren, Suspense } from "react";

import Loader from "@/UI/Loader/Loader.tsx";

import Joystick from "@/components/Joystick/Joystick.tsx";
import PoHint from "@/components/PoHint/PoHint.tsx";
import SkillsModal from "@/components/Skills/components/SkillsModal/SkillsModal.tsx";

interface Props extends CanvasProps {}

const AppCanvas: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<Suspense fallback={<Loader />}>
			<Joystick />
			<PoHint />
			<SkillsModal />
			<Canvas shadows>{children}</Canvas>
		</Suspense>
	);
};

export default AppCanvas;
