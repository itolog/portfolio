import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
	nodes: {
		Object_109: THREE.SkinnedMesh;
		Object_112: THREE.SkinnedMesh;
		Object_115: THREE.SkinnedMesh;
		GLTF_created_0_rootJoint: THREE.Bone;
	};
	materials: {
		MI_RobotHuggyLower: THREE.MeshPhysicalMaterial;
		MI_RobotHuggyUpper: THREE.MeshPhysicalMaterial;
		MI_RobotHuggyEye: THREE.MeshStandardMaterial;
	};
};

export type ActionName =
	| "SK_Huggy_RobotNew.ao|A_Huggy_Idle"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Walk"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Dance_Bedrock"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Attack"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Carry"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Charge"
	| "SK_Huggy_RobotNew.ao|A_Huggy_CrouchIdle"
	| "SK_Huggy_RobotNew.ao|A_Huggy_CrouchWalk"
	| "SK_Huggy_RobotNew.ao|A_Huggy_CrouchWalkBackwards"
	| "SK_Huggy_RobotNew.ao|A_Huggy_CrouchWalkBackwardsNoStride"
	| "SK_Huggy_RobotNew.ao|A_Huggy_CrouchWalkNoStride"
	| "SK_Huggy_RobotNew.ao|A_Huggy_FP_Attack"
	| "SK_Huggy_RobotNew.ao|A_Huggy_FP_FallLoop"
	| "SK_Huggy_RobotNew.ao|A_Huggy_FP_Idle"
	| "SK_Huggy_RobotNew.ao|A_Huggy_FP_Jump"
	| "SK_Huggy_RobotNew.ao|A_Huggy_FP_Land"
	| "SK_Huggy_RobotNew.ao|A_Huggy_FP_Run"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Jump"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Jumpscare_MonsterPOV_Default"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Jumpscare_PlayerPOV_Default"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Jumpscare_ThirdPerson_Default"
	| "SK_Huggy_RobotNew.ao|A_Huggy_MiniAlert"
	| "SK_Huggy_RobotNew.ao|A_Huggy_MiniIdle"
	| "SK_Huggy_RobotNew.ao|A_Huggy_MiniTurn"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Roar"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Run"
	| "SK_Huggy_RobotNew.ao|A_Huggy_SelectScreenIdle"
	| "SK_Huggy_RobotNew.ao|A_Huggy_SelectScreenIntro"
	| "SK_Huggy_RobotNew.ao|A_Huggy_SitIdle"
	| "SK_Huggy_RobotNew.ao|A_Huggy_SitTransition"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Smash_3RD"
	| "SK_Huggy_RobotNew.ao|A_Huggy_Smash_FP"
	| "SK_Huggy_RobotNew.ao|A_Huggy_TurnLegDown"
	| "SK_Huggy_RobotNew.ao|A_Huggy_TurnLegLift"
	| "SK_Huggy_RobotNew.ao|A_Huggy_WalkBackwards"
	| "SK_Huggy_RobotNew.ao|A_Huggy_WalkBackwardsNoStride"
	| "SK_Huggy_RobotNew.ao|A_Huggy_WalkNoStride";
export type GLTFActions = Record<ActionName, THREE.AnimationAction>;
