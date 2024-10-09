export const range = (start: number, stop: number, step: number) => {
  return Array.from({ length: (stop - start) / step + 1 }, (_value, index) =>
    Number((start + index * step).toFixed(1)),
  );
};
