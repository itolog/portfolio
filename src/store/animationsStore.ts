import { create } from "zustand";

interface AnimState {
	socialActive: string;
	updateSocialActive: (active: string) => void;
}

const useAnimationStore = create<AnimState>((set) => ({
	socialActive: "",
	updateSocialActive: (active: string) => set({ socialActive: active }),
}));

export default useAnimationStore;
