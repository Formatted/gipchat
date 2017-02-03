/* eslint-env browser*/
/* global $ */
/* global responsiveVoice */

import React, { Component } from 'react';
import Convo from './Convo';

class InputBox extends Component {
  constructor() {
    super();
    this.state = {
      question: 'this is y Q',
      reply: 'http://media2.giphy.com/media/12psn8ymXy3dYs/100.gif',
      replyHumanReadable: '',
      value: '',
      history: [],
    };
    this.speak = this.speak.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  speak() {
    const myQ = this.state.value;
    this.setState({ question: this.state.value, value: '' });
    $.ajax({
      url: `/question/${myQ}`,
      dataType: 'json',
      method: 'POST',
      success: (data) => {
        const history2 = this.state.history;
        history2.push([myQ, data.replyHumanReadable]);
        this.setState({ history: history2 });
        this.setState({ reply: data.reply, replyHumanReadable: data.replyHumanReadable });
        responsiveVoice.speak(this.state.replyHumanReadable, 'UK English Male');
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
        <Convo history={this.state.history} />
      </div>
    );
  }


}

export default InputBox;
