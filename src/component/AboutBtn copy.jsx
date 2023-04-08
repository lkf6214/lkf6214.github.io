import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Facilities from "./Facilities";
import Greeting from "./Greeting";
import History from "./History";
import Therapist from "./Therapist";
// tetz, Hover 효과를 위한 css 파일 추가
import "../css/AboutBtn.css";

function BasicExample() {
  const [radioValue, setRadioValue] = useState("1");

  // tetz, 버튼에 주소 값도 전달을 해야 하기 때문에, link 키 및 이동해야할 주소 값 추가
  const radios = [
    { name: "인사말 ", value: "1", link: "greeting" },
    { name: "연혁", value: "2", link: "history" },
    { name: "연구원 소개", value: "3", link: "therapist" },
    { name: "센터 전경", value: "4", link: "facilities" },
  ];

  // tetz, Link를 쓰면 부트 스트랩과 충돌이 나기 때문에 주소 이동은
  // useNavigate 로 이동 시기키 위해 useNavigate 설정
  const navigate = useNavigate();

  return (
    <>
      {/* tetz, 중복 부분이므로 주석 처리 */}
      {/* <ButtonGroup aria-label="Basic example">
        <Link to="greeting">
          <Button variant="outline-success">인사말 위</Button>
        </Link>
        <Link to="history">
          <Button variant="outline-success">연혁</Button>
        </Link>
        <Link to="therapist">
          <Button variant="outline-success">연구원 소개</Button>
        </Link>
        <Link to="facilities">
          <Button variant="outline-success">센터 전경</Button>
        </Link>
      </ButtonGroup>
      <br /> */}

      {/* 아래의 버튼그룹 모양으로, 누르면 배경이 유지되게, link to 연결하고 싶은데 어떻게 해야하나요..?  */}

      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            className="ToggleButton"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 4 ? "outline-success" : "outline-success"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            // tetz, 주소 이동 부분을 useNavigate 로 처리, radios 객체 배열에 저장된 주소 값(link) 를 부여
            onClick={() => navigate(radio.link)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

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
