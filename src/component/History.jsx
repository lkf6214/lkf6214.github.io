import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";
import Mou from "./Mou";

export default function History() {
  return (
    <>
      <Container fluid={true} className="p-0">
        <Card border="light" className="text-center">
          <Card.Header className="h2">연혁</Card.Header>
          <Card.Body>
            <img
              className="pt-2"
              alt="greetingImage"
              src="/img/연혁.jpg"
              width={"100%"}
            />
            <Mou />
            <Card.Text className="p-1">
              {/* <Card.Title className="p-3"></Card.Title> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
