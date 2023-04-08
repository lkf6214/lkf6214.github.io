import React from "react";
import AboutBtn from "./AboutBtn";
// import AboutMyNav from "./AboutMyNav";

export default function About() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/img/4.jpg)",
          position: "relative",
          display: "table",
          width: "100%",
          height: "16rem",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "1.5em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          성원 소개
        </div>
      </div>
      {/* 중간 nav */}
      {/* <AboutMyNav /> */}
      <AboutBtn />
    </>
  );
}
