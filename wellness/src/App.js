import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import NavbarMain from "./components/Navbar";
import Home1 from "./pages/Home1"
import Tour1 from "./pages/Tour1";
import Tour2 from "./pages/Tour2";
import Tour3 from "./pages/Tour3";
import Tour4 from "./pages/Tour4";
import Tour5 from "./pages/Tour5";
import Tour6 from "./pages/Tour6";
import Tour7 from "./pages/Tour7";
import Tour8 from "./pages/Tour8";
import Tour9 from "./pages/Tour9";
import Tour10 from "./pages/Tour10";
import Tour11 from "./pages/Tour11";
import Tour12 from "./pages/Tour12";
import Tour13 from "./pages/Tour13";
import Tour14 from "./pages/Tour14";
import Tour15 from "./pages/Tour15";
import Tour16 from "./pages/Tour16";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home1} />
          <Route path="/tour1" component={Tour1} />
          <Route path="/tour2" component={Tour2} />
          <Route path="/tour3" component={Tour3} />
          <Route path="/tour4" component={Tour4} />
          <Route path="/tour5" component={Tour5} />
          <Route path="/tour6" component={Tour6} />
          <Route path="/tour7" component={Tour7} />
          <Route path="/tour8" component={Tour8} />
          <Route path="/tour9" component={Tour9} />
          <Route path="/tour10" component={Tour10} />
          <Route path="/tour11" component={Tour11} />
          <Route path="/tour12" component={Tour12} />
          <Route path="/tour13" component={Tour13} />
          <Route path="/tour14" component={Tour14} />
          <Route path="/tour15" component={Tour15} />
          <Route path="/tour16" component={Tour16} />

        </Switch>
       </BrowserRouter>
      
      </div>
    );
    }
}
