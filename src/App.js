import React, { Component } from 'react';
import './App.css';
import Main from './Components/Maincomponent';
// import MenuFunction from './Components/MenuFunction';
// import { DISHES } from './shared/Dished';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Main/>
        {/* <MenuFunction/> */}
      </div>
    );

  }
}

export default App;
