import { useAnimations, useGLTF } from "@react-three/drei";
import { FC, useEffect, useRef } from "react";

import { starPortalUrl } from "@/config";
import * as THREE from "three";

import { ActionName, GLTFResult } from "@/components/AppCanvas/componnets/StarPortal/types.ts";

interface Props {
	playAnimation?: boolean;
	scale?: number;
	position?: [number, number, number];
}

const animName: ActionName = "Take 001";

const StarPortal: FC<Props> = ({ playAnimation, scale, position }) => {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF(starPortalUrl) as GLTFResult;
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		if (playAnimation) {
			actions[animName]?.play();
		} else {
			actions[animName]?.stop();
		}
	}, [actions, playAnimation]);

	return (
		<group castShadow receiveShadow ref={group} position={position} scale={scale} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={21.98}>
					<group name="root">
						<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
							<group name="Xingguang_0">
								<group name="Quad_1" scale={0.014}>
									<mesh
										name="Object_5"
										castShadow
										receiveShadow
										geometry={nodes.Object_5.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(2)_2" position={[0.006, 0, -0.027]} scale={0.014}>
									<mesh
										name="Object_7"
										castShadow
										receiveShadow
										geometry={nodes.Object_7.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(3)_3" position={[-0.015, 0, -0.029]} scale={0.014}>
									<mesh
										name="Object_9"
										castShadow
										receiveShadow
										geometry={nodes.Object_9.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(4)_4" position={[-0.027, 0, -0.009]} scale={0.014}>
									<mesh
										name="Object_11"
										castShadow
										receiveShadow
										geometry={nodes.Object_11.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(5)_5" position={[-0.025, 0, 0.011]} scale={0.014}>
									<mesh
										name="Object_13"
										castShadow
										receiveShadow
										geometry={nodes.Object_13.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(6)_6" position={[0.023, 0, -0.012]} scale={0.014}>
									<mesh
										name="Object_15"
										castShadow
										receiveShadow
										geometry={nodes.Object_15.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(7)_7" position={[0.023, 0, 0.006]} scale={0.014}>
									<mesh
										name="Object_17"
										castShadow
										receiveShadow
										geometry={nodes.Object_17.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(8)_8" position={[-0.007, 0, 0.011]} scale={0.014}>
									<mesh
										name="Object_19"
										castShadow
										receiveShadow
										geometry={nodes.Object_19.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(9)_9" position={[0.009, 0, 0.016]} scale={0.014}>
									<mesh
										name="Object_21"
										castShadow
										receiveShadow
										geometry={nodes.Object_21.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(10)_10" position={[0.024, 0, -0.032]} scale={0.014}>
									<mesh
										name="Object_23"
										castShadow
										receiveShadow
										geometry={nodes.Object_23.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(11)_11" position={[-0.001, 0, -0.047]} scale={0.014}>
									<mesh
										name="Object_25"
										castShadow
										receiveShadow
										geometry={nodes.Object_25.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(12)_12" position={[-0.03, 0, -0.03]} scale={0.014}>
									<mesh
										name="Object_27"
										castShadow
										receiveShadow
										geometry={nodes.Object_27.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(13)_13" position={[-0.045, 0, -0.005]} scale={0.014}>
									<mesh
										name="Object_29"
										castShadow
										receiveShadow
										geometry={nodes.Object_29.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(14)_14" position={[-0.043, 0, 0.01]} scale={0.014}>
									<mesh
										name="Object_31"
										castShadow
										receiveShadow
										geometry={nodes.Object_31.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(15)_15" position={[-0.03, 0, 0.017]} scale={0.014}>
									<mesh
										name="Object_33"
										castShadow
										receiveShadow
										geometry={nodes.Object_33.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(16)_16" position={[-0.016, 0, 0.025]} scale={0.014}>
									<mesh
										name="Object_35"
										castShadow
										receiveShadow
										geometry={nodes.Object_35.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(17)_17" position={[0.019, 0, 0.027]} scale={0.014}>
									<mesh
										name="Object_37"
										castShadow
										receiveShadow
										geometry={nodes.Object_37.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(18)_18" position={[-0.002, 0, 0.027]} scale={0.014}>
									<mesh
										name="Object_39"
										castShadow
										receiveShadow
										geometry={nodes.Object_39.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(19)_19" position={[0.035, 0, 0.012]} scale={0.014}>
									<mesh
										name="Object_41"
										castShadow
										receiveShadow
										geometry={nodes.Object_41.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(20)_20" position={[0.043, 0, -0.008]} scale={0.014}>
									<mesh
										name="Object_43"
										castShadow
										receiveShadow
										geometry={nodes.Object_43.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(21)_21" position={[0.047, 0, -0.032]} scale={0.014}>
									<mesh
										name="Object_45"
										castShadow
										receiveShadow
										geometry={nodes.Object_45.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(22)_22" position={[0.02, 0, -0.058]} scale={0.014}>
									<mesh
										name="Object_47"
										castShadow
										receiveShadow
										geometry={nodes.Object_47.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(23)_23" position={[-0.021, 0, -0.05]} scale={0.014}>
									<mesh
										name="Object_49"
										castShadow
										receiveShadow
										geometry={nodes.Object_49.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="Quad_(24)_24" position={[-0.043, 0, -0.031]} scale={0.014}>
									<mesh
										name="Object_51"
										castShadow
										receiveShadow
										geometry={nodes.Object_51.geometry}
										material={materials.xingguang}
									/>
								</group>
								<group name="shu_25" position={[0.028, 0, -0.058]} scale={0.014}>
									<mesh
										name="Object_53"
										castShadow
										receiveShadow
										geometry={nodes.Object_53.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(1)_26" position={[0.011, 0, -0.06]} scale={0.014}>
									<mesh
										name="Object_55"
										castShadow
										receiveShadow
										geometry={nodes.Object_55.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(2)_27" position={[0.041, 0, -0.053]} scale={0.014}>
									<mesh
										name="Object_57"
										castShadow
										receiveShadow
										geometry={nodes.Object_57.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(3)_28" position={[0.057, 0, -0.035]} scale={0.014}>
									<mesh
										name="Object_59"
										castShadow
										receiveShadow
										geometry={nodes.Object_59.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(4)_29" position={[0.063, 0, -0.013]} scale={0.014}>
									<mesh
										name="Object_61"
										castShadow
										receiveShadow
										geometry={nodes.Object_61.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(5)_30" position={[0.063, 0, 0.005]} scale={0.014}>
									<mesh
										name="Object_63"
										castShadow
										receiveShadow
										geometry={nodes.Object_63.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(6)_31" position={[0.058, 0, 0.032]} scale={0.014}>
									<mesh
										name="Object_65"
										castShadow
										receiveShadow
										geometry={nodes.Object_65.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(7)_32" position={[0.04, 0, 0.042]} scale={0.014}>
									<mesh
										name="Object_67"
										castShadow
										receiveShadow
										geometry={nodes.Object_67.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(8)_33" position={[0.021, 0, 0.046]} scale={0.014}>
									<mesh
										name="Object_69"
										castShadow
										receiveShadow
										geometry={nodes.Object_69.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(9)_34" position={[-0.002, 0, 0.047]} scale={0.014}>
									<mesh
										name="Object_71"
										castShadow
										receiveShadow
										geometry={nodes.Object_71.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(10)_35" position={[-0.023, 0, 0.043]} scale={0.014}>
									<mesh
										name="Object_73"
										castShadow
										receiveShadow
										geometry={nodes.Object_73.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(11)_36" position={[-0.038, 0, 0.035]} scale={0.014}>
									<mesh
										name="Object_75"
										castShadow
										receiveShadow
										geometry={nodes.Object_75.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(12)_37" position={[-0.052, 0, 0.019]} scale={0.014}>
									<mesh
										name="Object_77"
										castShadow
										receiveShadow
										geometry={nodes.Object_77.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(13)_38" position={[-0.052, 0, 0.019]} scale={0.014}>
									<mesh
										name="Object_79"
										castShadow
										receiveShadow
										geometry={nodes.Object_79.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(14)_39" position={[-0.057, 0, 0.001]} scale={0.014}>
									<mesh
										name="Object_81"
										castShadow
										receiveShadow
										geometry={nodes.Object_81.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(15)_40" position={[-0.058, 0, -0.013]} scale={0.014}>
									<mesh
										name="Object_83"
										castShadow
										receiveShadow
										geometry={nodes.Object_83.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(16)_41" position={[-0.056, 0, -0.026]} scale={0.014}>
									<mesh
										name="Object_85"
										castShadow
										receiveShadow
										geometry={nodes.Object_85.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(17)_42" position={[-0.049, 0, -0.042]} scale={0.014}>
									<mesh
										name="Object_87"
										castShadow
										receiveShadow
										geometry={nodes.Object_87.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(18)_43" position={[-0.036, 0, -0.053]} scale={0.014}>
									<mesh
										name="Object_89"
										castShadow
										receiveShadow
										geometry={nodes.Object_89.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(19)_44" position={[-0.024, 0, -0.055]} scale={0.014}>
									<mesh
										name="Object_91"
										castShadow
										receiveShadow
										geometry={nodes.Object_91.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(20)_45" position={[-0.006, 0, -0.061]} scale={0.014}>
									<mesh
										name="Object_93"
										castShadow
										receiveShadow
										geometry={nodes.Object_93.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(21)_46" position={[-0.006, 0, -0.061]} scale={0.014}>
									<mesh
										name="Object_95"
										castShadow
										receiveShadow
										geometry={nodes.Object_95.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group name="shu_(22)_47" position={[0.023, 0, 0.047]} scale={0.014}>
									<mesh
										name="Object_97"
										castShadow
										receiveShadow
										geometry={nodes.Object_97.geometry}
										material={materials.guangshu}
									/>
								</group>
								<group
									name="jianbian1_49"
									rotation={[Math.PI / 2, 0, -0.595]}
									scale={[0.505, 0.505, 0.681]}>
									<mesh
										name="Object_99"
										castShadow
										receiveShadow
										geometry={nodes.Object_99.geometry}
										material={materials.guangshushu1}
									/>
								</group>
								<group
									name="xuanwo_50"
									position={[0, 0.012, 0]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={0.174}>
									<mesh
										name="Object_101"
										castShadow
										receiveShadow
										geometry={nodes.Object_101.geometry}
										material={materials.yuanhuan}
									/>
								</group>
								<group
									name="xuanwo_(2)_51"
									position={[0, 0.012, 0]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={0.174}>
									<mesh
										name="Object_103"
										castShadow
										receiveShadow
										geometry={nodes.Object_103.geometry}
										material={materials.yuanhuan}
									/>
								</group>
								<group
									name="xuanwo_(3)_52"
									position={[0, 0.012, 0]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={0.174}>
									<mesh
										name="Object_105"
										castShadow
										receiveShadow
										geometry={nodes.Object_105.geometry}
										material={materials.yuanhuan}
									/>
								</group>
								<group
									name="jianbian1_(1)_53"
									rotation={[Math.PI / 2, 0, 0]}
									scale={[0.505, 0.505, 0.681]}>
									<mesh
										name="Object_107"
										castShadow
										receiveShadow
										geometry={nodes.Object_107.geometry}
										material={materials.guangshushu1}
									/>
								</group>
								<group
									name="jianbian1_(2)_54"
									rotation={[Math.PI / 2, 0, 0]}
									scale={[0.505, 0.505, 0.681]}>
									<mesh
										name="Object_109"
										castShadow
										receiveShadow
										geometry={nodes.Object_109.geometry}
										material={materials.guangshushu1}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
};

useGLTF.preload(starPortalUrl);

export default StarPortal;
