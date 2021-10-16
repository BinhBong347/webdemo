import React, { Component } from 'react';
import './App.css';
import Main from './Components/Maincomponent';
import { BrowserRouter } from 'react-router-dom'

// import MenuFunction from './Components/MenuFunction';
// import { DISHES } from './shared/Dished';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main/>
          {/* <MenuFunction/> */}
        </div>

      </BrowserRouter>
    );

  }
}

export default App;
