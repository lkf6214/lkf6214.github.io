import Step from "./Step";
import React from "react";
import ProgramBtn from "./ProgramBtn";

export default function Program() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/img/bg_011.jpg)",
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
          치료 프로그램
        </div>
      </div>
      {/* <Container> */}
      <ProgramBtn />
      {/* </Container> */}
    </>
  );
}
