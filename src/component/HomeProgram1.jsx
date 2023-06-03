import * as React from "react";
import Box from "@mui/material/Box";
import { Container } from "reactstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { fontWeight } from "@mui/system";

export default function HomeProgram() {
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
                <h6>꿈e든 카드</h6>
              </Paper>
              <Paper elevation={3}>
                <h6>난독현상 치유 서비스</h6>
              </Paper>
              <Paper elevation={3}>
                <h6>통합가족 상담 서비스</h6>
              </Paper>

              <Paper elevation={3}>
                <h6>온맘 : 맞춤형 학부모 상담</h6>
              </Paper>

              <Paper elevation={3}>
                <h6>권리증진센터 : 장애인 의사소통 지원 서비스</h6>
              </Paper>
            </Box>
          </div>
          <Row className="justify-content-center">
            <Col xs={6} lg={3}>
              <Card
                style={{
                  height: "100%",
                }}
              >
                <Card.Text className="p-2">
                  <h4
                    className="p-3"
                    style={{ color: "#CB661C", fontWeight: "bold" }}
                  >
                    송파점
                  </h4>

                  <div className="alert alert-warning p-3 ">
                    바우처 / 서비스
                  </div>
                  <div
                    className="p-1"
                    style={{ border: "0px solid red", lineHeight: "2rem" }}
                  >
                    <div>발달재활 서비스</div>
                    <div>굳센 카드</div>
                    <div>난독현상 치유 서비스</div>
                    <div>온맘 : 맞춤형 학부모 상담</div>
                    <h6>권리증진센터 : 장애인 의사소통 지원 서비스</h6>
                  </div>
                </Card.Text>
              </Card>
            </Col>

            <Col xs={6} lg={3}>
              <Card
                style={{
                  height: "100%",
                }}
              >
                <Card.Text className="p-2">
                  <h4
                    className="p-3"
                    style={{ color: "#CB661C", fontWeight: "bold" }}
                  >
                    위례점
                  </h4>

                  <div className="alert alert-warning p-3 ">
                    바우처 / 서비스
                  </div>
                  <div
                    className="p-2"
                    style={{ border: "0px solid red", lineHeight: "2rem" }}
                  >
                    <div>발달재활 서비스</div>
                    <div>우리아이 심리지원 서비스</div>
                    <div>꿈e든 카드</div>
                    <div>통합가족 상담 서비스</div>
                    <div>난독현상 치유 서비스</div>
                  </div>
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
      </section>
    </>
  );
}
