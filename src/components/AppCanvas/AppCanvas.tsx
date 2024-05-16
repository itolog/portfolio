import { Canvas } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { FC, PropsWithChildren, Suspense } from "react";

import { hasTouchSupport } from "@/utils/bowser.ts";
import { EcctrlJoystick } from "ecctrl";

import Loader from "@/components/AppCanvas/componnets/Loader/Loader.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

interface Props extends CanvasProps {}

const AppCanvas: FC<PropsWithChildren<Props>> = ({ children }) => {
	const isLoading = createSelectors(useAppStore).use.isLoading();

	return (
		<Suspense fallback={<Loader />}>
			{(!isLoading || hasTouchSupport()) && <EcctrlJoystick />}
			<Canvas shadows>{children}</Canvas>
		</Suspense>
	);
};

export default AppCanvas;
