import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/busan-card1.jpg";
import pimgCard2 from "../img/busan-card2.jpg";
import pimgCard3 from "../img/busan-card3.jpg";
import pimgCard4 from "../img/busan-card4.jpg";

const Tour5 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>부산 당일치기 여행코스</h1>
        <h4>부산에 왔으면 한 번쯤은 꼭 들러줘야지</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              처음 맞이하는 부산 감천문화마을에서는 멋진 길거리 갤러리를 만날수 있는데 최근 BTS 벽화가 생겨나면서 더 활기넘치는 모습을 볼 수 있습니다. 
              감천문화마을의 역사를 보면 한국전쟁 이후 피난민들이 힘겹게 만들어 놓은 터전으로 산자락을 따라 미로처럼 도열하듯 세워진 작은 꼬막집들이 색을 입고,
              그림이 그려지면서 과거와 현재가 어우러진 멋진 예술마을로 탄생되었습니다.
              한해 300만명이 넘는 방문객들이 찾는 관광명소로 국내 기차여행의 핫풀이면서 부산 여행코스 추천으로 손꼽히고 있습니다. 


              </p>
              <p>
              다음으로 송도해상케이블카는 감천문화마을에서 3.8km떨어진 거리에 위치하고 있습니다. 
              송도해상케이블카는 우리나라 제 1호 공설해수욕장인 송도해수욕장의 명성을 살리기위한 복원사업으로 지난 2017년 새롭게 탄생했습니다.
              케이블카는 일반캐빈과 바닥이 훤히 드러나 있어 아름다운 풍경을 마음껏 즐길 수 있습니다. 
              암남공원에 도착하면 아이들 좋아하는 다이노 어드벤처와 전망대에 오르면 사랑스러운 어린왕자 포토존에서 사진을 찍을 수 있도록 꾸며놓았습니다. 
              마지막으로, 절영해안산책로의 하이라이트인 인싸들의 핫플로 떠오르고 있는 흰여울해안터널입니다. 
              동굴 쪽에서 바다를 배경으로 역광으로 사진을 찍으면 오묘하고 멋진 분위기를 연출할 수 있습니다.

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

export default Tour5;