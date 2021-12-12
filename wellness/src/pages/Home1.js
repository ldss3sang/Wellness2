import React, { Component } from "react";
import "../App.css";
import Home from "../components/Home";
import Introduction from "../components/Introduction";
import Package from "../components/Package";
import Contact from "../components/Contact";
import Service from "../components/Service"

class Home1 extends Component {
  render() {
    return (
      <div id='home'>
        <Home />
        <Introduction />
        <Package />
        <Service />
        <Contact />
      </div>
    );
  }
}

export default Home1;