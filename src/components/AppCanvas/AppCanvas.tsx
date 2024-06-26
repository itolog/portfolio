import { Canvas } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { FC, PropsWithChildren, Suspense } from "react";

import Loader from "@/UI/Loader/Loader.tsx";
import { hasTouchSupport } from "@/utils/bowser.ts";
import { EcctrlJoystick } from "ecctrl";

import PoHint from "@/components/PoHint/PoHint.tsx";
import SkillsModal from "@/components/SkillsModal/SkillsModal.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

interface Props extends CanvasProps {}

const AppCanvas: FC<PropsWithChildren<Props>> = ({ children }) => {
	const isLoading = createSelectors(useAppStore).use.isLoading();
	const skillsModal = createSelectors(useAppStore).use.skillsModal();

	return (
		<Suspense fallback={<Loader />}>
			{!isLoading && hasTouchSupport() && <EcctrlJoystick />}
			{!isLoading && <PoHint />}
			{skillsModal.open && <SkillsModal />}
			<Canvas shadows>{children}</Canvas>
		</Suspense>
	);
};

export default AppCanvas;
