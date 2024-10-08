export const isMobile = (): boolean => {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  return regex.test(navigator.userAgent);
};

export const hasTouchSupport = (): boolean => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};
