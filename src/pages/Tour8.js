import React from "react";
import { Container, Row, Col } from "reactstrap";
import pimgCard1 from "../img/jeju-card1.jpg";
import pimgCard2 from "../img/jeju-card2.jpg";
import pimgCard3 from "../img/jeju-card3.jpg";
import pimgCard4 from "../img/jeju-card4.jpg";

const Tour8 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>절대 실패하지 않는 제주도 코스</h1>
        <h4>한정된 시간 속에서 동선도 효율적인 코스</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                함덕 서우봉해변은 본래 바다였던 함덕해변은 바다 아래의 현무암
                지층 위에 오랜 시간 조개 껍데기가 쌓이고 부서지며 모래가 되었고,
                해수면이 낮아지면서 이 모래들이 바다 위로 모습을 드러내 고운
                백사장을 이룬 곳입니다. 경사가 완만하고 수심이 깊지 않아
                남녀노소 누구나 물놀이를 즐기기에 좋습니다. 해변을 지나 동쪽
                끝에 있는 서우봉에 오르면 곱고 눈부신 함덕해변의 풍경을 마주할
                수 있습니다. 너븐숭아 4.3 기념관에서는 제주의 근대사를 이야기할
                때 빼놓을 수 없는 사건으로 1947년 3월 1일 벌어진 집회를 기점으로
                1948년 4월 3일에 발생한 남로당의 무장봉기, 1954년까지 이어진
                군경의 진압 과정에서 무고한 제주도민이 무고하게 희생된
                사건입니다. ‘넓은 돌밭’을 뜻하는 제주도 방언인
                너븐숭이4.3기념관은 희생자들을 위로하고 기리기 위해 가장 피해가
                컸던 북촌 마을에 세워졌습니다.
              </p>
              <p>
                만장굴에서는 잠시 바닷가에서 벗어나 화산섬인 제주에서 빼놓을 수
                없는 용암 동굴을 탐험해보세요. 김녕해변에서 차로 10분 거리에
                있는 거대한 용암 동굴인 만장굴은 먼 옛날 거문오름에서 분출된
                용암이 굽이치며 바다로 흘러가 만들어졌습니다. 용암의 열에 의해
                바닥은 녹고 천장에는 용암이 달라붙으며 불규칙한 형태가 되었고,
                가낭 넒은 곳의 폭은 약 18m, 높이는 23m에 이를 만큼 웅장합니다.
                연평균 기온은 11~12도로 여름에는 에어컨을 튼 것처럼 시원하고,
                겨울에는 매서운 바닷바람을 막아주어 따뜻하게 느껴집니다. 달이
                머문다는 의미를 지닌 월정리는 10년 전만 해도 한적한 해변에
                불과했습니다. 하지만 월정리에 한 번이라도 방문한 사람들이 그
                아름다움을 잊지 못해 입소문이 퍼져나갔습니다. 이후 월정리는 많은
                관광객들이 찾는 제주를 대표하는 해변이 되었습니다. 초승달이 뜬
                것처럼 휘어진 에메랄드 해안과 맑게 빛나는 바다는 사시사철
                상쾌함을 자아냅니다. 근처 맛집을 찾아 골목을 거닐거나, 백사장에
                앉아 선탠을 하거나, 서핑하며 파도를 즐기거나 다양한 방법으로
                월정리를 즐길 수 있습니다. *드라이브 포인트, 만장굴에서 즐기다가
                바로 월정리로 내려가지 말고, 다시 김녕해수욕장으로 돌아와
                해안도로를 타고 월정리로 향해보세요. 에메랄드빛 해변을 따라 선
                웅장한 풍차들이 줄을 잇는 멋진 풍광을 즐길 수 있습니다. 복잡했던
                월정리를 지나 행원리와 평대리로 들어서면 한적한 바다가
                이어집니다. 작은 어촌 마을의 정다운 풍경이 시선을 멈추게 합니다.
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

export default Tour8;
