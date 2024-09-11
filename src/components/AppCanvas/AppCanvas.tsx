import { Canvas } from "@react-three/fiber";
import { FC, PropsWithChildren, Suspense } from "react";

import Loader from "@/UI/Loader/Loader.tsx";

import Joystick from "@/components/Joystick/Joystick.tsx";
import PoHint from "@/components/PoHint/PoHint.tsx";
import SkillsModal from "@/components/Skills/components/SkillsModal/SkillsModal.tsx";

const AppCanvas: FC<PropsWithChildren> = ({ children }) => {
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
