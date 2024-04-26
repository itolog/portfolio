import { PerspectiveCamera, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { RapierRigidBody } from "@react-three/rapier/dist/declarations/src/types";
import { useRef } from "react";

import { heroConfig } from "@/config";
import { ANIMATIONS_TYPE, Controls } from "@/constants";
import { useControls } from "leva";

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
	const character = useRef(null);
	const animationType = useRef(ANIMATIONS_TYPE.IDLE);

	useFrame(() => {
		const impulse = { x: 0, y: 0, z: 0 };

		if (!rigidBody?.current) return;

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

		if (changeRotation && character?.current) {
			// @ts-ignore
			character.current.rotation.y = Math.atan2(linvel.x, linvel.z);
		}
	});

	const { cameraPos, near, far, fov, heroPos } = useControls("options", {
		near: heroConfig.cameraConfig.near,
		far: heroConfig.cameraConfig.far,
		cameraPos: heroConfig.cameraConfig.cameraPosition,
		fov: heroConfig.cameraConfig.fov,
		heroPos: heroConfig.heroPosition,
	});

	return (
		<>
			<PerspectiveCamera makeDefault fov={fov} near={near} far={far} position={cameraPos} />

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
					<CuboidCollider args={heroConfig.colliderConfig.args} />
					<Hero animationType={animationType.current} position={heroPos} />
				</group>
			</RigidBody>
		</>
	);
};

export default HeroController;
