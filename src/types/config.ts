import { CuboidArgs } from "@react-three/rapier/dist/declarations/src/types";

interface ColliderConfig {
	args: CuboidArgs;
}

interface CameraConfig {
	fov: number;
	far: number;
	near: number;
	cameraPosition: [number, number, number];
}

export interface Config {
	heroPosition: [number, number, number];
	colliderConfig: ColliderConfig;
	cameraConfig: CameraConfig;
}
