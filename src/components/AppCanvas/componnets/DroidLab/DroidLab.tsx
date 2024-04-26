import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { GLTFResult } from "@/components/AppCanvas/componnets/DroidLab/types.ts";

const DroidLab = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useLoader(GLTFLoader, "models/drone_lab/scene.gltf") as GLTFResult;

	return (
		<group {...props}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
					<group name="Drone_lab_table_and_holographic_computerobjcleanermaterialmergergles">
						<mesh
							name="Object_2"
							castShadow
							receiveShadow
							geometry={nodes.Object_2.geometry}
							material={materials.wire_080052067}
						/>
						<mesh
							name="Object_3"
							castShadow
							receiveShadow
							geometry={nodes.Object_3.geometry}
							material={materials.wire_097151122}
						/>
						<RigidBody type={"fixed"}>
							<mesh
								name="Object_4"
								castShadow
								receiveShadow
								geometry={nodes.Object_4.geometry}
								material={materials.wire_107106021}
							/>
						</RigidBody>

						<mesh
							name="Object_5"
							castShadow
							receiveShadow
							geometry={nodes.Object_5.geometry}
							material={materials.wire_117238244}
						/>
						<mesh
							name="Object_6"
							castShadow
							receiveShadow
							geometry={nodes.Object_6.geometry}
							material={materials.wire_130158196}
						/>
						<mesh
							name="Object_7"
							castShadow
							receiveShadow
							geometry={nodes.Object_7.geometry}
							material={materials.wire_156154116}
						/>
						<mesh
							name="Object_8"
							castShadow
							receiveShadow
							geometry={nodes.Object_8.geometry}
							material={materials.wire_147138232}
						/>
						<mesh
							name="Object_9"
							castShadow
							receiveShadow
							geometry={nodes.Object_9.geometry}
							material={materials.wire_135245182}
						/>
						<mesh
							name="Object_10"
							castShadow
							receiveShadow
							geometry={nodes.Object_10.geometry}
							material={materials.wire_186252220}
						/>
						<mesh
							name="Object_11"
							castShadow
							receiveShadow
							geometry={nodes.Object_11.geometry}
							material={materials.wire_154243114}
						/>
						<mesh
							name="Object_12"
							castShadow
							receiveShadow
							geometry={nodes.Object_12.geometry}
							material={materials.wire_021109143}
						/>
						<mesh
							name="Object_13"
							castShadow
							receiveShadow
							geometry={nodes.Object_13.geometry}
							material={materials.wire_002010023}
						/>
						<mesh
							name="Object_14"
							castShadow
							receiveShadow
							geometry={nodes.Object_14.geometry}
							material={materials.wire_075171031}
						/>

						<mesh
							name="Object_15"
							castShadow
							receiveShadow
							geometry={nodes.Object_15.geometry}
							material={materials.wire_091029007}
						/>
						{/*  FLOOR */}
						<RigidBody type="fixed" name="floor">
							<mesh
								name="Object_16"
								castShadow
								receiveShadow
								geometry={nodes.Object_16.geometry}
								material={materials.wire_173209035}
							/>
						</RigidBody>
						<mesh
							name="Object_17"
							castShadow
							receiveShadow
							geometry={nodes.Object_17.geometry}
							material={materials.wire_118223104}
						/>
						<mesh
							name="Object_18"
							castShadow
							receiveShadow
							geometry={nodes.Object_18.geometry}
							material={materials.wire_182220173}
						/>
						<mesh
							name="Object_19"
							castShadow
							receiveShadow
							geometry={nodes.Object_19.geometry}
							material={materials.wire_197223205}
						/>
						<mesh
							name="Object_20"
							castShadow
							receiveShadow
							geometry={nodes.Object_20.geometry}
							material={materials.wire_197223205}
						/>
						<mesh
							name="Object_21"
							castShadow
							receiveShadow
							geometry={nodes.Object_21.geometry}
							material={materials.wire_197223205}
						/>
						<mesh
							name="Object_22"
							castShadow
							receiveShadow
							geometry={nodes.Object_22.geometry}
							material={materials.wire_197223205}
						/>
						<mesh
							name="Object_23"
							castShadow
							receiveShadow
							geometry={nodes.Object_23.geometry}
							material={materials.wire_197223205}
						/>
						<mesh
							name="Object_24"
							castShadow
							receiveShadow
							geometry={nodes.Object_24.geometry}
							material={materials.wire_232169249}
						/>
					</group>
				</group>
			</group>
		</group>
	);
};

useGLTF.preload("/drone_lab/scene.gltf");

export default DroidLab;
