import { StateCreator } from "zustand";

export interface CameraState {
  cameraFirstPerson: boolean;
  updateCameraFirstPerson: () => void;
}

export const createCameraSlice: StateCreator<CameraState, [], [], CameraState> = (set) => ({
  cameraFirstPerson: false,
  updateCameraFirstPerson: () =>
    set((state) => ({
      cameraFirstPerson: !state.cameraFirstPerson,
    })),
});
