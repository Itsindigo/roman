import React, { Component } from 'react';
import RomanNumeralCalculatorContainer from './containers/romanNumeralCalculatorContainer'
import './App.css';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1 className="App-title">Roman Numeral Converter</h1>
          </header>
          <div>
            <RomanNumeralCalculatorContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
