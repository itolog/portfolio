import {
  AdaptiveDpr,
  AdaptiveEvents,
  PerformanceMonitor,
  PerformanceMonitorApi,
  Stars,
} from "@react-three/drei";

import { IS_DEV } from "@/constants";
import Stats from "@/utils/Stats/Stats";

import useAppStore from "@/store/appSrore";
import createSelectors from "@/store/createSelectors";

const CanvasCommon = () => {
  const updateDecline = createSelectors(useAppStore).use.updateDecline();
  const handleDecline = () => {
    updateDecline(true);
  };

  const handIncline = () => {
    updateDecline(false);
  };

  const handleFallback = ({ fps }: PerformanceMonitorApi) => {
    const isDecline = fps <= 50;
    updateDecline(isDecline);
  };

  return (
    <>
      {IS_DEV && <Stats />}
      <PerformanceMonitor
        onDecline={handleDecline}
        onIncline={handIncline}
        onFallback={handleFallback}
        flipflops={3}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <ambientLight intensity={4} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
    </>
  );
};

export default CanvasCommon;
