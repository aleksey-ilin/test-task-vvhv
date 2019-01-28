import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const eventsFetchingState = handleActions({
  [actions.fetchEventsRequest]() {
    return 'requested';
  },
  [actions.fetchEventsFailure]() {
    return 'failed';
  },
  [actions.fetchEventsSuccess]() {
    return 'successed';
  },
}, 'none');

const descriptionFetchingState = handleActions({
  [actions.fetchDescriptionRequest]() {
    return 'requested';
  },
  [actions.fetchDescriptionFailure]() {
    return 'failed';
  },
  [actions.fetchDescriptionSuccess]() {
    return 'successed';
  },
}, 'none');

const events = handleActions({
  [actions.fetchEventsSuccess](state, { payload }) {
    return [...state, ...payload.events];
  },
}, []);

const currentPage = handleActions({
  [actions.changeCurrentPage](state, { payload }) {
    return payload;
  },
}, 0);

const activeEvent = handleActions({
  [actions.changeActiveEvent](state, { payload }) {
    return { ...state, id: payload };
  },
  [actions.fetchDescriptionSuccess](state, { payload }) {
    return { ...state, description: payload };
  },
}, {});

export default combineReducers({
  eventsFetchingState,
  descriptionFetchingState,
  events,
  currentPage,
  activeEvent,
});
