import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/suwon-card1.jpg";
import pimgCard2 from "../img/suwon-card2.jpg";
import pimgCard3 from "../img/suwon-card3.jpg";
import pimgCard4 from "../img/suwon-card4.jpg";

const Tour7 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>수원 데이트 코스</h1>
        <h4>수원 왔으면 화성행궁 한 번 가줘야지?</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              월화원은 무엇보다 사계절 내내 자연이 주는 아름다움을 통해 계절이 담긴 포토존을 자랑하고 있습니다. 
              팁으로 주차는 경기아트센터 주차장을 이용하면 공용시설이라 저공해차량 할인도 되고 월화원과 가깝습니다. 
              또 그 주변에 있는 카페 랑데자뷰는 제주도 분위기가 물씬 나는 곳입니다. 
              월화관 근처 카페라서 따로 이동주차를 하지 않아도 되며, SNS 감성 포토존도 마련 되어있어서 멋진 사진을 누릴 수 있습니다. 
              </p>
              <p>
              저녁으로, 근처에 있는 중소벤처기업부 우수성과 성장성을 높게 인증받은 연포갈비를 들리는 건 어떨까요? 
              주차도 가능하며, 화성행궁과 가깝기 때문에 산책 겸 화성행궁 야간개장을 구경하며 걸을 수 있습니다. 
              화성행궁은 워낙 유명하지만, 야간개장 때는 더 분위기도 좋고 찍는 곳마다 포토존이 될 수 있습니다.
              연인과 분위기 내며 걸을 수도 있고, 친구들과 사진을 찍을 수도 있는 화성행궁 다들 한 번 들려보시는 걸 추천합니다.
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

export default Tour7;