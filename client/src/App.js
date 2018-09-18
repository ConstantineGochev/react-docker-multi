import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route, Router, Redirect } from 'react-router-dom';
import {browserHistory} from 'react-router'
import HomePage from './components/pages/HomePage'
import BoatRentalPage from './components/pages/BoatRentalPage'
import HeaderMenu from './components/HeaderMenu'
import RegisterBoatPage from './components/pages/RegisterBoatPage'
import HelpPage from './components/pages/HelpPage'
import { createBrowserHistory } from 'history'


export const history = createBrowserHistory({})

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <HeaderMenu />
            <Route exact path='/' component={HomePage} />
            <Route path='/boat-rental' component={BoatRentalPage} />
            <Route path='/register-boat' component={RegisterBoatPage} />
            <Route path='/help' component={HelpPage} />      
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
