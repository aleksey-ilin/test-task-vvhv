import { getSearchParams, getCurrentTime } from './utils';

const currentTime = getCurrentTime();

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const host = 'https://kudago.com/public-api/v1.4/events/?';
const rawSearchParams = {
  page_size: 40,
  fields: 'id,title,dates,images,place',
  actual_since: currentTime,
  expand: 'dates,place',
  /* order_by: 'id', */
};

export default {
  eventsUrl: page => [corsProxy, host, `&page=${page}`, ...getSearchParams(rawSearchParams)].join(''),
};
