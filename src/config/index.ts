import { Controls } from "@/constants";

export const fontUrl = "/fonts/rick_font.json";
export const fontBaseUrl = "/fonts/get_schwifty.ttf";
export const ipodlUrl = "/models/ipod/scene.gltf";
export const damagedAudio1Url = "/audio/damaged.mp3";
export const mapUrl = "/models/opt_map.glb";
export const heroUrl = "/models/rick.glb";
export const linkedinUrl = "/models/3d_linkedin_logo/scene.gltf";
export const gitUrl = "/models/3d_github_logo/scene.gltf";
export const videoUrl =
  "https://firebasestorage.googleapis.com/v0/b/yodi-b787d.appspot.com/o/videoplayback.mp4?alt=media&token=" +
    import.meta.env.VITE_STORAGE_TOKEN || process.env.VITE_STORAGE_TOKEN;
export const arrowUrl = "/models/arrow/scene.gltf";

export const keysMap = [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  { name: Controls.jump, keys: ["Space"] },
  { name: Controls.run, keys: ["Shift"] },
  { name: Controls.enter, keys: ["Enter"] },
  { name: Controls.cancel, keys: ["KeyR"] },
  { name: Controls.camera, keys: ["KeyE"] },
  { name: Controls.info, keys: ["KeyI"] },
];
