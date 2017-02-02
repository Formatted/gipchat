/* eslint-env browser*/
/* global $ */

import React, { Component, PropTypes } from 'react';

class InputBox extends Component {
  constructor() {
    super();
    this.state = {
      question: 'this is y Q',
      reply: 'http://media3.giphy.com/media/VtOUGnwCOouCQ/200.gif',
      value: '',
    };
    this.speak = this.speak.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  speak() {
    this.setState({ question: this.state.value, value: '' });
    responsiveVoice.speak(this.state.value, 'UK English Male');
    $.ajax({
      url: `http://api.giphy.com/v1/stickers/search?q="${this.state.value}"&api_key=dc6zaTOxFJmzC`,
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: (data) => {
        this.setState({ reply: data.data[0].images.fixed_height.url });
      },
    });
  }

  render() {
    return (
      <div className="inputBox">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.speak}>
          Let&apos;s hear it!
        </button>
        <img src={this.state.reply} alt="asd" />
      </div>
    );
  }


}

export default InputBox;
