import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route, Router, Redirect } from 'react-router-dom';
import {browserHistory} from 'react-router'
import HomePage from './components/pages/HomePage'
import BoatRentalPage from './components/pages/BoatRentalPage'
import HeaderMenu from './components/HeaderMenu'
import RegisterBoatPage from './components/pages/RegisterBoatPage'
import HelpPage from './components/pages/HelpPage'
import ProfilePage from './components/pages/ProfilePage'
import { createBrowserHistory } from 'history'


const history = createBrowserHistory()
console.log(history)
class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <HeaderMenu />
            <Route exact path='/'  render={(props) => <HomePage {...props} /> }/>
            <Route path='/boat-rental' component={BoatRentalPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/register-boat' component={RegisterBoatPage} />
            <Route path='/help' component={HelpPage} />      
          </div>
        </Router>
    );
  }
}

export default App;
