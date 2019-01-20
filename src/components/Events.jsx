import React from 'react';
import PropTypes from 'prop-types';

export default class Events extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.events.length === 0) {
      return (
        <div>
          nothing
          <button onClick={() => console.log(this.props)}>click</button>
        </div>
      );
    }

    return (
      <div>
        events
        <button onClick={() => console.log(this.props)}>click</button>
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array,
};
