import React from "react";
import HomeProgram from "./HomeProgram";
import HomeProgram1 from "./HomeProgram1";
import HomeProgram2 from "./HomeProgram2";
import HomeImage from "./HomeImage";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <>
      {/* <div>홈 입니다</div> */}

      <img
        className="homeImage"
        alt="homeImage"
        src="/img/005.jpg"
        width={"90%"}
      />
      <Container>
        <HomeProgram />
        <HomeProgram1 />
        <HomeProgram2 />
        {/* <HomeImage /> */}
      </Container>
    </>
  );
}
