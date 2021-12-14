import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as Instagram } from "../assets/instagram (2).svg";
import { ReactComponent as Twitter } from "../assets/twitter-sign.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Line } from "../assets/line.svg";

class Services extends Component {
  render() {
    return (
      <div className="wrapped-services">
        <div className="subComponent" id="servicesBody">
          <Container>
            <section className="svg-group text-center">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Instagram width="50" height="55" strokeWidth="1" />
                    <p>Instagram</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Twitter width="55" height="55" strokeWidth="1" />
                    <p>Twitter</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Facebook width="55" height="55" strokeWidth="1" />
                    <p>Facebook</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Line width="55" height="55" strokeWidth="1" />
                    <p>Line</p>
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

export default Services;
