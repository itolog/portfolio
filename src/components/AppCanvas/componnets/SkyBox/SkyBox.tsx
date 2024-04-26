import { Environment, useCubeTexture } from "@react-three/drei";

function SkyBox() {
	const texture = useCubeTexture(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"], {
		path: "textures/starMap/",
	});

	return <Environment background map={texture} />;
}

export default SkyBox;
