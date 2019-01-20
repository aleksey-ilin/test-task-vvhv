import axios from 'axios';
import { createAction } from 'redux-actions';
// import routes from '../routes';
// import { getEndData } from '../utils';

// const startData = new Date();
// console.log(startData);
// console.log(startData.getTime());
// const period = 14;
// const endData = getEndData(startData, period);
// console.log(endData);

export const fetchEventsRequest = createAction('EVENTS_FETCH_REQUEST');
export const fetchEventsSuccess = createAction('EVENTS_FETCH_SUCCESS');
export const fetchEventsFailure = createAction('EVENTS_FETCH_FAILURE');

export const fetchEvents = () => async (dispatch) => {
  dispatch(fetchEventsRequest());
  try {
    const url0 = 'https://cors-anywhere.herokuapp.com/https://kudago.com/public-api/v1.2/events/?fields=id,title,dates,site_url&actual_since=1547930184&page_size=3';
    console.log('url0 => ', url0);
    const response0 = await axios.get(url0);
    console.log('data0 => ', response0.data);
    /* const url1 = routes.eventsUrl(1, 1, 1444385206);
    console.log(url1);
    const url2 = routes.eventsUrl(2, 100, startData.getTime() / 1000);
    console.log(url2);
    const response1 = await axios.get(url1);
    console.log('1 => ', response1.data);
    const response2 = await axios.get(url2);
    console.log('2 => ', response2.data); */
    dispatch(fetchEventsSuccess({ events: response0.data }));
  } catch (e) {
    console.log(e);
    dispatch(fetchEventsFailure());
  }
};
