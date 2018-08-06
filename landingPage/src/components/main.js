import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Products from './products';
import Sign from './signin';



const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
        <Route path="/signin" component={Sign} />

    </Switch>

)

export default Main;