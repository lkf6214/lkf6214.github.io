import React from "react";
import FacilitiesImgSongpa from "./FacilitiesImgSongpa";
import FacilitiesLocation from "./FacilitiesLocation";
import Card from "react-bootstrap/Card";
import { Container } from "@mui/system";
import LocationHeader from "./LocationHeader";

export default function Facilities() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/img/photo_013.png)",
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
          오시는 길
        </div>
      </div>

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
