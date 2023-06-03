import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Container from "react-bootstrap/Container";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// tetz, Hover 효과를 위한 css 파일 추가
import "../css/AboutBtn.css";
import ProgramFamily from "./ProgramFamily";
import ProgramLanguage from "./ProgramLanguage";
import ProgramCognitive from "./ProgramCognitive";
import ProgramPlay from "./ProgramPlay";
import ProgramCounseling from "./ProgramCounseling";
import ProgramGroup from "./ProgramGroup";

function BasicExample() {
  const [radioValue, setRadioValue] = useState("1");
  // tetz2, 현재 주소 값을 받아오기 위한 useLocation
  const location = useLocation();

  // tetz, 버튼에 주소 값도 전달을 해야 하기 때문에, link 키 및 이동해야할 주소 값 추가
  const radios = [
    { name: "언어치료", value: "1", link: "language" },
    { name: "인지치료", value: "2", link: "cognitive" },
    { name: "놀이치료", value: "3", link: "play" },
    { name: "성인상담", value: "4", link: "counseling" },
    { name: "사회성 그룹치료", value: "5", link: "group" },
    { name: "부모교육", value: "6", link: "family" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <ButtonGroup
          style={{
            padding: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "auto",
          }}
        >
          {radios.map((radio, idx) => (
            <ToggleButton
              style={{
                border: "1px solid #9c9c9c",
                backgroundColor: "white",
                color: "black",
                // width: "30%",
                // height: "auto",
              }}
              // tetz2, 현재 페이지의 주소 값에 따라서 active 클래스를 부여 하여 active 클래스가 있을 경우 배경색이 유지되도록 수정
              className={
                "ToggleButton" +
                (location.pathname === `/program/${radio.link}`
                  ? " active"
                  : "")
              }
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 6 ? "outline-primary" : "outline-primary"}
              size="lg"
              name="radio"
              value={radio.value}
              checked={
                radioValue === radio.value ||
                location.pathname === `/program/${radio.link}`
              }
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={() => navigate(radio.link)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Container>

      <Routes>
        <Route path="language" element={<ProgramLanguage />} />
        <Route path="play" element={<ProgramPlay />} />
        <Route path="counseling" element={<ProgramCounseling />} />
        <Route path="cognitive" element={<ProgramCognitive />} />
        <Route path="group" element={<ProgramGroup />} />
        <Route path="family" element={<ProgramFamily />} />
      </Routes>
    </>
  );
}

export default BasicExample;
