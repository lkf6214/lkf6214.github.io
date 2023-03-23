import React from "react";
import styled from "styled-components";
import "../css/HomeSection.css";

export default function Button() {
  return (
    <>
      <Wrap>
        <div
          className="HomeButton"
          style={{
            margin: "1rem",
            marginTop: "2rem",
            padding: "0.5rem",
            width: "10rem",
            // height: "auto",
            backgroundColor: "#B8E4E2",
            borderRadius: "2rem",
            fontSize: "1rem",
          }}
        >
          더 알아보기
        </div>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
