import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import about from "./components/about";
import products from "./components/products";
import wavePanels from "./components/wavePanels";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <div className="row">
        <div className="col-12">

        <Switch>
          <Route exact path ="/" component={about} />
          <Route exact path ="/about" component={about} />
          <Route exact path ="/products" component={products} />
          <Route exact path ="/wavePanels" component={wavePanels} />
        </Switch>

        </div>
        </div>
        </div>

      </Router>
    );
  }
}

export default App;
