import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
//import tours from "../components/Package";
import pimgCard1 from "../img/busan-card5.jpg";
import pimgCard2 from "../img/busan-card6.jpg";
import pimgCard3 from "../img/busan-card7.jpg";
import pimgCard4 from "../img/busan-card8.jpg";

const Tour11 = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={pimgCard1} alt="" />
        <h1>부산여행 1박 2일 코스</h1>
        <h4>심심할 틈 없이 힐링하기</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              감천문화마을은 다채로운 주택과 벽화, 상점, 카페 등이 있는 그림 같은 명소인 감천문화마을. 골목골목 알록달록한 벽화들이 눈을 즐겁게 해줍니다.
              골목길을 산책하고, 멋진 인생 사진을 찍다 보면 시간 가는 줄 모르죠. 
              이제는 부산을 대표하는 명소가 된 만큼 감천문화마을은 꼭 방문해야 할 부산 여행 코스입니다.
              대저생태공원은 부산광역시 강서구 대저1동에 위치한 시민공원으로 습지와 자연초지, 유채꽃단지와 체육시설들로 조성되어 있습니다. 
              4월에 개최되는 유채꽃 축제는 아름다운 풍광을 자랑하며 많은 관광객들을 불러 모으고 있어요.
              10월에는 핑크뮬리가 한창이라고 하니, 혼자오는 여행객들에게 운치 있는 피크닉을 추천합니다.
              대한민국 1호 공설해수욕장 ‘송도해수욕장’. 송도로 불리기 전에는 섬 모양이 거북이를 닮았다고 하여 거북섬으로 불렸다고 해요. 
              사계절 걷고 싶은 송도 구름산책로와 송도 앞바다의 케이블카 등 보고 즐길 거리가 많습니다. 

              
              </p>
              <p>
              부산 영도구에 위치한 흰여울문화마을은 혼여족들에게 인기 만점인 곳입니다. 
              피난민들의 삶이 시작된 곳이자 현재는 재개발된 예술적인 문화 마을로 좁은 골목, 거리 벽화, 해안 산책로가 있습니다. 
              아기자기하고 아름다운 마을의 풍광이 그림 같습니다. 마을 곳곳이 포토존이니, 인생 사진도 남겨볼 수 있습니다.
              부산에서 기대하는 풍경이 바로 넓고 푸르른 바다가 아닐까요? 
              태종대 절벽 위 전망대에서 굽이치는 파도와 바다 풍경을 바라보면, 가슴이 뻥 뚫리는 것처럼 시원합니다. 
              물멍을 때리다 보면, 쌓였던 스트레스는 모두 날아갈 거예요. 이처럼 태종대는 꼭 가봐야 할 부산여행 필수 코스입니다.
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

export default Tour11;