import React, { Component } from 'react';

class Convo extends Component {
  render() {
    const rows = [];
    this.props.history.map((item) => {
      rows.push(item);
    });
    if (this.props.history.length === 0) {
      return <p>No convo yet</p>;
    } else {
      return (
        <p>{ rows }</p>
      );
    }
  }
}

export default Convo;
