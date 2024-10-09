import { SkillsModalType } from "@/types";
import { create } from "zustand";

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
  cameraFirstPerson: boolean;
  updateCameraFirstPerson: () => void;
  showInfo: boolean;
  updateShowInfo: () => void;
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
  cameraFirstPerson: false,
  updateCameraFirstPerson: () =>
    set((state) => ({
      cameraFirstPerson: !state.cameraFirstPerson,
    })),
  showInfo: false,
  updateShowInfo: () =>
    set((state) => ({
      showInfo: !state.showInfo,
    })),
}));

export default useAppStore;
