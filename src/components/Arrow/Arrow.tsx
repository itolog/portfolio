import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

import { arrowUrl } from "@/config";
import * as THREE from "three";

import { ActionName, GLTFResult } from "@/components/Arrow/types.ts";

const actionName: ActionName = "Plane.008|Plane.008Action";

const Arrow = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(arrowUrl) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[actionName]?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="c797f5e83bc34afe92795d7871469a7dfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane008"
                  position={[113.05, 19.211, -15.659]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[34.331, 100, 100]}>
                  <mesh
                    name="Plane008_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008_Material001_0.geometry}
                    material={materials["Material.001"]}
                  />
                </group>
                <group
                  name="Plane004"
                  position={[164.416, 19.211, -15.659]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[34.331, 100, 100]}>
                  <mesh
                    name="Plane004_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_Material001_0.geometry}
                    material={materials["Material.001"]}
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

useGLTF.preload(arrowUrl);

export default Arrow;
