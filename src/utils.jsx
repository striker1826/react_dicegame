export const generateNumber = () => {
  const MAX_NUM = 6;
  const randomNumber = Math.floor(Math.random() * MAX_NUM) + 1;
  return randomNumber;
};
