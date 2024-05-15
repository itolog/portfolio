import { Config } from "@/types";
import { Vector3 } from "three";

export const heroConfig: Config = {
	colliderConfig: {
		args: [0.3, 0.5, 0.3],
		pos: new Vector3(0, 0.5, 0),
	},
	cameraConfig: {
		fov: 95,
		far: 75,
		near: 0.1,
		cameraPosition: [0, 5, -6],
	},
};
