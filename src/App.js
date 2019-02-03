import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />   
      {/* switch allows only route to be loaded at a time */}
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
