import React, { useState } from "react";
import "../css/Test.css";
import Container from "react-bootstrap/Container";

function Home() {
  const data = [
    "언어치료",
    "인지치료",
    "놀이치료",
    "성인상담",
    "그룹치료",
    "부모교육",
    // { name: "언어치료", value: "1", link: "language" },
    // { name: "인지치료", value: "2", link: "cognitive" },
    // { name: "놀이치료", value: "3", link: "play" },
    // { name: "성인상담", value: "4", link: "counseling" },
    // { name: "그룹치료", value: "5", link: "group" },
    // { name: "부모교육", value: "6", link: "family" },
  ];

  const [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <>
      <Container>
        <div className="BtnContainer">
          {data.map((item, idx) => {
            return (
              <>
                <button
                  value={idx}
                  className={"Testbtn" + (idx == btnActive ? " active" : "")}
                  onClick={toggleActive}
                >
                  {item}
                </button>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Home;
