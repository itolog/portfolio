import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import * as THREE from "three";

import { GLTFResult } from "@/components/Hero/types.ts";

const Hero = (props: JSX.IntrinsicElements["group"]) => {
	const group = useRef<THREE.Group>(null);
	const {
		nodes,
		materials,
		// animations
	} = useGLTF("/robot/scene.gltf") as GLTFResult;
	// const { actions } = useAnimations<GLTFActions>(animations, group);
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={7.079}>
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
