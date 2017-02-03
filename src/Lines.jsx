import React, { Component } from 'react';

class Lines extends Component {
  render() {
    return (
      <div>
        <p>{this.props.ans}</p>
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Lines;
