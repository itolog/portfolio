import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Plane008_Material001_0: THREE.Mesh;
    Plane004_Material001_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export type ActionName = "Plane.008|Plane.008Action";
