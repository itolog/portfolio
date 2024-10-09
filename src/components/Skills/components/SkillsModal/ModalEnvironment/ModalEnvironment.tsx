import { Cloud, Clouds, Stars } from "@react-three/drei";

import { MeshBasicMaterial } from "three";

const ModalEnvironment = () => {
  return (
    <>
      <fog attach="fog" args={["#27282c", 0, 80]} />
      <Clouds material={MeshBasicMaterial}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
        <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
      </Clouds>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    </>
  );
};

export default ModalEnvironment;
