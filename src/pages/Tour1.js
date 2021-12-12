import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/10-card5.jpg";
import pimgCard2 from "../img/10-card6.jpg";
import pimgCard3 from "../img/10-card7.jpg";
import pimgCard4 from "../img/10-card8.jpg";

const Tour1 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>교과 체험학습 추천 리스트</h1>
        <h4>3~4학년 교과공부 체험</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                서대문 자연사 박물관에서는 지층 형성과정과 화석의 생성과정에 대해 배울 수 있고,
                화석과 지질에 대해서도 설명되어 있습니다.
                한국전력 전기 박물관에서는 전기 에너지가 하는 일은 무엇이고, 전기 기기는 어떻게
                다뤄야 하는지 알아볼 수 있습니다. 더불어, 여러 가지 에너지 자원에 대해서도 배울 수 있습니다.
              </p>
              <p>
                국립민속박물관 어린이 박물관은 선조들의 생화을 통해 그들의 삶과 지혜를 엿볼 수 있고, 우리의
                정체성도 올바르게 할 수 있습니다. 제기차기, 투호 등 민속 놀이 체험을 하며 우리의
                전통 놀이를 발전, 계승하는 의미를 생각해볼 수 있습니다.
                임진각에서는 6.25 전쟁과 우리나라가 분단이 된 이유에 대해 알아보고, 통일이 되려면
                앞으로 어떤 노력을 기울여야 하는지 알아볼 수 있습니다.
                DMS투어를 할 때는 반드시 신분증을 지참해야 합니다.
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

export default Tour1;