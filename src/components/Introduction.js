import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MainCarousel from "./Place";

import { ReactComponent as Photo } from "../assets/photo.svg";
import { ReactComponent as Tour } from "../assets/tour.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Check } from "../assets/check.svg";

class Introduction extends Component {
  render() {
    return (
      <div id="introduction">
        <MainCarousel />

        <div className="subComponent" id="introductionBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>About Wellness</h1>
              <p>Customized package tour</p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Photo width="48" height="48" strokeWidth="1" />
                    <p>Best Photo Zone</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Tour width="48" height="48" strokeWidth="1" />
                    <p>A package tour by age</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Trip of reasonable</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Check width="48" height="48" strokeWidth="1" />
                    <p>Customized Service</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default Introduction;
