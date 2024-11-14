import { StateCreator } from "zustand/index";

export interface ActiveItemState {
  activeItem: string;
  updateActiveItem: (active: string) => void;
}

export const createActiveItemSlice: StateCreator<ActiveItemState, [], [], ActiveItemState> = (
  set,
) => ({
  activeItem: "",
  updateActiveItem: (active: string) => set({ activeItem: active }),
});
