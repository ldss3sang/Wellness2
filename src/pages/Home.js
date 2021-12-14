import React, { Component } from "react";
import Main from "../components/Main";
import Introduction from "../components/Introduction";
import Package from "../components/Package";
import Contact from "../components/Contact";
import Service from "../components/Service";

class Home extends Component {
  render() {
    return (
      <div>
        <Main />
        <Introduction />
        <Package />
        <Service />
        <Contact />
      </div>
    );
  }
}

export default Home;
