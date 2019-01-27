import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';
import { getFilteredEvents } from '../utils';

export const fetchEventsRequest = createAction('EVENTS_FETCH_REQUEST');
export const fetchEventsSuccess = createAction('EVENTS_FETCH_SUCCESS');
export const fetchEventsFailure = createAction('EVENTS_FETCH_FAILURE');

export const changeCurrentPage = createAction('PAGE_CURRENT_CHANGE');

export const changeActiveEvent = createAction('EVENT_ACTIVE_CHANGE');

export const fetchDescriptionRequest = createAction('DESCRIPTION_FETCH_REQUEST');
export const fetchDescriptionSuccess = createAction('DESCRIPTION_FETCH_SUCCESS');
export const fetchDescriptionFailure = createAction('DESCRIPTION_FETCH_FAILURE');

export const fetchEvents = () => (dispatch) => {
  const getEvents = async (page, events) => {
    dispatch(fetchEventsRequest());
    try {
      const url = routes.eventsUrl(page);
      const response = await axios.get(url);
      if (response.data.results.length === 100) {
        getEvents(page + 1, [...events, ...response.data.results]);
      } else {
        const filteredEvents = getFilteredEvents([...events, ...response.data.results]);
        dispatch(fetchEventsSuccess({ events: filteredEvents }));
      }
    } catch (e) {
      console.log(e);
      dispatch(fetchEventsFailure());
    }
  };
  getEvents(1, []);
};

export const fetchDescription = id => async (dispatch) => {
  dispatch(fetchDescriptionRequest());
  try {
    const url = routes.descriptionUrl(id);
    const response = await await axios.get(url);
    dispatch(fetchDescriptionSuccess(response.data));
  } catch (e) {
    console.log(e);
    dispatch(fetchDescriptionFailure());
  }
};
