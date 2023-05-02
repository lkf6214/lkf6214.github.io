import React from "react";
import AboutBtn from "./AboutBtn";
// import AboutMyNav from "./AboutMyNav";

export default function About() {
  return (
    <>
      <div
        style={{
          // backgroundImage: "url(/img/4.jpg)",

          // background:     "linear-gradient( 45deg,  #fffffd,   rgb(229, 94, 39, 0.8), rgb(242, 195, 36, 0.8) )",
          background:
            "linear-gradient( 45deg, #fffffd,  rgb(242, 195, 36, 0.7),  rgb(17, 167, 176,0.7) )",
          // background:            "linear-gradient( to right, #E55E27, #F2C324, #11A7B0, #53B53F )",

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
            color: "#ffffff",
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
