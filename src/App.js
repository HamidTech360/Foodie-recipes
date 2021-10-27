import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home';
import Product from './pages/product/product';

class App extends Component {

  render(){
   
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/product/:id" component={Product} />
              <Route path="/" component={Home} />
              
          </Switch>
      </BrowserRouter>
    )
  }
  
}

export default App;
