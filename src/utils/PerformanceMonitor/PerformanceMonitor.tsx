import { useThree } from "@react-three/fiber";

import GLBench from "gl-bench/dist/gl-bench";

const PerformanceMonitor = () => {
	const { gl } = useThree();

	const bench = new GLBench(gl.getContext());
	const draw = (now: number) => {
		bench.begin();
		bench.end();
		bench.nextFrame(now);
	};

	gl.setAnimationLoop((now) => draw(now));

	return null;
};

export default PerformanceMonitor;
