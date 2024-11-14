import { SkillsModalType } from "@/types";
import { StateCreator } from "zustand";

export interface SkillsModal {
  open: boolean;
  type: SkillsModalType | null;
}

export interface CommonState {
  skillsModal: SkillsModal;
  updateFrameVisibility: (payload: SkillsModal) => void;
  showInfo: boolean;
  updateShowInfo: () => void;
}

export const createCommonSlice: StateCreator<CommonState, [], [], CommonState> = (set) => ({
  skillsModal: {
    open: false,
    type: "skills",
  },
  updateFrameVisibility: (payload: SkillsModal) =>
    set({
      skillsModal: payload,
    }),
  showInfo: false,
  updateShowInfo: () =>
    set((state) => ({
      showInfo: !state.showInfo,
    })),
});
