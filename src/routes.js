import { getSearchParams, getCurrentTime } from './utils';

const currentTime = getCurrentTime();

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const host = 'https://kudago.com/public-api/v1.4/events/';
const rawEventsSearchParams = {
  page_size: 30,
  fields: 'id,title,dates,images,place',
  actual_since: currentTime,
  expand: 'dates,place',
};
const rawDescriptionSearchParams = {
  fields: 'title,place,description,body_text,location,age_restriction,price,images,',
  expand: 'images,place,location,dates',
};

export default {
  eventsUrl: page => [corsProxy, host, '?', `page=${page}`, ...getSearchParams(rawEventsSearchParams)].join(''),
  descriptionUrl: id => [corsProxy, host, id.split('.')[0], '?', ...getSearchParams(rawDescriptionSearchParams)].join(''),
};
