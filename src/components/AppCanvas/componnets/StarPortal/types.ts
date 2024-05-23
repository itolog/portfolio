import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
	nodes: {
		Cylinder_Material003_0: THREE.Mesh;
		Cylinder_Material002_0: THREE.Mesh;
		Cylinder_Material005_0: THREE.Mesh;
		Cylinder_Material004_0: THREE.Mesh;
		Torus_Material004_0: THREE.Mesh;
		Torus_Material_0: THREE.Mesh;
		Torus001_Material004_0: THREE.Mesh;
		Torus001_Material_0: THREE.Mesh;
		Torus002_Material004_0: THREE.Mesh;
		Torus002_Material_0: THREE.Mesh;
		Torus003_Material004_0: THREE.Mesh;
		Torus003_Material_0: THREE.Mesh;
	};
	materials: {
		["Material.003"]: THREE.MeshStandardMaterial;
		["Material.002"]: THREE.MeshStandardMaterial;
		["Material.005"]: THREE.MeshStandardMaterial;
		["Material.004"]: THREE.MeshStandardMaterial;
		Material: THREE.MeshStandardMaterial;
	};
};

export type ActionName = "Scene";
export type GLTFActions = Record<ActionName, THREE.AnimationAction>;
