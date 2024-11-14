import { StateCreator } from "zustand";

export interface ConfigState {
  decline: boolean;
  updateDecline: (decline: boolean) => void;
}

export const createConfigSlice: StateCreator<ConfigState, [], [], ConfigState> = (set) => ({
  decline: true,
  updateDecline: (decline) => set(() => ({ decline })),
});
