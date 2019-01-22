import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const fetchEventsRequest = createAction('EVENTS_FETCH_REQUEST');
export const fetchEventsSuccess = createAction('EVENTS_FETCH_SUCCESS');
export const fetchEventsFailure = createAction('EVENTS_FETCH_FAILURE');

export const fetchEvents = () => async (dispatch) => {
  dispatch(fetchEventsRequest());
  try {
    const url = routes.eventsUrl(1);
    console.log(url);
    const response = await axios.get(url);
    console.log('data0 => ', response.data.results);
    dispatch(fetchEventsSuccess({ events: response.data.results }));
  } catch (e) {
    console.log(e);
    dispatch(fetchEventsFailure());
  }
};
