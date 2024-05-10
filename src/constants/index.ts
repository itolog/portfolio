import { AnimationType } from "@/types/animations.ts";

export const IS_DEV = process.env.NODE_ENV !== "production";

export const Controls = {
	forward: "forward",
	back: "back",
	left: "left",
	right: "right",
	jump: "jump",
};

export const ANIMATIONS_TYPE: AnimationType = {
	RUN: "run",
	IDLE: "idle",
	JUMP: "jump",
	WALK: "walk",
};
