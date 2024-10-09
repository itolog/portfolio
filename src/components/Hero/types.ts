import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Sphere002: THREE.SkinnedMesh;
    Sphere002_1: THREE.SkinnedMesh;
    Sphere002_2: THREE.SkinnedMesh;
    Sphere002_3: THREE.SkinnedMesh;
    Sphere002_4: THREE.SkinnedMesh;
    Sphere002_5: THREE.SkinnedMesh;
    Sphere002_6: THREE.SkinnedMesh;
    Sphere002_7: THREE.SkinnedMesh;
    Sphere002_8: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
    Ctrl_Master: THREE.Bone;
    Ctrl_ArmPole_IK_Left: THREE.Bone;
    Ctrl_Hand_IK_Left: THREE.Bone;
    Ctrl_ArmPole_IK_Right: THREE.Bone;
    Ctrl_Hand_IK_Right: THREE.Bone;
    Ctrl_Foot_IK_Left: THREE.Bone;
    Ctrl_LegPole_IK_Left: THREE.Bone;
    Ctrl_Foot_IK_Right: THREE.Bone;
    Ctrl_LegPole_IK_Right: THREE.Bone;
  };
  materials: {
    ["Shoes and Eyes"]: THREE.MeshStandardMaterial;
    Skin: THREE.MeshStandardMaterial;
    Hair: THREE.MeshStandardMaterial;
    White: THREE.MeshStandardMaterial;
    Shirt: THREE.MeshStandardMaterial;
    Belt: THREE.MeshStandardMaterial;
    Buckle: THREE.MeshStandardMaterial;
    Trousers: THREE.MeshStandardMaterial;
    Socks: THREE.MeshStandardMaterial;
  };
};

export type ActionName = "idle" | "jump" | "run" | "walk";
