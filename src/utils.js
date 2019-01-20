// eslint-disable-next-line import/prefer-default-export
export const getEndData = (startData, days) => {
  const endData = startData.setDate(startData.getDate() + days);
  return new Date(endData);
};
