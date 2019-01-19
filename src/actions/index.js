import { createAction } from 'redux-actions';

export const fetchEventsRequest = createAction('EVENTS_FETCH_REQUEST');
export const fetchEventsSuccess = createAction('EVENTS_FETCH_SUCCESS');
export const fetchEventsFailure = createAction('EVENTS_FETCH_FAILURE');
