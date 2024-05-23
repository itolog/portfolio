import { useAnimations, useGLTF } from "@react-three/drei";
import { FC, useEffect, useRef } from "react";

import { starPortalUrl } from "@/config";
import * as THREE from "three";

import { GLTFResult } from "@/components/AppCanvas/componnets/StarPortal/types.ts";

interface Props {
	playAnimation?: boolean;
	scale?: number;
}

const StarPortal: FC<Props> = ({ playAnimation = false, scale = 0.25 }) => {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF(starPortalUrl) as GLTFResult;
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		if (playAnimation) {
			actions["Scene"]?.play();
		} else {
			actions["Scene"]?.stop();
		}
	}, [actions, playAnimation]);

	return (
		<group ref={group} rotation-y={Math.PI * 0.5} scale={scale} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group
						name="99a8dfa5c5d3475d9cc922d639e9dd0afbx"
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.01}>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="Cylinder"
									position={[43.575, 77.731, 0]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}>
									<mesh
										name="Cylinder_Material003_0"
										castShadow
										receiveShadow
										geometry={nodes.Cylinder_Material003_0.geometry}
										material={materials["Material.003"]}
									/>
									<mesh
										name="Cylinder_Material002_0"
										castShadow
										receiveShadow
										geometry={nodes.Cylinder_Material002_0.geometry}
										material={materials["Material.002"]}
									/>
									<mesh
										name="Cylinder_Material005_0"
										castShadow
										receiveShadow
										geometry={nodes.Cylinder_Material005_0.geometry}
										material={materials["Material.005"]}
									/>
									<mesh
										name="Cylinder_Material004_0"
										castShadow
										receiveShadow
										geometry={nodes.Cylinder_Material004_0.geometry}
										material={materials["Material.004"]}
									/>
								</group>
								<group name="Torus" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
									<mesh
										name="Torus_Material004_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus_Material004_0.geometry}
										material={materials["Material.004"]}
									/>
									<mesh
										name="Torus_Material_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus_Material_0.geometry}
										material={materials.Material}
									/>
								</group>
								<group name="Torus001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
									<mesh
										name="Torus001_Material004_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus001_Material004_0.geometry}
										material={materials["Material.004"]}
									/>
									<mesh
										name="Torus001_Material_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus001_Material_0.geometry}
										material={materials.Material}
									/>
								</group>
								<group name="Torus002" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
									<mesh
										name="Torus002_Material004_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus002_Material004_0.geometry}
										material={materials["Material.004"]}
									/>
									<mesh
										name="Torus002_Material_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus002_Material_0.geometry}
										material={materials.Material}
									/>
								</group>
								<group name="Torus003" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
									<mesh
										name="Torus003_Material004_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus003_Material004_0.geometry}
										material={materials["Material.004"]}
									/>
									<mesh
										name="Torus003_Material_0"
										castShadow
										receiveShadow
										geometry={nodes.Torus003_Material_0.geometry}
										material={materials.Material}
									/>
								</group>
								<group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
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
