

import React, { Component } from 'react';
import Main from './components/main/main';


import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Router>
    <div>
      <Route path="/" component={Main} />
      
    </div>
  </Router>
        
       
       
      </div>
    );
  }
}

export default App;