export const getSearchParams = searchParams => Object.keys(searchParams).map(key => `&${key}=${searchParams[key]}`);

// export const getEndData = (startData, days) => new Date(startData.setDate(startData.getDate() + days));

export const currentTime = () => Math.round(Date.now() / 1000);

export const getFilteredEvents = events => events
  .map((event) => {
    const filteredDates = event.dates.filter(data => data.start >= currentTime());
    if (filteredDates.length === 0) {
      return null;
    }
    return { ...event, dates: filteredDates };
  })
  .filter(event => event !== null);

export const getNormalizedEvents = events => events.map(event => event.dates.map((data, i) => ({
  id: `${event.id}.${i}`,
  dates: data,
  title: event.title,
  place: event.place,
  images: event.images,
}))).flat();
