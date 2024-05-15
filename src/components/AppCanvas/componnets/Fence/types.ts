import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
	nodes: {
		Cube_0: THREE.Mesh;
	};
	materials: {
		Iron_fence: THREE.MeshStandardMaterial;
	};
};
