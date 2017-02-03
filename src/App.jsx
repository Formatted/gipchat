import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';

class App extends Component {

  render() {
    return (
      <div className="App">
        <p>GipChat w/ AI</p>
        <InputBox />
      </div>
    );
  }
}

export default App;
