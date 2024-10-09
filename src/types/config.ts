import { CuboidArgs } from "@react-three/rapier/dist/declarations/src/types";

import { Vector3 } from "three";

interface ColliderConfig {
  args: CuboidArgs;
  pos: Vector3;
}

interface CameraConfig {
  fov: number;
  far: number;
  near: number;
  cameraPosition: [number, number, number];
}

export interface Config {
  heroPosition?: [number, number, number];
  colliderConfig: ColliderConfig;
  cameraConfig: CameraConfig;
}
