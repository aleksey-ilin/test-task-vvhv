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

const events = handleActions({
  [actions.fetchEventsSuccess](state, { payload }) {
    // console.log(events);
    return [...state, ...payload.events];
  },
}, []);

const currentPage = handleActions({
  [actions.changeCurrentpage](state, { payload }) {
    return payload;
  },
}, 0);

export default combineReducers({
  eventsFetchingState,
  events,
  currentPage,
});
