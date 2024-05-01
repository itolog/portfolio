import { Config } from "@/types";

export const heroConfig: Config = {
	heroPosition: [0, 0, 0],
	colliderConfig: {
		args: [0.7, 1, 0.7],
	},
	cameraConfig: {
		fov: 95,
		far: 75,
		near: 0.1,
		cameraPosition: [0, 5, -6],
	},
};
