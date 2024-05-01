import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";

// import { ANIMATIONS_TYPE } from "@/constants";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { GLTFResult } from "@/components/AppCanvas/componnets/Hero/types.ts";

interface Props {
	animationType: string;
}

// @ts-ignore
const Hero = ({ animationType, ...props }: JSX.IntrinsicElements["group"] | Props) => {
	const group = useRef(null);
	const { nodes, materials, animations } = useLoader(
		GLTFLoader,
		"models/robot/scene.gltf",
	) as GLTFResult;
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		// console.log(animationType);
		actions?.[animationType]?.reset().play();

		// return () => {
		// 	actions[characterState].fadeOut(0.2);
		// };
	}, [actions, animationType]);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={5.079}>
					<group name="root">
						<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
							<group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
								<group
									name="d44709362ceb4426bad5754e98994db6fbx_1"
									rotation={[Math.PI / 2, 0, 0]}
									scale={0.01}>
									<group name="Object_2_2">
										<group name="RootNode_3">
											<group
												name="SK_Huggy_RobotNewao_4"
												rotation={[-Math.PI / 2, 0, 0]}
												scale={100}>
												<group name="Object_5_5">
													<group name="GLTF_created_0">
														<primitive object={nodes.GLTF_created_0_rootJoint} />
														<skinnedMesh
															name="Object_109"
															geometry={nodes.Object_109.geometry}
															material={materials.MI_RobotHuggyLower}
															skeleton={nodes.Object_109.skeleton}
														/>
														<skinnedMesh
															name="Object_112"
															geometry={nodes.Object_112.geometry}
															material={materials.MI_RobotHuggyUpper}
															skeleton={nodes.Object_112.skeleton}
														/>
														<skinnedMesh
															name="Object_115"
															geometry={nodes.Object_115.geometry}
															material={materials.MI_RobotHuggyEye}
															skeleton={nodes.Object_115.skeleton}
														/>
														<group name="Object_103_103_correction">
															<group name="Object_103_103" />
														</group>
														<group name="Object_104_104_correction">
															<group name="Object_104_104" />
														</group>
														<group name="Object_105_105_correction">
															<group name="Object_105_105" />
														</group>
													</group>
												</group>
											</group>
										</group>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
};

useGLTF.preload("/robot/scene.gltf");

export default Hero;
