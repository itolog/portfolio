import { useVideoTexture } from "@react-three/drei";

import { videoUrl } from "@/config";

const VideoMaterial = () => {
	const texture = useVideoTexture(videoUrl);

	return <meshStandardMaterial map={texture} toneMapped={false} />;
};

export default VideoMaterial;
