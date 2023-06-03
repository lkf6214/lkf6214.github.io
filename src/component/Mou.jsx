import * as React from "react";

import "../css/Mou.css";
import { Row } from "react-bootstrap";

export default function TitlebarImageList() {
  const tittle = [
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
  const subtittle = [
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
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* 1 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[0]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[0]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[0]} </div>
          </div>
        </container>

        {/* 2 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[1]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[1]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[1]} </div>
          </div>
        </container>

        {/* 3 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[2]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[2]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[2]} </div>
          </div>
        </container>

        {/* 1 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[3]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[3]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[3]} </div>
          </div>
        </container>

        {/* 2 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[4]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[4]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[4]} </div>
          </div>
        </container>

        {/* 3 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[5]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[5]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[5]} </div>
          </div>
        </container>

        {/* 1 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[6]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[6]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[6]} </div>
          </div>
        </container>

        {/* 2 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[7]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[7]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[7]} </div>
          </div>
        </container>

        {/* 3 */}
        <container
          className="mou_container"
          style={{
            width: "31%",
            border: "2px solid rgb(17, 167, 176, 0.7)",
            padding: "0rem",
            margin: "0.2rem",
            height: "100%",
          }}
        >
          <div>
            <img
              src={img[8]}
              alt="mou_image"
              style={{ width: "100%", position: "relative", height: "80%" }}
            />
          </div>
          <div
            className="mou_underbox"
            style={{
              backgroundColor: "rgb(17, 167, 176,0.6)",
              color: "#fff",
              width: "100%",
              padding: "0.5rem",
              height: "20%",
            }}
          >
            <div> {tittle[8]} </div>
            <div style={{ fontSize: "0.8rem" }}> {subtittle[8]} </div>
          </div>
        </container>
      </Row>
    </>
  );
}
