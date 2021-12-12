import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/10-card5.jpg";
import imgCard2 from "../img/10-card4.jpg";
import imgCard3 from "../img/10-card12.jpg";
import imgCard4 from "../img/10-card15.jpg";
import imgCard5 from "../img/busan-card1.jpg";
import imgCard6 from "../img/yongin-card3.jpg";
import imgCard7 from "../img/suwon-card1.jpg";
import imgCard8 from "../img/jeju-card4.jpg";
import imgCard9 from "../img/jeju-card5.jpg";
import imgCard10 from "../img/suwon-card8.jpg";
import imgCard11 from "../img/busan-card5.jpg";
import imgCard12 from "../img/ulsan-card1.jpg";
import imgCard13 from "../img/cheonggye-card3.jpg";
import imgCard14 from "../img/incheon-card2.jpg";
import imgCard15 from "../img/daegu-card1.jpg";
import imgCard16 from "../img/seoul-card4.jpg";

const tours = [
  
  { 
    id: 1,
    category: ["10대"],
    img: imgCard1,
    alt: "tour",
    title: "<교과 체험학습 추천 리스트>",
    subtitle: "3~4학년 교과 공부 체험",
  

  },
  {
    id: 2,
    category: ["10대"],
    img: imgCard2,
    alt: "tour",
    title: "<교과 체험학습 추천 리스트>",
    subtitle: "5~6학년 교과 공부 체험"
  },
  {
    id: 3,
    category: ["10대"],
    img: imgCard3,
    alt: "tour",
    title: "<응답하라! 복고 체험지>",
    subtitle: "어린이날 가볼만한 곳"
  },
  {
    id: 4,
    category: ["10대"],
    img: imgCard4,
    alt: "tour",
    title: "<신나는 제주 액티비티>",
    subtitle: "제주도 짚라인 체험"
  },
  {
    id: 5,
    category: ["20~30대"],
    img: imgCard5,
    alt: "tour",
    title: "<부산 당일치기 여행코스>",
    subtitle: "부산에 왔으면 한 번쯤은 꼭 들려줘야지"
  },
  {
    id: 6,
    category: ["20~30대"],
    img: imgCard6,
    alt: "tour",
    title: "<용인 카페거리 드라이브 코스>",
    subtitle: "그 유명한 보정동 핫플"
  },
  {
    id: 7,
    category: ["20~30대"],
    img: imgCard7,
    alt: "tour",
    title: "<수원 데이트 코스>",
    subtitle: "수원 왔으면 화성행궁 한 번 가줘야지?"
  },
  {
    id: 8,
    category: ["20~30대"],
    img: imgCard8,
    alt: "tour",
    title: "<절대 실패하지 않는 제주도 코스>",
    subtitle: "한정된 시간 속에서 동선도 효율적인 코스"
  },
  {
    id: 9,
    category: ["40~50대"],
    img: imgCard9,
    alt: "tour",
    title: "<성산일출봉 제주도 코스>",
    subtitle: "예쁜 풍경 실컷 구경하고 싶을 때"
  },
  {
    id: 10,
    category: ["40~50대"],
    img: imgCard10,
    alt: "tour",
    title: "<언제 걸어도 좋은 수원 화성 코스>",
    subtitle: "예쁜 분위기에서 산책하고 싶을 때"
  },
  {
    id: 11,
    category: ["40~50대"],
    img: imgCard11,
    alt: "tour",
    title: "<부산여행 1박 2일 코스>",
    subtitle: "심심할 틈 없이 힐링하기"
  },
  {
    id: 12,
    category: ["40~50대"],
    img: imgCard12,
    alt: "tour",
    title: "<하루 딱 좋은 울산 여행>",
    subtitle: "계절마다 색다른 관광지"
  },
  {
    id: 13,
    category: ["60대~"],
    img: imgCard13,
    alt: "tour",
    title: "<청계산 등산 코스>",
    subtitle: "특히 가을 단풍의 정취를 느끼고 싶을 때"
  },
  {
    id: 14,
    category: ["60대~"],
    img: imgCard14,
    alt: "tour",
    title: "<무의도 호룡곡산 등산 코스>",
    subtitle: "섬산의 매력에 빠지다"
  },
  {
    id: 15,
    category: ["60대~"],
    img: imgCard15,
    alt: "tour",
    title: "<대구 앞산 등산 코스>",
    subtitle: "유명사찰과 많은 문화유적"
  },
  {
    id: 16,
    category: ["60대~"],
    img: imgCard16,
    alt: "tour",
    title: "<서울 걷기 좋은 한강시민공원>",
    subtitle: "시원한 한강 마주하면서 산책하기"
  }
];

const itemCategories = [
  "all",
  "10대",
  "20~30대",
  "40~50대",
  "60대~",
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Packages Tour</h1>
            <p>You can find a package tour that fits your age</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "dark"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;