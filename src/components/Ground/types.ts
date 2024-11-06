import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Object_14: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_67: THREE.Mesh;
    Object_82: THREE.Mesh;
    Object_86: THREE.Mesh;
  };
  materials: {
    city_tex: THREE.MeshPhysicalMaterial;
    sidewalk_tile: THREE.MeshStandardMaterial;
    ground_block: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    police_station_tex: THREE.MeshStandardMaterial;
    Logo_1: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshPhysicalMaterial;
  };
};

export type ActionName = "ufo_01";
