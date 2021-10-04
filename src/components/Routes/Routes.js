import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../Header/Header';
import Home from '../Home/Home'
import Services from '../Services/Services'
import About from '../About/About'
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
const Routes = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/services">
                        <Services></Services>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;