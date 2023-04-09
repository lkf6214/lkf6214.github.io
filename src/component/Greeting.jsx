import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";

export default function Greeting() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">인사말</Card.Header>
          <Card.Body>
            <img
              className="pt-2 pb-2"
              alt="greetingImage"
              src="/img/메인인사말2.png"
              width={"76%"}
            />
            <img alt="greetingImage" src="/img/greeting.jpeg" width={"90%"} />
            <Card.Text className="p-1">
              <Card.Title className="p-3"></Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
