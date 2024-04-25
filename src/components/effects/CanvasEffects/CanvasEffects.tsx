import {
	Bloom,
	ChromaticAberration,
	DepthOfField,
	EffectComposer,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

const CanvasEffects = () => {
	return (
		<EffectComposer>
			<DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} />
			<Bloom
				blendFunction={BlendFunction.ADD}
				intensity={1.3} // The bloom intensity.
				width={300} // render width
				height={300} // render height
				kernelSize={5} // blur kernel size
				luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
				luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
			/>
			<ChromaticAberration
				blendFunction={BlendFunction.NORMAL} // blend mode
				offset={[0.0005, 0.0012]} // color offset
			/>
		</EffectComposer>
	);
};

export default CanvasEffects;
