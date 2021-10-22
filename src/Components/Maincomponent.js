import React, { Component } from 'react';
import MenuComponent from './MenuComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
// import MenuFunction from './Components/MenuFunction';
import { DISHES } from '../shared/Dished';
import { COMMENTS } from "../shared/Comment";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotion";
import DetailDish from './DetailDish';
import Header from './HeaderComponent';
import Footer from './FooterComponet';

import { Route, Switch, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);

        this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
        //selectedDish: null
        }
    }

    // onSelectedDish(itemID) {
    //     this.setState({selectedDish: itemID})
    // }

  render() {
    
    const HomePage=() =>{
      return(
        <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promo={this.state.promotions.filter((promo) => promo.featured)[0]}
        lead={this.state.leaders.filter((lead) => lead.featured)[0]}
         />
      );
    }

    const DishWithID = ({match}) => {
      return (
        <DetailDish dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10)) [0]}
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}/>
      )
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishID" component={DishWithID} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/aboutus" exact component={() => <About leaders={this.state.dishes}/>}/>
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
