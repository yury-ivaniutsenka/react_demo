import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';

class Router extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Router;
