import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

// this line allow me to use Route to navagate to other files
import { HashRouter as Router, Route, } from 'react-router-dom';
import Home from './../Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>

        <div>
        
          <Route exact path="/" component={Home}/>
          <Route />
          <Route />
          <Route />
        
        </div>
        </Router>

        <br/>
      </div>
    );
  }
}

export default App;
