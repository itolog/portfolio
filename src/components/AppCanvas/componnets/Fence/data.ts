import { isEven, range } from "@/utils/lodash";
import { Vector3 } from "three";

export const fenceData = range(-8, 8, 0.3).map((item, index) => {
	return {
		position: new Vector3(item, isEven(index) ? 0.5 : 0.4, -8.4),
		scale: 0.1,
	};
});
