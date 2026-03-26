export const timeBlocker = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
