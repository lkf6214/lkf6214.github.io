import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Facilities from "./Facilities";
import Greeting from "./Greeting";
import History from "./History";
import Therapist from "./Therapist";
import Container from "react-bootstrap/Container";
// tetz, Hover 효과를 위한 css 파일 추가
import "../css/AboutBtn.css";

function BasicExample() {
  const [radioValue, setRadioValue] = useState("1");
  // tetz2, 현재 주소 값을 받아오기 위한 useLocation
  const [btnActive, setBtnActive] = useState(false);
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return !prev;
    });
  };
  const location = useLocation();

  // tetz, 버튼에 주소 값도 전달을 해야 하기 때문에, link 키 및 이동해야할 주소 값 추가
  const radios = [
    { name: "인사말", value: "1", link: "greeting" },
    { name: "연혁", value: "2", link: "history" },
    { name: "연구원 소개", value: "3", link: "therapist" },
    { name: "센터 전경", value: "4", link: "facilities" },
  ];

  // tetz, Link를 쓰면 부트 스트랩과 충돌이 나기 때문에 주소 이동은
  // useNavigate 로 이동 시기키 위해 useNavigate 설정
  const navigate = useNavigate();

  return (
    <>
      {/* 아래의 버튼그룹 모양으로, 누르면 배경이 유지되게, link to 연결하고 싶은데 어떻게 해야하나요..?  */}

      <Container>
        <ButtonGroup
          style={{
            borderRadius: "10px",
            margin: "1rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {radios.map((radio, idx) => (
            <ToggleButton
              style={{
                width: "10rem",
                height: "4rem",
                margin: "0.2rem 0.2rem",
                boxShadow: "0 0 30px rgb(13, 202, 240, 0.26)",
                fontSize: "1.5rem",
                border: "none",
                opacity: "0.6",
                transition: "0.2s",
                backgroundColor: " #ffffff !important",
              }}
              // tetz2, 현재 페이지의 주소 값에 따라서 active 클래스를 부여 하여 active 클래스가 있을 경우 배경색이 유지되도록 수정
              className={
                "ToggleButton" +
                (location.pathname === `/about/${radio.link}` ? " active" : "")
              }
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              // variant={idx % 4 ? "outline-dark" : "outline-dark"}
              size="lg"
              name="radio"
              value={radio.value}
              // tetz2, 현재 페이지의 주소 값에 따라서 버튼이 클릭 된 것 같은 효과를 위해 OR 조건을 추가
              checked={
                radioValue === radio.value ||
                location.pathname === `/about/${radio.link}`
              }
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              // tetz, 주소 이동 부분을 useNavigate 로 처리, radios 객체 배열에 저장된 주소 값(link) 를 부여
              onClick={() => navigate(radio.link)}
              // onClick={toggleActive}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Container>

      <Routes>
        <Route path="greeting" element={<Greeting />} />
        <Route path="history" element={<History />} />
        <Route path="therapist" element={<Therapist />} />
        <Route path="facilities" element={<Facilities />} />
      </Routes>
    </>
  );
}

export default BasicExample;
