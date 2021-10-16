import React, { Component } from 'react';
import MenuComponent from './MenuComponent'
import Home from './HomeComponent';
// import MenuFunction from './Components/MenuFunction';
import { DISHES } from '../shared/Dished';
import DetailDish from './DetailDish';
import Header from './HeaderComponent';
import Footer from './FooterComponet';

import { Route, Switch, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);

        this.state = {
        dishes: DISHES,
        //selectedDish: null
        }
    }

    // onSelectedDish(itemID) {
    //     this.setState({selectedDish: itemID})
    // }

  render() {

    const HomePage=() =>{
      return(
        <Home/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes}/>}/>
          <Redirect to="home"/>
        </Switch>
        {/* <MenuComponent dishes={this.state.dishes}
        onClick={(itemID) => this.onSelectedDish(itemID)}/> */}
        {/* <MenuFunction/> */}
        {/* <DetailDish
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
        <Footer/>
      </div>
    );

  }
}

export default Main;
