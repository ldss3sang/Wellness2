import React from "react";
import { Container, Row, Col } from "reactstrap";
import pimgCard1 from "../img/ulsan-card1.jpg";
import pimgCard2 from "../img/ulsan-card2.jpg";
import pimgCard3 from "../img/ulsan-card3.jpg";
import pimgCard4 from "../img/ulsan-card4.jpg";

const Tour12 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>하루 딱 좋은 울산여행</h1>
        <h4>계절마다 색다른 관광지</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                태화강역-대왕암-태화강국가정원으로 이루어진 울산 코스입니다.
                태화강역에서 버스를 타고 대왕암공원 입구에 하차하자마자 보이는
                풍경은, 마치 유럽과도 같습니다. 대왕암의 출렁다리를 타고 가면,
                탕건같이 생긴 바위라 하여 탕건암이라고 불리는 바위가 보입니다.
              </p>
              <p>
                많은 사람들이 방문하는 대왕암은 무왕의 왕비가 죽어서도 나라를
                지키는 용이 되겠다며 바위섬 아래에 묻혔다는 곳이에요. 실화가
                아니라 설화에 가까운 이야기입니다. 대왕암은 십 년 전이나
                지금이나, 막힌 가슴을 탁 튀어주는 풍경을 가지고 있습니다.
                몰려오는 사람들의 편의를 위해 너무 잘 다듬어서, 아름드리 해송과
                기암괴석의 깊은 맛이 좀 탕감된 듯하지만, 끝 없는 바다 어딘가에서
                부터 바람에 밀려와 바위를 때리고 부서져 거품으로 흩어지는 파도를
                감상할 수 있습니다.
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

export default Tour12;
