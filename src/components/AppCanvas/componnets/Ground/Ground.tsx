import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

import { mapUrl } from "@/config";
import * as THREE from "three";

import { ActionName, GLTFResult } from "@/components/AppCanvas/componnets/Ground/types.ts";

const action: ActionName = "ufo_01";
const Ground = (props: JSX.IntrinsicElements["group"]) => {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF(mapUrl) as GLTFResult;
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions[action]?.play();
	}, [actions]);

	return (
		<RigidBody type="fixed" colliders="trimesh" ccd>
			<group ref={group} {...props} dispose={null}>
				<group name="Scene">
					<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
						<group name="root">
							<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
								<group name="Scene_79">
									<group name="invasion_77">
										<group name="Background_Decor_37">
											<group name="Background_Buildings_34">
												<group name="Background_Building_1_30">
													<mesh
														name="Object_8"
														castShadow
														receiveShadow
														geometry={nodes.Object_8.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Background_Building_2_31">
													<mesh
														name="Object_10"
														castShadow
														receiveShadow
														geometry={nodes.Object_10.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Background_Building_3_32">
													<mesh
														name="Object_12"
														castShadow
														receiveShadow
														geometry={nodes.Object_12.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="UFO_33" position={[0, 31, -1]} scale={0.691}>
													<mesh
														name="Object_14"
														castShadow
														receiveShadow
														geometry={nodes.Object_14.geometry}
														material={materials.city_tex}
													/>
												</group>
											</group>
											<group name="tree_1_35">
												<mesh
													name="Object_16"
													castShadow
													receiveShadow
													geometry={nodes.Object_16.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="tree_2_36">
												<mesh
													name="Object_18"
													castShadow
													receiveShadow
													geometry={nodes.Object_18.geometry}
													material={materials.city_tex}
												/>
											</group>
										</group>
										<group name="Base_45">
											<group name="gbase_01_38">
												<mesh
													name="Object_21"
													castShadow
													receiveShadow
													geometry={nodes.Object_21.geometry}
													material={materials.sidewalk_tile}
												/>
												<mesh
													name="Object_22"
													castShadow
													receiveShadow
													geometry={nodes.Object_22.geometry}
													material={materials.city_tex}
												/>
												<mesh
													name="Object_23"
													castShadow
													receiveShadow
													geometry={nodes.Object_23.geometry}
													material={materials.ground_block}
												/>
											</group>
											<group name="gbase_02_39">
												<mesh
													name="Object_25"
													castShadow
													receiveShadow
													geometry={nodes.Object_25.geometry}
													material={materials.city_tex}
												/>
												<mesh
													name="Object_26"
													castShadow
													receiveShadow
													geometry={nodes.Object_26.geometry}
													material={materials.sidewalk_tile}
												/>
											</group>
											<group name="gbase_03_40">
												<mesh
													name="Object_28"
													castShadow
													receiveShadow
													geometry={nodes.Object_28.geometry}
													material={materials.city_tex}
												/>
												<mesh
													name="Object_29"
													castShadow
													receiveShadow
													geometry={nodes.Object_29.geometry}
													material={materials.ground_block}
												/>
												<mesh
													name="Object_30"
													castShadow
													receiveShadow
													geometry={nodes.Object_30.geometry}
													material={materials.sidewalk_tile}
												/>
											</group>
											<group name="Grass_tiles_43">
												<group name="grass_tile_1_41">
													<mesh
														name="Object_33"
														castShadow
														receiveShadow
														geometry={nodes.Object_33.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="grass_tile_2_42">
													<mesh
														name="Object_35"
														castShadow
														receiveShadow
														geometry={nodes.Object_35.geometry}
														material={materials.city_tex}
													/>
												</group>
											</group>
											<group name="ground_44" position={[-27.83, 69.149, -25.04]}>
												<mesh
													name="Object_37"
													castShadow
													receiveShadow
													geometry={nodes.Object_37.geometry}
													material={materials.ground_block}
												/>
											</group>
										</group>
										<group name="Buildings_61">
											<group name="Buildings1_58">
												<group name="Building_01_46">
													<mesh
														name="Object_41"
														castShadow
														receiveShadow
														geometry={nodes.Object_41.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_02_47">
													<mesh
														name="Object_43"
														castShadow
														receiveShadow
														geometry={nodes.Object_43.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_03_48">
													<mesh
														name="Object_45"
														castShadow
														receiveShadow
														geometry={nodes.Object_45.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_04_49">
													<mesh
														name="Object_47"
														castShadow
														receiveShadow
														geometry={nodes.Object_47.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_05_50">
													<mesh
														name="Object_49"
														castShadow
														receiveShadow
														geometry={nodes.Object_49.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_06_51">
													<mesh
														name="Object_51"
														castShadow
														receiveShadow
														geometry={nodes.Object_51.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_07_52">
													<mesh
														name="Object_53"
														castShadow
														receiveShadow
														geometry={nodes.Object_53.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_08_53">
													<mesh
														name="Object_55"
														castShadow
														receiveShadow
														geometry={nodes.Object_55.geometry}
														material={materials.city_tex}
													/>
													<mesh
														name="Object_56"
														castShadow
														receiveShadow
														geometry={nodes.Object_56.geometry}
														material={materials.Default_Material}
													/>
													<mesh
														name="Object_57"
														castShadow
														receiveShadow
														geometry={nodes.Object_57.geometry}
														material={materials.lambert2}
													/>
												</group>
												<group name="Building_09_54">
													<mesh
														name="Object_59"
														castShadow
														receiveShadow
														geometry={nodes.Object_59.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_10_55">
													<mesh
														name="Object_61"
														castShadow
														receiveShadow
														geometry={nodes.Object_61.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_11_56">
													<mesh
														name="Object_63"
														castShadow
														receiveShadow
														geometry={nodes.Object_63.geometry}
														material={materials.city_tex}
													/>
												</group>
												<group name="Building_12_57">
													<mesh
														name="Object_65"
														castShadow
														receiveShadow
														geometry={nodes.Object_65.geometry}
														material={materials.city_tex}
													/>
												</group>
											</group>
											<group name="Police_Station_Ground_59">
												<mesh
													name="Object_67"
													castShadow
													receiveShadow
													geometry={nodes.Object_67.geometry}
													material={materials.police_station_tex}
												/>
												<mesh
													name="Object_68"
													castShadow
													receiveShadow
													geometry={nodes.Object_68.geometry}
													material={materials.sidewalk_tile}
												/>
											</group>
											<group name="Police_Station_Main_60">
												<mesh
													name="Object_70"
													castShadow
													receiveShadow
													geometry={nodes.Object_70.geometry}
													material={materials.police_station_tex}
												/>
											</group>
										</group>
										<group name="Cars_66">
											<group name="Cars_01_210_62" position={[0.43, 0, 0]} />
											<group name="Cars_02_212_63">
												<mesh
													name="Object_75"
													castShadow
													receiveShadow
													geometry={nodes.Object_75.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="Cars_03_214_64" />
											<group name="Cars_04_216_65" position={[0.733, 0, 0]}>
												<mesh
													name="Object_79"
													castShadow
													receiveShadow
													geometry={nodes.Object_79.geometry}
													material={materials.city_tex}
												/>
											</group>
										</group>
										<group name="Decor_76">
											<group name="Billboards_67">
												<mesh
													name="Object_82"
													castShadow
													receiveShadow
													geometry={nodes.Object_82.geometry}
													material={materials.Logo_1}
												/>
												<mesh
													name="Object_83"
													castShadow
													receiveShadow
													geometry={nodes.Object_83.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="Decor_01_68">
												<mesh
													name="Object_85"
													castShadow
													receiveShadow
													geometry={nodes.Object_85.geometry}
													material={materials.city_tex}
												/>
												<mesh
													name="Object_86"
													castShadow
													receiveShadow
													geometry={nodes.Object_86.geometry}
													material={materials.Logo}
												/>
											</group>
											<group name="Decor_02_69">
												<mesh
													name="Object_88"
													castShadow
													receiveShadow
													geometry={nodes.Object_88.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="Decor_03_70">
												<mesh
													name="Object_90"
													castShadow
													receiveShadow
													geometry={nodes.Object_90.geometry}
													material={materials.city_tex}
												/>
												<mesh
													name="Object_91"
													castShadow
													receiveShadow
													geometry={nodes.Object_91.geometry}
													material={materials.police_station_tex}
												/>
											</group>
											<group name="Decor_04_71">
												<mesh
													name="Object_93"
													castShadow
													receiveShadow
													geometry={nodes.Object_93.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="Decor_05_72">
												<mesh
													name="Object_95"
													castShadow
													receiveShadow
													geometry={nodes.Object_95.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="Decor_06_73">
												<mesh
													name="Object_97"
													castShadow
													receiveShadow
													geometry={nodes.Object_97.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="Decor_07_74">
												<mesh
													name="Object_99"
													castShadow
													receiveShadow
													geometry={nodes.Object_99.geometry}
													material={materials.city_tex}
												/>
											</group>
											<group name="Decor_08_75">
												<mesh
													name="Object_101"
													castShadow
													receiveShadow
													geometry={nodes.Object_101.geometry}
													material={materials.city_tex}
												/>
											</group>
										</group>
									</group>
									<group
										name="Minimap_StaticMeshComponent0_78"
										position={[0, -3, 0]}
										scale={[144.313, 1, 144.313]}>
										<mesh
											name="Object_104"
											castShadow
											receiveShadow
											geometry={nodes.Object_104.geometry}
											material={materials.MI_city_ufo_Minimap}
										/>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</RigidBody>
	);
};

useGLTF.preload(mapUrl);

export default Ground;
