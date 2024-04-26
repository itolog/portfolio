import { Config } from "@/types";

export const heroConfig: Config = {
	heroPosition: [0, -0.35, 0],
	colliderConfig: {
		args: [0.35, 0.35, 0.35],
	},
	cameraConfig: {
		fov: 95,
		far: 75,
		near: 1,
		cameraPosition: [-2, 0, -8],
	},
};
