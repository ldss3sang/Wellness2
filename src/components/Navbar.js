import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap";
import { useLocation } from "react-router-dom";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div>
      <Navbar color="faded" dark expand="md" fixed={`top`} className="navDark">
        <Container>
          <NavbarBrand href="#">Wellness</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/#introductionBody">Introduction</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/#packageBody">Package</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/#contactBody">Contact & Service</NavLink>
              </NavItem>
              <Button color="success">Sign Up</Button>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
