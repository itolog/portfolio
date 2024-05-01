import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody, useRapier } from "@react-three/rapier";
import { RapierRigidBody } from "@react-three/rapier/dist/declarations/src/types";
import { useEffect, useRef } from "react";

import { heroConfig } from "@/config";
import { ANIMATIONS_TYPE, Controls } from "@/constants";
import * as THREE from "three";
import { Group } from "three";

import Hero from "@/components/AppCanvas/componnets/Hero/Hero.tsx";

const JUMP_FORCE = 1;
const MOVEMENT_SPEED = 0.05;
const MAX_VEL = 3;

const HeroController = () => {
	const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
	const leftPressed = useKeyboardControls((state) => state[Controls.left]);
	const rightPressed = useKeyboardControls((state) => state[Controls.right]);
	const backPressed = useKeyboardControls((state) => state[Controls.back]);
	const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);
	const rigidBody = useRef<RapierRigidBody>(null);
	const isOnFloor = useRef(true);
	const character = useRef<Group>(null);
	const animationType = useRef(ANIMATIONS_TYPE.IDLE);

	const { world } = useRapier();

	const characterController = world.createCharacterController(0.01);
	characterController.setApplyImpulsesToDynamicBodies(true);
	characterController.enableAutostep(5, 0.1, false);
	characterController.enableSnapToGround(1);

	useEffect(() => {
		if (!rigidBody?.current || !character.current) return;
		const worldPosition = character.current.getWorldPosition(new THREE.Vector3());
		const worldRotation = character.current.getWorldQuaternion(new THREE.Quaternion());
		rigidBody.current.setTranslation(worldPosition, true);
		rigidBody.current.setRotation(worldRotation, true);
	}, []);

	useFrame(() => {
		const impulse = new THREE.Vector3(0, 0, 0);

		if (!rigidBody?.current || !character.current) return;

		const linvel = rigidBody.current.linvel();
		let changeRotation = false;
		if (rightPressed && linvel.x < MAX_VEL) {
			animationType.current = ANIMATIONS_TYPE.RUN;
			impulse.x -= MOVEMENT_SPEED;
			changeRotation = true;
		} else if (leftPressed && linvel.x > -MAX_VEL) {
			animationType.current = ANIMATIONS_TYPE.RUN;
			impulse.x += MOVEMENT_SPEED;
			changeRotation = true;
		} else if (backPressed && linvel.z < MAX_VEL) {
			animationType.current = ANIMATIONS_TYPE.RUN;
			impulse.z -= MOVEMENT_SPEED;
			changeRotation = true;
		} else if (forwardPressed && linvel.z > -MAX_VEL) {
			animationType.current = ANIMATIONS_TYPE.RUN;
			impulse.z += MOVEMENT_SPEED;
			changeRotation = true;
		} else if (jumpPressed && isOnFloor.current) {
			animationType.current = ANIMATIONS_TYPE.JUMP;
			impulse.y += JUMP_FORCE;
			isOnFloor.current = false;
		} else {
			animationType.current = ANIMATIONS_TYPE.IDLE;
		}

		rigidBody.current.applyImpulse(impulse, true);
		characterController.computeColliderMovement(rigidBody.current.collider(0), impulse);
		if (changeRotation && character?.current) {
			character.current.rotation.y = Math.atan2(linvel.x, linvel.z);
		}
	});

	return (
		<RigidBody
			ref={rigidBody}
			colliders={false}
			enabledRotations={[false, false, false]}
			onCollisionEnter={({ other }) => {
				if (other.rigidBodyObject?.name === "floor") {
					isOnFloor.current = true;
				}
			}}
			onCollisionExit={({ other }) => {
				if (other.rigidBodyObject?.name === "floor") {
					isOnFloor.current = false;
				}
			}}>
			<group ref={character}>
				<CuboidCollider position={[0, 1, 0]} args={heroConfig.colliderConfig.args} />
				<Hero animationType={animationType.current} />
			</group>
		</RigidBody>
	);
};

export default HeroController;
