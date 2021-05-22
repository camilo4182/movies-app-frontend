import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieEdit from './MovieEdit';
import RegisterMovie from './RegisterMovie';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/movies' component={MoviesList}/>
            <Route exact path='/movies/new/register' component={RegisterMovie}/>
            <Route path='/movies/:title' component={MovieEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;