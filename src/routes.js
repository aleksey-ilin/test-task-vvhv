import { getSearchParams } from './utils';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const host = 'https://kudago.com/public-api/v1.4/events/?';
const currentTime = Math.round(Date.now() / 1000);
const searchParams = {
  page_size: 10,
  fields: 'id,title,dates,images,place,site_url',
  actual_since: currentTime,
  expand: 'dates,place',
};

export default {
  eventsUrl: page => [corsProxy, host, `&page=${page}`, ...getSearchParams(searchParams)].join(''),
};
