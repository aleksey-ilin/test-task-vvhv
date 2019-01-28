import { connect } from 'react-redux';
import Component from '../components/App';
import * as actionCreators from '../actions';

const Container = connect(
  state => state,
  actionCreators,
)(Component);

export default Container;
