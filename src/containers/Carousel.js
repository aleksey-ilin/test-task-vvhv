import { connect } from 'react-redux';
import Component from '../components/Carousel';
import * as actionCreators from '../actions';

const Container = connect(
  state => state,
  actionCreators,
)(Component);

export default Container;
