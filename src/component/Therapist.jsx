import * as React from "react";
// import Card from "@mui/material/Card";
import Card from "react-bootstrap/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import TherapistSlp from "./TherapistSlp";
import TherapistPlay from "./TherapistPlay";
import TherapistCognitive from "./TherapistCognitive";

import "../App.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ActionAreaCard() {
  return (
    <>
      <Container>
        {/* <h1> 치료사 소개</h1> */}

        <Card border="light" className="text-center">
          <Card.Header className="h2">연구원 소개</Card.Header>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={"center"}
            padding={"2rem 0rem 1rem 0rem"}
            // padding={"3rem 0rem 0rem 0rem"}
          >
            {/* <Chip label="언어치료사" component="a" href="step" clickable />
          <Chip
            label="언어치료사"
            component="a"
            href="step"
            clickable
            color="primary"
            variant="outlined"
          /> */}
            <Chip
              className="therapist_chip"
              label="언어재활사"
              component="a"
              href="#언어재활사"
              variant="outlined"
              clickable
            />

            <Chip
              label="인지치료사"
              component="a"
              href="#인지치료사"
              variant="outlined"
              clickable
            />

            <Chip
              label="놀이치료사"
              component="a"
              href="#놀이치료사"
              variant="outlined"
              clickable
            />
          </Stack>

          <Card.Body>
            <TherapistSlp />
            <img
              className="p-3"
              alt="line"
              src="/img/line_002.png"
              width={"100%"}
            />
            <TherapistCognitive />
            <img
              className="p-3"
              alt="line"
              src="/img/line_002.png"
              width={"100%"}
            />
            <TherapistPlay />
            <img
              className="p-3"
              alt="line"
              src="/img/line_002.png"
              width={"100%"}
            />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
