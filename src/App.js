import React, { Component } from 'react';
import RomanNumeralCalculatorContainer from './containers/romanNumeralCalculatorContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Roman Numeral Converter</h1>
        </header>
        <div>
          <RomanNumeralCalculatorContainer />
        </div>
      </div>
    );
  }
}

export default App;
