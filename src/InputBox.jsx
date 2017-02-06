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
      reply: 'http://media2.giphy.com/media/12psn8ymXy3dYs/200.gif',
      replyHumanReadable: '',
      value: '',
      history: [],
    };
    this.speak = this.speak.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enterHit = this.enterHit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  enterHit(e) {
    if (e.key === 'Enter') {
      this.speak();
    }
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
        responsiveVoice.speak(this.state.replyHumanReadable, 'UK English Female');
      },
    });
  }

  render() {
    return (
      <div className="inputBox">
        <img id="picRpl" src={this.state.reply} alt="asd" />
        <input id="inputBoxBack"type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.enterHit} />
        <Convo history={this.state.history} />
      </div>
    );
  }


}

export default InputBox;
