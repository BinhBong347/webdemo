import React, { Component } from 'react';
import './App.css';
import Main from './Components/Maincomponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

// import MenuFunction from './Components/MenuFunction';
// import { DISHES } from './shared/Dished';
const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
            {/* <MenuFunction/> */}
          </div>
        </BrowserRouter>
      </Provider>
    );

  }
}

export default App;
