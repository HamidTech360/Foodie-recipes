import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home';
import SignUp from './pages/signUp/signup'
import Login from './pages/login/login';
import VerifyEmail from './pages/verifyEmail/verify_email';
import Community from './pages/community/community';

class App extends Component {

  render(){
   
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path ="/verify_email" component={VerifyEmail}/>
              <Route path="/community" component={Community} />
              <Route path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    )
  }
  
}

export default App;
