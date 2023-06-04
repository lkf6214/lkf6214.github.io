import * as React from "react";

import "../css/Mou.css";

export default function TitlebarImageList() {
  const title = [
    "발달재활서비스",
    "꿈e든서비스",
    "이화여자대학교",
    "난독 학생 지원",
    "난독 고위험군 지원",
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

  return (
    <>
      <h5 className="pt-5 pb-2">지원사업 / 협력기관</h5>

      <div id="mou_box">
        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[0]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[0]} </div>
            <div id="mou_subtitle">{subtitle[0]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[1]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[1]} </div>
            <div id="mou_subtitle">{subtitle[1]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[2]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[2]} </div>
            <div id="mou_subtitle">{subtitle[2]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[3]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[3]} </div>
            <div id="mou_subtitle">{subtitle[3]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[4]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[4]} </div>
            <div id="mou_subtitle">{subtitle[4]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[5]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[5]} </div>
            <div id="mou_subtitle">{subtitle[5]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[6]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[6]} </div>
            <div id="mou_subtitle">{subtitle[6]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[7]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[7]} </div>
            <div id="mou_subtitle">{subtitle[7]}</div>
          </div>
        </div>

        {/* 1 */}
        <div id="mou_container">
          <img id="mou_image" src={img[8]} alt="mou_image" />
          <div id="mou_under_box">
            <div id="mou_title"> {title[8]} </div>
            <div id="mou_subtitle">{subtitle[8]}</div>
          </div>
        </div>
      </div>
    </>
  );
}
