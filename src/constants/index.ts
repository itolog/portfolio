import { AnimationType } from "@/types/animations.ts";

export const IS_DEV = process.env.NODE_ENV !== "production";

export const Controls = {
	forward: "forward",
	back: "backward",
	left: "leftward",
	right: "rightward",
	jump: "jump",
	run: "run",
};

export const ANIMATIONS_TYPE: AnimationType = {
	RUN: "run",
	IDLE: "idle",
	JUMP: "jump",
	WALK: "walk",
};
