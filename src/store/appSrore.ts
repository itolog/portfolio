import { create } from "zustand";

interface AppState {
	isLoading: boolean;
	updateLoading: (loading: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
	isLoading: true,
	updateLoading: (loading: boolean) => set({ isLoading: loading }),
}));

export default useAppStore;
