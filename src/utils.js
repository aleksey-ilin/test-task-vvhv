export const getSearchParams = searchParams => Object.keys(searchParams).map(key => `&${key}=${searchParams[key]}`);

// export const getEndData = (startData, days) => new Date(startData.setDate(startData.getDate() + days));

export const getCurrentTime = () => Math.round(Date.now() / 1000);

const currentTime = getCurrentTime();

export const getFilteredEvents = events => events
  .map(event => event.dates
    .filter(({ start }) => start >= currentTime)
    .map((data, i) => ({ ...event, id: `${event.id}.${i}`, dates: data })))
  .flat();
