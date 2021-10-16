import React, { Component } from 'react';
import MenuComponent from './MenuComponent'
// import MenuFunction from './Components/MenuFunction';
import { DISHES } from '../shared/Dished';
import DetailDish from './DetailDish';
import Header from './HeaderComponent';
import Footer from './FooterComponet';


class Main extends Component {
  constructor(props) {
    super(props);

        this.state = {
        dishes: DISHES,
        selectedDish: null
        }
    }

    onSelectedDish(itemID) {
        this.setState({selectedDish: itemID})
    }

  render() {
    return (
      <div>
        <Header/>
        <MenuComponent dishes={this.state.dishes}
        onClick={(itemID) => this.onSelectedDish(itemID)}/>
        {/* <MenuFunction/> */}
        <DetailDish
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );

  }
}

export default Main;
