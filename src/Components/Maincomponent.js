import React, { Component } from 'react';
import MenuComponent from './MenuComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
// import MenuFunction from './Components/MenuFunction';
import DetailDish from './DetailDish';
import Header from './HeaderComponent';
import Footer from './FooterComponet';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {
  constructor(props) {
    super(props);

  }

  // onSelectedDish(itemID) {
  //     this.setState({selectedDish: itemID})
  // }

  render() {

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promo={this.props.promotions.filter((promo) => promo.featured)[0]}
          lead={this.props.leaders.filter((lead) => lead.featured)[0]}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <MenuComponent dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId"
            component={({ match }) => <DetailDish
              dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />}
          />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/aboutus" exact component={() => <About leaders={this.props.dishes} />} />
          <Redirect to="home" />
        </Switch>
        {/* <MenuComponent dishes={this.state.dishes}
        onClick={(itemID) => this.onSelectedDish(itemID)}/> */}
        {/* <MenuFunction/> */}
        {/* <DetailDish
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
        <Footer />
      </div>
    );

  }
}

export default withRouter(connect(mapStateToProps)(Main));
