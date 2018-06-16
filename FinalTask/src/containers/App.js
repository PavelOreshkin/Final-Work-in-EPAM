import React, { Component } from 'react';
import SearchPage from './../components/SearchPage';
import ParticularFilmPage from './../components/ParticularFilmPage';
import FavoritesPage from './../components/FavoritesPage';
import '../vendors/reset.css';
import '../bases/bases.scss';
import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={SearchPage} />
        <Route path='/favorites' component={FavoritesPage} />
        <Route path='/film/:title' component={ParticularFilmPage} />
        <Redirect from='/' to='/home' />
      </Switch>      
    )
  }
}
export default App;