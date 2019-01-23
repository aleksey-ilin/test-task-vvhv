import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';
import { getFilteredEvents, getNormalizedEvents } from '../utils';

export const fetchEventsRequest = createAction('EVENTS_FETCH_REQUEST');
export const fetchEventsSuccess = createAction('EVENTS_FETCH_SUCCESS');
export const fetchEventsFailure = createAction('EVENTS_FETCH_FAILURE');

/* export const fetchEvents = () => async (dispatch) => {
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
}; */

export const fetchEvents = () => (dispatch) => {
  const getEvents = async (page, events) => {
    dispatch(fetchEventsRequest());
    try {
      const url = routes.eventsUrl(page);
      // console.log(url);
      const response = await axios.get(url);
      // console.log('data0 => ', response.data.results);
      // dispatch(fetchEventsSuccess({ events: response.data.results }));
      // console.log(response.data.results.length);
      // if (response.data.results.length === 10) {
      if (page === 3) {
        // console.log(100);
        // getEvents(page + 1);
        getEvents(2, [...events, ...response.data.results]);
      } else {
        // console.log([...events, ...response.data.results]);
        const filteredEvents = getFilteredEvents([...events, ...response.data.results]);
        // console.log(filteredEvents);
        const normalizedEvents = getNormalizedEvents(filteredEvents);
        console.log(normalizedEvents);
        dispatch(fetchEventsSuccess({ events: [...events, ...response.data.results] }));
      }
    } catch (e) {
      console.log(e);
      dispatch(fetchEventsFailure());
    }
  };
  getEvents(1, []);
};
