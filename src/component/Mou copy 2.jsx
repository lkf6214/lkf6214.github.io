import * as React from "react";

import "../css/Mou.css";

export default function TitlebarImageList() {
  const title = [
    "발달재활서비스",
    "꿈e든서비스",
    "이화여자대학교",
    "난독 학생 지원",
    "난독고위험군 지원",
    "통합가족서비스",
    "특수교육대상자 치료지원",
    "맞춤형 학부모 학습상담 「온맘」",
    "서울시 장애인 의사소통 지원",
  ];
  const subtitle = [
    "@송파점",
    "@위례점",
    "@송파점 @위례점",
    "@송파점",
    "@송파점",
    "@위례점",
    "@송파점",
    "@송파점",
    "@송파점",
  ];
  const img = [
    "/img/mou_000.jpg",
    "/img/mou_001.png",
    "/img/mou_004.png",
    "/img/mou_002.png",
    "/img/mou_003.png",
    "/img/mou_005.png",
    "/img/mou_006.png",
    "/img/mou_008.png",
    "/img/mou_007.jpg",
  ];

  const fruitlist = [
    {
      id: 1,
      name: "apple",
      image:
        "https://image.shutterstock.com/image-photo/fresh-red-apple-isolated-on-260nw-254938384.jpg",
    },
    {
      id: 2,
      name: "orange",
      image:
        "https://image.shutterstock.com/image-vector/abstract-orange-icon-vector-flat-260nw-1104205634.jpg",
    },
    {
      id: 3,
      name: "blueberry",
      image:
        "https://image.shutterstock.com/image-photo/blueberries-isolated-260nw-722035450.jpg",
    },
    {
      id: 4,
      name: "watermelon",
      image: "https://en.pimg.jp/050/595/319/1/50595319.jpg",
    },
  ];

  function Fruit({ name, picture }) {
    return (
      <div>
        I like {name} <br />
        <img src={picture} alt="test" />
      </div>
    );
  }

  return (
    <>
      <h5 className="pt-5 pb-2">지원사업 / 협력기관</h5>

      <div>
        리액트 입문하기
        {fruitlist.map((element) => (
          <Fruit name={element.name} picture={element.image} />
        ))}
      </div>

      <div id="mou_box">
        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[0]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[0]} </div>
            <div id="mou_subtitle">{subtitle[0]}</div>
          </div>
        </div>
      </div>
    </>
  );
}
