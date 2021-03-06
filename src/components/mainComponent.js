import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './menuComponent';
import DishDetail from './dishdetailcomponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    render() {

        const Homepage = () => {
            return (
                <Home/>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;