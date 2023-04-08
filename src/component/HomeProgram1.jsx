import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Container } from "reactstrap";
import Button from "./Button";
import Information from "./Information";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function HomeProgram() {
  const navigate = useNavigate();

  const InformationButton = () => {
    navigate("/information");
  };

  return (
    <>
      <section
        style={{
          padding: "3rem 0rem 0rem 0rem",
          // border: "1px solid gray",
          margin: "1rem 0rem",
          // borderTop: "20px solid #89af89",
          // borderBottom: "20px solid #89af89",
          backgroundColor: "rgb(0, 96, 161, 0.1)",
        }}
      >
        <h2>
          <CardGiftcardIcon
            color="primary"
            fontSize="large"
            style={{ marginBottom: "0.5rem" }}
          />
        </h2>
        <h2>바우처 및 서비스</h2>

        {/* <h2>
          {" "}
          <CardGiftcardIcon color="primary" /> 바우처 및 서비스{" "}
          <CardGiftcardIcon color="primary" />{" "}
        </h2> */}
        <h5
          style={{
            color: "gray",
          }}
        >
          성원의 바우처 및 서비스를 소개합니다
        </h5>

        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={9}>
              <img
                className="p-2"
                alt="greetingImage"
                src="/image/005.jpg"
                width={"100%"}
              />
            </Col>
          </Row>
          <div style={{ padding: "1rem 0rem" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                "& > :not(style)": {
                  m: 1,
                  p: 1.5,
                  pb: 0.5,
                  textAlign: "center",
                  width: "auto",
                  // height: "auto",
                },
              }}
            >
              <Paper elevation={3}>
                <h6>발달재활 서비스</h6>
              </Paper>
              <Paper elevation={3}>
                <h6>굳센 카드</h6>
              </Paper>
              <Paper elevation={3}>
                <h6>우리아이 심리지원 서비스</h6>
              </Paper>
              <Paper elevation={3}>
                <h6>꿈이든 카드</h6>
              </Paper>
              <Paper elevation={3}>
                <h6>난독현상 치유 서비스</h6>
              </Paper>
              <Paper elevation={3}>
                <h6>통합가족 상담 서비스</h6>
              </Paper>

              {/* <Paper elevation={3}>
                <h6>읽기곤란(난독증)</h6>
              </Paper> */}
              <Paper elevation={3}>
                <h6>온맘</h6>
              </Paper>
            </Box>
          </div>
          <Row className="justify-content-center">
            <Col xs={6} lg={3}>
              <Card
                style={{
                  marginTop: "1rem",
                  // backgroundColor: "rgb(19, 80, 212, 0.1)",
                }}
              >
                <Card.Text
                  className="p-3"
                  style={{
                    lineHeight: "2rem",
                  }}
                >
                  <h4 style={{ padding: "1rem" }}>
                    <b>
                      <span style={{ color: "#CB661C" }}>송파점</span>
                    </b>
                  </h4>
                  <p className="alert alert-warning p-2 ">바우처 / 서비스</p>
                  <h6 className="pt-3">발달재활 서비스</h6>
                  <h6>굳센 카드</h6>

                  <h6>난독현상 치유 서비스</h6>
                  <h6 className="pb-2">온맘</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  // backgroundColor: "rgb(19, 80, 212, 0.1)",
                }}
              >
                <Card.Text
                  className="p-3"
                  style={{
                    lineHeight: "2rem",
                  }}
                >
                  <h4 style={{ padding: "1rem" }}>
                    <b>
                      <span style={{ color: "#CB661C" }}>위례점</span>
                    </b>
                  </h4>
                  <p className="alert alert-warning p-2 ">바우처 / 서비스</p>
                  <h6>발달재활 서비스</h6>
                  <h6>우리아이 심리지원 서비스</h6>
                  <h6>꿈이든 카드</h6>

                  <h6>통합가족 상담 서비스</h6>
                  <h6>난독현상 치유 서비스</h6>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>

        <Stack
          direction="row"
          spacing={2}
          justifyContent={"center"}
          padding={"1rem 0rem 2rem 0rem"}
        >
          <Chip
            className="HomeBtn"
            label="바우처 바로가기"
            component="a"
            href="voucher"
            color="warning"
            variant="outlined"
            clickable
            style={{ fontSize: "1.3rem", padding: "1.3rem" }}
          />
        </Stack>

        {/* <Button onClick={InformationButton} /> */}
      </section>
    </>
  );
}
