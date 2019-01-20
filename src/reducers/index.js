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
    return [...state, payload];
  },
}, []);

export default combineReducers({
  eventsFetchingState,
  events,
});
