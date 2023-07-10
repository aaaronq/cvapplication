import './App.css';
import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="cv">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
