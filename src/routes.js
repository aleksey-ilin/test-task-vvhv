const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const host = 'https://kudago.com/public-api/v1.2/events/?';

export default {
  eventsUrl: (page, pageSize, actualSince) => [corsProxy, host, `page=${page}`, `&page_size=${pageSize}`, '&fields=title,dates', '&order_by=dates', `&actual_since=${actualSince}`].join(''),
};
