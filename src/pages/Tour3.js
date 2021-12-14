import React from "react";
import { Container, Row, Col } from "reactstrap";
//import tours from "../components/Package";
import pimgCard1 from "../img/10-card9.jpg";
import pimgCard2 from "../img/10-card10.jpg";
import pimgCard3 from "../img/10-card11.jpg";
import pimgCard4 from "../img/10-card12.jpg";

const Tour3 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>응답하라! 복고 체험지</h1>
        <h4>어린이날 가볼만한 곳</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                군위의 '엄마 아빠 어렸을 적에'에서는 공중전화가 딸린 구멍가게를
                비롯해서 ‘테레비’ 수리를 내건 전파상과 문방구, 만화방, 이발소,
                연탄가게 등이 골목길을 따라 늘어서 있습니다. 교실 또한 낡은 나무
                책걸상과 분필가루 날리던 칠판, 양은 도시락이 쌓여 있는 난로,
                손때 묻은 풍금 등이 정겨운 모습 그대로 재현되어 있습니다. 경주
                추억의 달동네에서는 골동품과 다양한 소품으로 재현한 저잣거리,
                7080상가, 학교길, 약전골목, 영화관, 골목길, 군막사 등 11여 개의
                테마 공간이 옛 향수를 더듬게 합니다.
              </p>
              <p>
                서울 국립민속박물관 추억의 거리에서는 개항기 시대의 전차,
                한약방, 포목전, 그리고 1960~70년대 근현대기의 여러 상점을 구경할
                수 있습니다. DJ가 있던 카페와 정겨운 만화방, 당시 유행의
                본산지였을 양장점, 따끈한 소머리국밥을 팔던 식당 등이 세월을
                잊은 듯 제자리를 지키고 있습니다. 대부분의 가게는 입구에 서서
                내부를 구경해야 하지만, 약속다방은 자판기 커피를 마시며 실제로
                앉아 볼 수 있고, 은하사진관은 교복을 입고 추억 어린 사진을 찍을
                수도 있습니다. 규모는 작지만 알차게 추억과 재미를 재생하기
                좋습니다.
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

export default Tour3;
