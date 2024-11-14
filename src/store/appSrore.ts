import { IS_DEV } from "@/constants";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ActiveItemState, createActiveItemSlice } from "@/store/activeItem";
import { CameraState, createCameraSlice } from "@/store/camera";
import { ConfigState, createConfigSlice } from "@/store/canvasConfig";
import { CommonState, createCommonSlice } from "@/store/common";

export type AppStoreState = CameraState & ConfigState & ActiveItemState & CommonState;

const useAppStore = create<AppStoreState>()(
  devtools(
    (...a) => ({
      ...createConfigSlice(...a),
      ...createActiveItemSlice(...a),
      ...createCommonSlice(...a),
      ...createCameraSlice(...a),
    }),
    {
      enabled: IS_DEV,
    },
  ),
);

export default useAppStore;
