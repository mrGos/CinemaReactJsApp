import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Main from './Components/Main'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App ">
            <Main/>           
        </div>
      </Router>
    );
  }
}

export default App;
