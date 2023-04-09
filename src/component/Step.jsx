import * as React from "react";

import { Container } from "@mui/system";
import Card from "react-bootstrap/Card";

export default function VerticalLinearStepper() {
  return (
    <>
      <Container>
        <Card>
          <Card border="light" className="text-center">
            <Card.Header className="h2">치료 과정</Card.Header>
            <Card.Body>
              <img
                className="p-3"
                alt="information_step"
                src="/img/process_006.png"
                width={"100%"}
              />
            </Card.Body>
          </Card>
        </Card>
      </Container>
    </>
  );
}
