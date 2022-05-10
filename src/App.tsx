import React from 'react';
import { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/profile" component={ Profile } />
        <Route path="/home" component={ Home } />
        <Route path="/" component={ Home } />
      </Switch>
      
    )
  }
}

export default App;