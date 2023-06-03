import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "@mui/system";
import LocationHeader from "./LocationHeader";

export default function Facilities() {
  return (
    <>
      {/* <Container> */}
      {/* <div style={{ width: "90vw", backgroundPosition: "center" }}> */}
      <div
        style={{
          background:
            "linear-gradient( 45deg,  #fffffd,   rgb(17, 167, 176,0.7), rgb(229, 94, 39, 0.8) )",
          position: "relative",
          display: "table",
          width: "100%",
          height: "10rem",
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
          오시는 길
        </div>
      </div>
      {/* </div> */}
      {/* </Container> */}

      <Container>
        <Card border="light" className="text-center pb-3">
          <Card.Header className="h2" style={{ margin: "2rem 0rem 0rem 0rem" }}>
            오시는 길
          </Card.Header>
          <LocationHeader />
        </Card>
      </Container>
    </>
  );
}
