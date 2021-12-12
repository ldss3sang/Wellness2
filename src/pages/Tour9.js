import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/jeju-card5.jpg";
import pimgCard2 from "../img/jeju-card6.jpg";
import pimgCard3 from "../img/jeju-card7.jpg";
import pimgCard4 from "../img/jeju-card8.jpg";

const Tour9 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>성산일출봉 제주도 코스</h1>
        <h4>"예쁜 풍경 실컷 구경하고 싶을 때</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              제주도 성산일출봉은 성산이라는 이름을 가지게 된 배경은 분화구 가장 작은 성이 세워져 있는 형상을 볼 수 있어서 성산이라는 이름을 가지게 되었습니다. 
              182m 높이 봉우리는 제주도 코스로 인기가 높은데 입구에서 바라보면 별로 높아보이지 않아 누구나 쉽게 올라갈 수 있을 듯 보이는데 막상 올라가 보면,
              결코 만만한 높이가 아니라는 매력을 가지고 있습니다. 제주에는 봉긋봉긋 솟아 있는 수많은 오름이 있지만 이렇게 사발 모양의 분화구는 보기 드문 형상으로 
              바다 위에 우뚝 솟아 있는 모습을 볼 수 있습니다. 
              제주도 성산볼일출봉의 생성과정과 지질학적인 가치는 천연기념물이면서 유네스코 세계유산에 등재되었습니다. 
              국내 관광객은 물론이고 외국 관광객들에게 큰 인기를 누리고 있다 보니 산책로는 올라가는 길과 내려오는 길을 구분해 복잡함을 방지했습니다.

              
              </p>
              <p>
              목장카페 드르쿰다 in 표선은 목장 체험 카페로 제주 인기 체험인 승마, 카트 동물 먹이주기 체험, 사진관, 포토존 등이 있어 
              어린이들부터 어른들까지 연령 제한 없이 즐거운 시간을 즐길 수 있는 카페입니다. 
              승마체험은 처음 승마를 경험해보는 사람도 직원의 안내에 따라 하다보면 마지막에는 정말 신나게 승마를 즐길 수 있는 경험을 할 수 있습니다.
              신화월드에서 자동차로 3분, 오셜록에서 10분 거리에 있는 제주도 순메밀만을 사용하고 들기름을 직접 짜서 사용하는 제주 순메밀막국수를 들러
              식사를 해보시는 건 어떨까요? 메뉴로 들기름 막국수, 명태회국수, 수육, 판 메밀, 해물전 등 여러 메뉴가 있으며 깔끔하고 순한 맛이 일품입니다.
              특히, 대표 메뉴인 들기름 막국수는 들기름과 들깨가루를 듬뿍 부려 고소함이 절로 느껴집니다.
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

export default Tour9;