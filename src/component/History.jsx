import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";

export default function History() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">연혁</Card.Header>
          <Card.Body>
            <Card.Text className="p-1">
              <img
                className="p-2"
                alt="greetingImage"
                src="/img/연혁.jpeg"
                width={"90%"}
              />
              <Card.Title className="p-3"></Card.Title>
              Seongwon speech and psychological treatment clinic since 2013
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
