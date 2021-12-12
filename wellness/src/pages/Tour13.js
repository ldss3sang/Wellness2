import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/cheonggye-card1.jpg";
import pimgCard2 from "../img/cheonggye-card2.jpg";
import pimgCard3 from "../img/cheonggye-card3.jpg";
import pimgCard4 from "../img/cheonggye-card4.jpg";

const Tour13 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>청계산 등산 코스</h1>
        <h4>특히 가을 단풍의 정취를 느끼고 싶을 때</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              청계산 등산로는 신분당선 청계산입구역 2번 출구에서 출발하면 됩니다. 2번 출구에서 원터골 연결통로 방향으로 들어오면, 본격적으로 산길이 시작되는 곳입니다. 
              원터골 쉼터를 지나 옥녀봉으로 가는 옥녀봉 코스는 청계산은 일명 청룡산이라 하여 아주 먼 옛날에 푸른 용이 산허리를 뚫고 나와 승천했다는 전설에 기인했다고 하나, 
              그보다는 관악산을 백호산이라 부른데 반하여 청계산이 좌청룡에 해당한다는 풍수설에 연유하지 않았나 하는 이야기가 있습니다. 
              여기에 옥녀봉은 봉우리가 예쁜 여성처럼 보여 이 이름이 붙었다고 합니다. 
              
              </p>
              <p>
              옥녀봉 코스는 등산 초보도 이정표도 있어 헷갈리지 않고 누구나 쉽게 올라갔다 내려올 수 있는 코스로써 인기가 높은 코스입니다. 
              옥녀봉으로 올라가다가, 매봉으로 빠지는 길이 나오기 때문에 초입부터 매봉 방향으로 가지 않고 옥녀봉 방향으로 올라갔다가 중간에 빠질 수도 있습니다.
              옥녀봉에서 과천 경마공원과 관악산 방향을 바라보며 풍경을 감상할 수 있으며, 구름 사이로 연주대도 보입니다. 
              왕복 1시간 30분~1시간 정도 걸리는 코스로, 특히 가을에는 단풍으로 물든 청계산의 가을 정취를 느끼기에 좋습니다.
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

export default Tour13;