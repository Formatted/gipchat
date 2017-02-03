import React, { Component } from 'react';
import Lines from './Lines';

class Convo extends Component {
  render() {
    const rows = [];
    this.props.history.map((item, index) => {
      rows.unshift(<Lines key={index} question={item[0]} ans={item[1]} />);
    });
    if (this.props.history.length === 0) {
      return <p>Ask away!</p>;
    } else {
      return (
        <div>{ rows }</div>
      );
    }
  }
}

export default Convo;
