import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/suwon-card5.jpg";
import pimgCard2 from "../img/suwon-card6.jpg";
import pimgCard3 from "../img/suwon-card7.jpg";
import pimgCard4 from "../img/suwon-card8.jpg";

const Tour10 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>언제 걸어도 좋은 수원 화성 코스</h1>
        <h4>예쁜 분위기에서 산책하고 싶을 때</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              수원 화성은 군사적 방어 기능과 상업적 기능을함께 보유하고 있기에 실용적인 구조로 동양 성곽의 백미로 평가받으며 유네스코 세계문화유산에도 등재된 곳입니다. 
              성안의 성곽길을 따라 걷다 바라보면 현재와 과거가 공존하는 느낌을 받을 수 있습니다.

              
              </p>
              <p>
              우리 wellness에서 추천하는 코스는 창룡문-화홍문-장안문-화서문-팔달문 코스입니다. 
              수원 화성 코스 중 가장 아름다운 곳인 화홍문과 더불어 화서문에서 서장대 올라가며 뒤돌아 서서 바라본 공심돈과 옹성의 모습까지 아름답습니다. 
              화성 성곽의 정상인 ‘팔달산 서장대’ 이곳에 오르면 수원시내가 한눈에 내려다 보입니다.
              수원의 일출 명소이기도 한 ‘팔달산 서장대’ 탁 트인 전망으로 성곽의 안과 밖의 모습을 한눈에 내려다볼 수 있는 곳입니다. 
              수원 화성 코스로 성곽길을 걷고 다양한 먹거리를 즐기고 싶다면 팔달문 방향으로 내려오면 수원 지동시장 그 외 공방거리도 바로 옆이니, 
              함께 둘러보시면 알찬 수원 여행 코스가 될 것입니다.
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

export default Tour10;