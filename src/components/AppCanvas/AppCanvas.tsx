import { Canvas } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { FC, PropsWithChildren, Suspense } from "react";

import { hasTouchSupport } from "@/utils/bowser.ts";
import { EcctrlJoystick } from "ecctrl";
import { useLocation, useRoute } from "wouter";

import Loader from "@/components/AppCanvas/componnets/Loader/Loader.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

interface Props extends CanvasProps {}

const AppCanvas: FC<PropsWithChildren<Props>> = ({ children }) => {
	const isLoading = createSelectors(useAppStore).use.isLoading();
	const [, params] = useRoute("/item/:id");
	const [, setLocation] = useLocation();
	return (
		<Suspense fallback={<Loader />}>
			{!isLoading && hasTouchSupport() && <EcctrlJoystick />}
			<button
				style={{ position: "absolute", top: 40, left: 40, fontSize: "13px", zIndex: 10 }}
				onClick={() => setLocation("/")}>
				{params ? "< back" : "double click to enter portal"}
			</button>
			<Canvas shadows>{children}</Canvas>
		</Suspense>
	);
};

export default AppCanvas;
