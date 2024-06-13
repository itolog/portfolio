import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import { RigidItem } from "@/constants";
import * as THREE from "three";

import { GLTFResult } from "@/components/Hero/types.ts";

const Hero = (props: JSX.IntrinsicElements["group"]) => {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials } = useGLTF("/models/rick.glb") as GLTFResult;

	return (
		<group name={RigidItem.HERO} position={[0, -0.9, 0]} ref={group} {...props} dispose={null}>
			<group name="Scene">
				<group name="Armature">
					<group name="Rick">
						<skinnedMesh
							name="Sphere002"
							geometry={nodes.Sphere002.geometry}
							material={materials["Shoes and Eyes"]}
							skeleton={nodes.Sphere002.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_1"
							geometry={nodes.Sphere002_1.geometry}
							material={materials.Skin}
							skeleton={nodes.Sphere002_1.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_2"
							geometry={nodes.Sphere002_2.geometry}
							material={materials.Hair}
							skeleton={nodes.Sphere002_2.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_3"
							geometry={nodes.Sphere002_3.geometry}
							material={materials.White}
							skeleton={nodes.Sphere002_3.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_4"
							geometry={nodes.Sphere002_4.geometry}
							material={materials.Shirt}
							skeleton={nodes.Sphere002_4.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_5"
							geometry={nodes.Sphere002_5.geometry}
							material={materials.Belt}
							skeleton={nodes.Sphere002_5.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_6"
							geometry={nodes.Sphere002_6.geometry}
							material={materials.Buckle}
							skeleton={nodes.Sphere002_6.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_7"
							geometry={nodes.Sphere002_7.geometry}
							material={materials.Trousers}
							skeleton={nodes.Sphere002_7.skeleton}
						/>
						<skinnedMesh
							name="Sphere002_8"
							geometry={nodes.Sphere002_8.geometry}
							material={materials.Socks}
							skeleton={nodes.Sphere002_8.skeleton}
						/>
					</group>
					<primitive object={nodes.mixamorigHips} />
					<primitive object={nodes.Ctrl_Master} />
					<primitive object={nodes.Ctrl_ArmPole_IK_Left} />
					<primitive object={nodes.Ctrl_Hand_IK_Left} />
					<primitive object={nodes.Ctrl_ArmPole_IK_Right} />
					<primitive object={nodes.Ctrl_Hand_IK_Right} />
					<primitive object={nodes.Ctrl_Foot_IK_Left} />
					<primitive object={nodes.Ctrl_LegPole_IK_Left} />
					<primitive object={nodes.Ctrl_Foot_IK_Right} />
					<primitive object={nodes.Ctrl_LegPole_IK_Right} />
				</group>
				<group name="cs_grp">
					<group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.822} />
					<group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.822} />
					<group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.206} />
					<group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.206} />
					<group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.206} />
					<group
						name="cs_foot"
						position={[0.5, 10.5, 0]}
						rotation={[-Math.PI, 0, 0]}
						scale={0.308}
					/>
					<group
						name="cs_foot001"
						position={[0.5, 10.5, 0]}
						rotation={[-Math.PI, 0, 0]}
						scale={0.308}
					/>
					<group
						name="cs_foot002"
						position={[0.5, 10.5, 0]}
						rotation={[-Math.PI, 0, 0]}
						scale={0.308}
					/>
					<group
						name="cs_foot_01"
						position={[0.5, 18.5, 0]}
						rotation={[0, Math.PI / 2, 0]}
						scale={2.186}
					/>
					<group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.592} />
					<group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.822} />
					<group
						name="cs_hand"
						position={[0.5, 19.5, 0]}
						rotation={[-Math.PI, 0, 0]}
						scale={0.308}
					/>
					<group name="cs_head" position={[0.5, 13.5, 0]} scale={0.206} />
					<group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.206} />
					<group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
					<group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.206} />
					<group
						name="cs_shoulder_left"
						position={[0.5, 15.5, 0]}
						rotation={[-Math.PI, -Math.PI / 2, 0]}
						scale={1.038}
					/>
					<group
						name="cs_shoulder_right"
						position={[0.5, 16.5, 0]}
						rotation={[-Math.PI, -Math.PI / 2, 0]}
						scale={1.038}
					/>
					<group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.206} />
					<group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.206} />
					<group
						name="cs_square"
						position={[1.5, 1.497, 0]}
						rotation={[-Math.PI, 0, 0]}
						scale={0.154}
					/>
					<group
						name="cs_square_2"
						position={[0.5, 1.497, 0]}
						rotation={[-Math.PI, 0, 0]}
						scale={0.154}
					/>
					<group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.822} />
					<group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.429} />
				</group>
			</group>
		</group>
	);
};

useGLTF.preload("/models/rick.glb");

export default Hero;
