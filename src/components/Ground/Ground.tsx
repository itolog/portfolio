import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

import { mapUrl } from "@/config";
import * as THREE from "three";

import { ActionName, GLTFResult } from "@/components/Ground/types.ts";

// import VideoMaterial from "@/components/VideoMaterial/VideoMaterial.tsx";

const action: ActionName = "ufo_01";
const Ground = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(mapUrl) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[action]?.play();
  }, [actions]);

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Background_Buildings_34">
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
          <mesh
            name="Object_56"
            castShadow
            receiveShadow
            geometry={nodes.Object_56.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Object_67"
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.police_station_tex}
          />
          <mesh
            name="Object_82"
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials.Logo_1}
          />
          <mesh
            name="Object_86"
            castShadow
            receiveShadow
            geometry={nodes.Object_86.geometry}
            material={materials.PaletteMaterial002}
          />
        </group>
      </group>
    </RigidBody>
  );
};

useGLTF.preload(mapUrl);

export default Ground;
