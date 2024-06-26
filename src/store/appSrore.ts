import { create } from "zustand";

export type SkillsModalType = "skills" | "justForFun";

interface SkillsModal {
	open: boolean;
	type: SkillsModalType | null;
}

interface AppState {
	isLoading: boolean;
	updateLoading: (loading: boolean) => void;
	activeItem: string;
	updateActiveItem: (active: string) => void;
	skillsModal: SkillsModal;
	updateFrameVisibility: (payload: SkillsModal) => void;
}

const useAppStore = create<AppState>((set) => ({
	isLoading: true,
	updateLoading: (loading: boolean) => set({ isLoading: loading }),
	activeItem: "",
	updateActiveItem: (active: string) => set({ activeItem: active }),
	skillsModal: {
		open: false,
		type: "skills",
	},
	updateFrameVisibility: (payload: SkillsModal) =>
		set({
			skillsModal: payload,
		}),
}));

export default useAppStore;
