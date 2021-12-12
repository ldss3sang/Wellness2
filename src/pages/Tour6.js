import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/yongin-card1.jpg";
import pimgCard2 from "../img/yongin-card2.jpg";
import pimgCard3 from "../img/yongin-card3.jpg";
import pimgCard4 from "../img/yongin-card4.jpg";

const Tour6 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>용인 카페거리 드라이브 코스</h1>
        <h4>그 유명한 보정동 핫플</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              보정동 카페는 아기자기한 소품들과 인테리어가 하나둘씩 세련되고 예쁘게 해놓았습니다.
              에코의 서재는 통유리로 내부가 훤히 보이는 카페이며, 책도 읽을 수 있는 감성 카페입니다.
              브런치 메뉴도 있기 때문에 식사 대용으로 방문하기 좋으며, 신사의 품격에서 촬영했던 곳이기도 합니다.
              노네임드 카페는 카페의 내부 뿐만 아니라 외부도 정원처럼 인테리어를 아름답게 꾸며놓아서 금손이 아닌 사람도 인생사진을 건질 수 있습니다.


              </p>
              <p>
              드라이브 코스인 만큼 주차가 중요한데 이 코스는 금요일이나 주말에도 주차를 무료로 편하게 할 수 있어서 여유롭게 즐길 수 있습니다.
              이 두 카페 모두 장애가 있는 손님에게 매우 친절히해준 카페로서 맛, 인테리어, 인성을 갖춘 매우 추천하는 드라이브 코스입니다.
              보정동 카페거리라면, 빠질 수 없는 게 바로 기념품입니다. 가는 길에, 타나리몰에 들려 기념품을 사가는 건 어떨까요?
              마지막으로, 분위기 좋은 와인과 브런치를 파는 문스 와인 앤 브런치를 들려줍니다. 
              워낙 유명한 핫플이지만, 주차 걱정도 없고 분위기도 고급지면서 감성있는 저녁 식사 코스로 추천합니다.

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

export default Tour6;