import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <h1>Real-Time Authenticated Data List</h1>
       <p>Watch this space for the pre-blog app I'm learning to build with React, Redux and Firebase.</p>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
