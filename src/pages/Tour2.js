import React from "react";
import { Container, Row, Col } from "reactstrap";
//import tours from "../components/Package";
import pimgCard1 from "../img/10-card1.jpg";
import pimgCard2 from "../img/10-card2.jpg";
import pimgCard3 from "../img/10-card3.jpg";
import pimgCard4 from "../img/10-card4.jpg";

const Tour2 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>교과 체험학습 추천 리스트</h1>
        <h4>5~6학년 교과공부 체험</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                국립 과천박물관에서는 지구와 태양계 행성, 별자리의 기본 개념에
                대해 배울 수 있다. 별자리, 천체 관측과 우주체험도 가능합니다.
                서대문 형무소 역사관에서는 일본에게 나라를 빼앗긴 뼈아픈 역사와
                우리 민족이 어떤 피해를 입었는지 문화재와 역사 자료를 보며
                확인할 수 있으며, 선조들이 나라를 되찾기 위해 어떤 노력을
                기울였는지도 알 수 있습니다. 한국 은행 화폐 박물관에서는 돈의
                역할과 은행이 하는 일이 무엇인지 알 수 있습니다. 또한 화폐의
                가치에 대해 정확히 알고, 경제 관념을 쌓아 현명한 소비와 올바른
                경제활동을 할 수 있습니다.
              </p>
              <p>
                청와대에서는 민주주의에 대해 설명하려면 해당 기관을 방문하는
                것이 효과적입니다. 청와대, 국회, 대법원 등 공공기관은 예약하면
                방문할 수 있고, 프로그램에도 참여할 수 있습니다. 서울까지 오는
                것이 멀다면, 각 지역에 있는 도청과 시청, 도·시의회, 지방법원을
                추천하고 있습니다. 일부 지방 의회에서는 의회 체험,
                지방법원에서는 모의재판 등 별도의 프로그램을 운영하고 있습니다.
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

export default Tour2;
