import React, { Component } from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import BoatRentalPage from './components/pages/BoatRentalPage'
import HeaderMenu from './components/HeaderMenu'
import RegisterBoatPage from './components/pages/RegisterBoatPage'
import HelpPage from './components/pages/HelpPage'
import ProfilePage from './components/pages/ProfilePage'
import { createBrowserHistory } from 'history'


const history = createBrowserHistory()
//console.log(history)
class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <HeaderMenu history = {history}/>
            <Route exact path='/'  render={(props) => <HomePage {...props} /> }/>
            <Route path='/boat-rental' render={(props) => <BoatRentalPage {...props} /> }/>
            <Route path='/profile'  render={(props) => <ProfilePage {...props} /> }/>
            <Route path='/register-boat' render={(props) => <RegisterBoatPage {...props} /> }/>
            <Route path='/help' render={(props) => <HelpPage {...props} /> }/>      
          </div>
        </Router>
    );
  }
}

export default App;
