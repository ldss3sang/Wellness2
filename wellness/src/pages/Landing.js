import React from "react";
import NavbarMain from "../components/Navbar";
import Home from "../components/Home";
import Introduction from "../components/Introduction";
import Package from "../components/Package";
import Services from "../components/Service";
import Contact from "../components/Contact";

function Landing() {
    return (
        <React.Fragment>
        <NavbarMain />
        <Home />
        <Introduction />
        <Package />
        <Services />
        <Contact />
        </React.Fragment>
        );
    }
export default Landing;