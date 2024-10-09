import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
  };
  materials: {
    ["Material.006"]: THREE.MeshStandardMaterial;
    Shiney_Back: THREE.MeshStandardMaterial;
    Port: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    Wheel: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
  };
};
