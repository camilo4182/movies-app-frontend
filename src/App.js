import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieEdit from "./MovieEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/movies' exact={true} component={MoviesList}/>
            <Route path='/movies/:id' component={MovieEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;