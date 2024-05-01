import { ANIMATIONS_TYPE } from "@/constants";
import { create } from "zustand";

interface AnimState {
	animationType: string;
	updateAnimationType: (newAnimType: string) => void;
}

const useAnimationStore = create<AnimState>((set) => ({
	animationType: ANIMATIONS_TYPE.IDLE,
	updateAnimationType: (newAnimType: string) => set({ animationType: newAnimType }),
}));

export default useAnimationStore;
