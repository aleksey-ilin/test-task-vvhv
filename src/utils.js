export const getSearchParams = searchParams => Object.keys(searchParams).map(key => `&${key}=${searchParams[key]}`);

export const getEndData = (startData, days) => {
  const endData = startData.setDate(startData.getDate() + days);
  return new Date(endData);
};
