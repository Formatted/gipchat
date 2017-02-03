/* eslint-env browser*/
/* global $ */
/* global responsiveVoice */

import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super();
    this.state = {
      question: 'this is y Q',
      reply: 'http://media3.giphy.com/media/VtOUGnwCOouCQ/200.gif',
      replyHumanReadable: '',
      value: '',
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
    // $.post(`/question/${myQ}`, (req, res) => {
    //   console.log(res.body, '==============')
    //   this.setState({ reply: res.body.reply, replyHumanReadable: res.body.replyHumanReadable });
    // });
    $.ajax({
      url: `/question/${myQ}`,
      dataType: 'json',
      method: 'POST',
      success: (data) => {
        // const sayNow = data.replyHumanReadable;
        // console.log(sayNow, 'after say now');
        // responsiveVoice.speak(sayNow, 'UK English Male');
        this.setState({ reply: data.reply, replyHumanReadable: data.replyHumanReadable });
        responsiveVoice.speak(this.state.replyHumanReadable, 'UK English Male');
      },
    });
    // $.ajax({
    //   url: `http://api.giphy.com/v1/stickers/search?q="${this.state.value}"&api_key=dc6zaTOxFJmzC`,
    //   dataType: 'json',
    //   method: 'GET',
    //   cache: false,
    //   success: (data) => {
    //     this.setState({ reply: data.data[0].images.fixed_height.url });
    //   },
    // });
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
