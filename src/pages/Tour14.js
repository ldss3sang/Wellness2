import React from "react";
import { Container, Row, Col } from "reactstrap";
import pimgCard1 from "../img/incheon-card1.jpg";
import pimgCard2 from "../img/incheon-card2.jpg";
import pimgCard3 from "../img/incheon-card3.jpg";
import pimgCard4 from "../img/incheon-card4.jpg";

const Tour14 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>무의도 호룡곡산 등산 코스</h1>
        <h4>섬산의 매력에 빠지다</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                무의도의 호룡곡산은 많은 영화나 드라마 촬영지로 활용되었는데
                대표적으로 드라마로는 천국의 계단이 있습니다. 오르막으로
                오르다보면 ‘호랑 바위’를 볼 수 있는데 그곳에서는 소원을 빌기도
                합니다. 산을 오르다보면 바다가 한 눈에 들어오는데 이것이 산의
                매력이라고 할 수 있습니다. 또한 정상에서는 전망대가 있어
                아름다운 풍경을 마음껏 즐기고 느끼며 눈에 담을 수 있습니다.
                하산을 하면 아름다운 아름다운 바다와 함께 자연암벽을 볼 수
                있습니다. 그곳에서는 자연 암벽 클라이밍을 즐길 수 있습니다.
              </p>
              <p>
                등산 코스로는 하나개 유원지 주차장-2,3주차장 넘어 등산로 입구로
                진입-호랑 바위-정상-부처 바위-환상의 길-원점 회귀로 휴식 시간
                포함 약 1시간 50분정도 소요됩니다.
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

export default Tour14;
