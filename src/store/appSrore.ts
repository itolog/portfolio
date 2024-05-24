import { create } from "zustand";

interface AppState {
	isLoading: boolean;
	updateLoading: (loading: boolean) => void;
	activeItem: string;
	updateActiveItem: (active: string) => void;
}

const useAppStore = create<AppState>((set) => ({
	isLoading: true,
	updateLoading: (loading: boolean) => set({ isLoading: loading }),
	activeItem: "",
	updateActiveItem: (active: string) => set({ activeItem: active }),
}));

export default useAppStore;
