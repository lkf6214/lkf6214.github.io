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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
          margin: "1rem 0rem",
          // border: "1px solid gray",
          // backgroundColor: "rgb(29, 127, 78, 0.1)",
          backgroundColor: "rgb(8, 118, 48, 0.2)",
        }}
      >
        <h2>
          <CalendarMonthIcon
            color="action"
            fontSize="large"
            style={{ marginBottom: "0.5rem" }}
          />
        </h2>
        <h2>방문 예약 안내</h2>

        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={8}>
              <img
                className="pt-2"
                alt="informationImage"
                src="/img/process_002.png"
                width={"100%"}
              />
            </Col>
            {/* <Col md={12} lg={9}>
              <Card
                style={{
                  marginTop: "1rem",
                }}
              >
                <h4>
                  <Card.Text
                    className="p-3"
                    style={{
                      lineHeight: "2.5rem",
                    }}
                  >
                    성원언어임상연구소(송파점)와 성원언어심리센터(위례점)에서는
                    모든 평가와 상담 및 치료프로그램을 <mark>사전 예약제</mark>
                    로 운영하고 있습니다. <br /> 반드시 1~2일 전 예약해 주세요.
                  </Card.Text>
                </h4>
              </Card>
            </Col> */}
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} lg={8}>
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
                  <h4>🕙 운영시간</h4>
                  <h5>
                    <b>평일 </b>
                    오전 10:00 ~ 오후 7:00
                  </h5>
                  <h5>
                    {/* <span style={{ color: "#0060a1" }}> 토요일 </span> */}
                    <b>토요일 </b>
                    오전 9:00 ~ 오후 2:00
                  </h5>
                  <h5>
                    <b>상담 문의 </b>
                    오후 12:00 ~ 오후 6:00
                  </h5>
                  <h5>
                    {/* <span style={{ color: "#d22828" }}>일/공휴일 </span> */}
                    <b> 일/공휴일 </b>
                    휴무
                  </h5>
                </Card.Text>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={6} lg={4}>
              <a href="tel:02-412-0505">
                <Card
                  style={{
                    margin: "auto",
                    marginTop: " 1rem",
                    marginBottom: " 1rem",
                    padding: "1rem",
                    paddingTop: "1.5rem",
                    // backgroundColor: "#ece5fc",
                    borderRadius: "1rem",
                  }}
                >
                  <h5 calssName="p-3">
                    <div style={{ paddingBottom: "0.5rem" }}>📞 </div>
                    성원언어임상연구소 (송파점) <br /> 02-412-0505
                  </h5>
                </Card>
              </a>
            </Col>
            <Col xs={6} lg={4}>
              <a href="tel:031-757-0504">
                <Card
                  style={{
                    margin: "auto",
                    marginTop: " 1rem",
                    marginBottom: " 1rem",
                    // left: "0",
                    // right: "0",
                    padding: "1rem",
                    paddingTop: "1.5rem",

                    // backgroundColor: "#fcf9e5",
                    borderRadius: "1rem",
                  }}
                >
                  <h5 calssName="p-3">
                    <div style={{ paddingBottom: "0.5rem" }}>📞 </div>
                    성원언어심리센터 (위례점) <br /> 031-757-0504
                  </h5>
                </Card>
              </a>
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
            label="예약안내 바로가기"
            component="a"
            href="information"
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
