import React from 'react';
import PropTypes from 'prop-types';

export default class Events extends React.Component {
  renderEvent(event) {
    // console.log(event);
    return (
      <>
        <div>{event.title}</div>
        <div>{/* event.dates.map(data => <p>{data.start_date}</p>) */}</div>
        <br/>
      </>
    );
  }

  render() {
    // console.log(this.props.events.length);
    if (this.props.events.length === 0) {
      return (
        <div>
          nothing
          <button onClick={() => console.log(this.props)}>click</button>
        </div>
      );
    }

    return (
      <>
        {this.props.events.map(event => <div key={event.id}>{this.renderEvent(event)}</div>)}
        <button onClick={() => console.log(this.props)}>click</button>
      </>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array,
};
