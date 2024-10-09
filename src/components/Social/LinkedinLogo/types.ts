import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
  };
  materials: {
    glossy_linkedin: THREE.MeshStandardMaterial;
    glossy_putih: THREE.MeshStandardMaterial;
  };
};
