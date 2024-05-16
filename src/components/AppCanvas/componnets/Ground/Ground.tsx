import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";

import { RepeatWrapping, TextureLoader } from "three";

const Ground = () => {
	const [roughness, normal] = useLoader(TextureLoader, [
		"textures/terrain-roughness.jpg",
		"textures/terrain-normal.jpg",
	]);

	useEffect(() => {
		[normal, roughness].forEach((t) => {
			t.wrapS = RepeatWrapping;
			t.wrapT = RepeatWrapping;
			t.repeat.set(5, 5);
			t.offset.set(0, 0);
		});
	}, [normal, roughness]);

	return (
		<RigidBody type="fixed" colliders="trimesh" ccd name="floor">
			<mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
				<planeGeometry args={[10, 10, 10]} />
				<MeshReflectorMaterial
					envMapIntensity={0}
					normalMap={normal}
					roughnessMap={roughness}
					dithering={true}
					color={[0.015, 0.015, 0.015]}
					roughness={0.7}
					blur={[1000, 400]}
					mixBlur={30}
					mixStrength={80}
					mixContrast={1}
					resolution={1024}
					mirror={0}
					depthScale={0.01}
					minDepthThreshold={0.9}
					maxDepthThreshold={1}
					depthToBlurRatioBias={0.25}
					reflectorOffset={0.2}
				/>
			</mesh>
		</RigidBody>
	);
};

export default Ground;