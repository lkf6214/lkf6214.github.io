import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// tetz, Hover 효과를 위한 css 파일 추가
import "../css/AboutBtn.css";
import Step from "./Step";
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
    { name: "치료 과정", value: "1", link: "step" },
    { name: "언어치료", value: "2", link: "language" },
    { name: "놀이치료", value: "3", link: "play" },
    { name: "성인상담", value: "4", link: "counseling" },
    { name: "인지치료", value: "5", link: "cognitive" },
    { name: "사회성 그룹치료", value: "6", link: "group" },
  ];

  const navigate = useNavigate();

  return (
    <>
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
            className="ToggleButton"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 4 ? "outline-success" : "outline-success"}
            size="lg"
            name="radio"
            value={radio.value}
            checked={
              radioValue === radio.value ||
              location.pathname === `/about/${radio.link}`
            }
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={() => navigate(radio.link)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <Routes>
        <Route path="Step" element={<Step />} />
        <Route path="Language" element={<ProgramLanguage />} />
        <Route path="play" element={<ProgramPlay />} />
        <Route path="counseling" element={<ProgramCounseling />} />
        <Route path="cognitive" element={<ProgramCognitive />} />
        <Route path="group" element={<ProgramGroup />} />
      </Routes>
    </>
  );
}

export default BasicExample;
