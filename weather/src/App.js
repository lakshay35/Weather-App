import React, { Component } from 'react';
import './App.css';
import Forecast from './components/forecast/forecast';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Forecast />
      </div>
    );
  }
}
