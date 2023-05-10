import React from "react";
import HomeProgram from "./HomeProgram";
import HomeProgram1 from "./HomeProgram1";
import HomeProgram2 from "./HomeProgram2";

// import Test from "./Test";

import Rolling from "./Rolling";
// import styled from "styled-components";

export default function Home() {
  // const Container = styled.div`
  //   background-color: white;
  //   padding: 20px;
  //   width: 100%;
  //   box-sizing: border-box;
  // `;

  return (
    <>
      {/* <Container fixed> */}
      <img
        className="homeImage"
        alt="homeImage"
        src="/img/메인헤더1.jpg"
        width={"100%"}
      />
      {/* <Test /> */}

      <HomeProgram />
      <HomeProgram1 />
      <HomeProgram2 />
      <Rolling />
      {/* </Container> */}
    </>
  );
}
