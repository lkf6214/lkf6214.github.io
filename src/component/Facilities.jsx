import React from "react";
import FacilitiesImgSongpa from "./FacilitiesImgSongpa";
import FacilitiesLocation from "./FacilitiesLocation";
import Card from "react-bootstrap/Card";
import { Container } from "@mui/system";

export default function Facilities() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center pb-3">
          <Card.Header className="h2">센터 전경</Card.Header>
          <FacilitiesLocation />
        </Card>

      </Container>
    </>
  );
}
