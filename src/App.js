import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />   
      {/* switch allows only route to be loaded at a time */}
      <Switch>
        {/* adding 'exact' makes the browser look for exact match */}
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
