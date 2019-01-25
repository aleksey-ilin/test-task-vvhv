export const getSearchParams = searchParams => Object.keys(searchParams).map(key => `&${key}=${searchParams[key]}`);

export const getCurrentTime = () => Math.round(Date.now() / 1000);

const getEndData = (startData, period) => {
  const formattedStartData = new Date(startData * 1000);
  return formattedStartData.setDate(formattedStartData.getDate() + period) / 1000;
};

const currentTime = getCurrentTime();
const endData = getEndData(currentTime, 14);

export const getFilteredEvents = events => events
  .map(event => event.dates
    .filter(({ start }) => (start >= currentTime && start < endData))
    .map((data, i) => ({ ...event, id: `${event.id}.${i}`, dates: data })))
  .flat()
  .sort((a, b) => a.dates.start - b.dates.start);
