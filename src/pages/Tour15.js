import React from "react";
import { Container, Row, Col } from "reactstrap";
import pimgCard1 from "../img/daegu-card1.jpg";
import pimgCard2 from "../img/daegu-card2.jpg";
import pimgCard3 from "../img/daegu-card3.jpg";
import pimgCard4 from "../img/daegu-card4.jpg";

const Tour15 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>대구 앞산 등산 코스</h1>
        <h4>유명사찰과 많은 역사유적</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                앞산 공원은 편안한 일상복으로 케이블카를 이용할 수도 있습니다.
                우선, 대구 앞산 등산코스로는 앞산공원&큰골 관리사무소-케이블카
                승강장-대덕사-만수정-능선 삼거리-성불정-정상
                658.7m-마천각대피소-대덕산성 -산정휴게소-앞산 전망대(비파산
                전망대)-안지랑골 관리소로 산행거리는 약 6.3km로 휴식시간 40분
                포함 3시간 10분 정도가 걸리는 난이도가 있는 코스입니다.
              </p>
              <p>
                케이블카 승강장의 갈림길에는 은적사라는 절이 나오는데 이 절은
                공산전투에서 견휜에게 대패하고 도망치던 왕건은 대웅전 자리
                우측의 대나무 숲 속 동굴에 3일간 피신해 있었습니다. 그 뒤 왕위에
                오른 왕건이 당시의 고승 영조대사로 하여금 은적사라는 절을 짓게
                하였다는 이야기가 있습니다. 이를 비롯해 삼국시대 고분 유적,
                성불정, 대구 앞산 등 여러 유적과 과거에 대해 알 수도 있습니다.
                케이블카 상단을 지나 보이는 비파산전망대는 아름다운 대구의
                도심을 한 눈에 볼 수 있습니다.
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

export default Tour15;
