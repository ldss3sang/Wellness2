import React from "react";
import { Container, Row, Col } from "reactstrap";
import pimgCard1 from "../img/seoul-card1.jpg";
import pimgCard2 from "../img/seoul-card2.jpg";
import pimgCard3 from "../img/seoul-card3.jpg";
import pimgCard4 from "../img/seoul-card4.jpg";

const Tour16 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>서울 걷기 좋은 한강시민공원</h1>
        <h4>시원한 한강 마주하면서 산책하기</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                서울에서 걷기, 조깅하면서 혼자만의 시간을 가지기 위한
                코스입니다. 한강시민공원 반포지구, 이촌지구 그리고 잠수교,
                세빛둥둥섬 코스입니다. 고속터미널역 7호선 5번출구로 나오면 바로
                걷거나 뛸수있는 코스 시작점이 있습니다. 대략 동작대교 남단까지는
                걸어서 30분정도, 천천히 뛰면 15분정도면 합니다. 다음으로
                동작대교 코스를 이용하면 한적하면서 시원한 거리를 한강과
                마주하며 달릴 수 있습니다.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={pimgCard1}>
                <img src={pimgCard1} alt="" />
              </a>
              <a href={pimgCard2}>
                <img src={pimgCard2} alt="" />
              </a>
              <a href={pimgCard3}>
                <img src={pimgCard3} alt="" />
              </a>
              <a href={pimgCard4}>
                <img src={pimgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  </div>
);

export default Tour16;
