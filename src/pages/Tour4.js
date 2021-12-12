import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/10-card13.jpg";
import pimgCard2 from "../img/10-card14.jpg";
import pimgCard3 from "../img/10-card15.jpg";
import pimgCard4 from "../img/10-card16.jpg";

const Tour4 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>신나는 제주 엑티비티</h1>
        <h4>제주도 짚라인 체험</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              조천읍에 자리한 제주 라프는 속도감을 만끽할 수 있는 제주 짚라인을 비롯해서 이색적인 제주도 체험인 아로마테라피 풋 스파를 즐길 수 있는 곳으로 
              카페와 레스토랑까지 같이 있어 한 곳에서 다양한 즐거움을 누릴 수 있는 곳입니다. 음료와 스낵은 1층, 식사와 휴식은 3층에서 즐길 수 있습니다.
              실내로 들어서면 개성 있는 외관만큼이나 독특한 모습의 내부 풍경이 펼쳐집니다.
              외계인을 표현한듯한 조형물들이 눈낄을 끌고 무엇보다 높은 천장 덕에 개방감이 있어 오래 있어도 답답하지 않은 공간입니다.
              제주 라프의 집라인인 LAFLY는 4개의 코스로 진행되는데, 첫번째 코스는 171m 길이의 난이도 중급 코스로 발아래로 삼나무 숲을 지나 질주합니다.
              두번째 코스는 녹차밭 위를 행단하는 174m 코스, 세번째는 가장 짧고 빠르며, 네번째는 223m의 상급 코스로 이루어져 있습니다.


              </p>
              <p>
              체험으로는 짚라인과 족욕 등이 가능하고 음식이나 음료를 즐길 수 있습니다. 족욕 체험 후, 마음에 들었던 용품도 구매 가능합니다.
              ‘아트 뮤지엄’이라고 불리는 곳은 건물 자체가 특별한 느낌을 주는 것 외에도 곳곳에 다양한 예술작품들이 전시되어 있습니다.
              3층에 위치하고 있는 LAFOOD는 알록달록한 전등과 세련된 테이블로 모던한 느낌을 주며, 파티장같은 분위기를 조성하고 있습니다.
              LAFOOD 앞 잔디가 깔린 옥상 테라스에서, 멋진 제주의 자연을 보며 휴식을 취하는 건 어떨까요?

              *제주도 짚라인을 즐기기 위해서는, 동의서를 작성해야 하며 탑승 기준에 맞는지 체크를 해야 합니다.
              탑승 기준은 체중 최저 30kg, 최고 110kg이며 신장은 최저 130cm, 최고 190cm 입니다. 여자 분들은 바지를 착용하셔야 합니다. *

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

export default Tour4;