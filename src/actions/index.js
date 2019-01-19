import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchEventsRequest = createAction('EVENTS_FETCH_REQUEST');
export const fetchEventsSuccess = createAction('EVENTS_FETCH_SUCCESS');
export const fetchEventsFailure = createAction('EVENTS_FETCH_FAILURE');

export const fetchEvents = () => async (dispatch) => {
  dispatch(fetchEventsRequest());
  try {
    const url = 'https://kudago.com/public-api/v1.4/events/?lang=&fields=&expand=&order_by=&text_format=&ids=&location=&actual_since=1444385206&actual_until=1444385405&is_free=&categories=kvn,-magic&lon=&lat=&radius=';
    const response = await axios.get(url);
    dispatch(fetchEventsSuccess({ tasks: response.data }));
  } catch (e) {
    dispatch(fetchEventsFailure());
  }
};
