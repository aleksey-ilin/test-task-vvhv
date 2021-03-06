import { connect } from 'react-redux';
import Component from '../components/Carousel';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => {
    const props = {
      activeEvent: state.activeEvent,
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
