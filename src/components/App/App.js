import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

// this line allow me to use Route to navagate to other files
import { HashRouter as Router, Route, } from 'react-router-dom';
import Home from './../Home/Home'
import Understanding from './../Understanding/Understanding'
import Support from './../Support/Support'
import Comments from './../Comments/Comments'
import Feedbackreview from './../FeedbackReview/FeedbackReview'

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
          <Route exact path="/understand-content" component={Understanding}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/feedback-review" component={Feedbackreview}/>
        
        </div>
        </Router>

        <br/>
      </div>
    );
  }
}

export default App;
