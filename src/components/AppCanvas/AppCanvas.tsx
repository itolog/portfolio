import { Canvas } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { FC, PropsWithChildren, Suspense } from "react";

interface Props extends CanvasProps {}

const AppCanvas: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<Suspense fallback={"...loading"}>
			<Canvas shadows>{children}</Canvas>
		</Suspense>
	);
};

export default AppCanvas;
