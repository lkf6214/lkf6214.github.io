// import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function History() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">성인상담</Card.Header>
          <Card.Body>
            <Card.Text className="p-3">
              <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                  <img
                    alt="ProgramImage"
                    src="/img/상담치료.png"
                    width={"100%"}
                  />
                </Col>
              </Row>
              {/* 1 */}
              <Card.Title
                className="pt-4"
                style={{
                  color: "#2f6597",
                  fontWeight: "800",
                  fontSize: "1.5rem",
                }}
              >
                ✔ 성인상담이란
              </Card.Title>
              <Card.Title className="p-2 m-2" style={{ lineHeight: "2rem" }}>
                다양한 심리적인 문제를 겪고 있는 성인들을 대상으로 여러 매체를
                통해 스트레스 관리와 자기 성찰 및 승화를 도와줍니다. 자신의
                문제를 심도 있게 바라보고 긍정적인 행동 방식을 일상생활에
                적용시키는 연습을 통해서 자신의 문제를 자연스럽게 해결할 수
                있도록 도와줍니다.
              </Card.Title>
              <img
                className="p-3"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              {/* 2 */}
              <Card>
                <Card.Title
                  className="pt-4"
                  style={{
                    color: "#2f6597",
                    fontWeight: "800",
                    fontSize: "1.5rem",
                  }}
                >
                  개별 치료 프로그램
                </Card.Title>
                <Box
                  className="p-2"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    "& > :not(style)": {
                      m: 1,
                      p: 1,
                      pt: 1.3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      lineHeight: "1.3rem ",
                      width: "7.5rem",
                      height: "7.5rem",
                      border: "5px solid #ffffffc6",
                      borderRadius: "5rem",
                      backgroundColor: "rgb(13, 77, 5, 0.1)",

                      // color: "#ffffff",
                      // height: "auto",
                    },
                  }}
                >
                  <h6>개인 상담 </h6>
                  <h6>청소년 상담 </h6>
                  <h6>부부 상담 </h6>
                  <h6>가족 상담 </h6>
                </Box>
                <Container className="p-2">
                  <Row className="justify-content-center">
                    <Col xs={12} lg={6} className="pb-3">
                      <img
                        className="p-3"
                        alt="ProgramImage"
                        src="/image/성인상담.png"
                        width={"100%"}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col
                      xs={3}
                      xl={1}
                      className="mb-2"
                      style={{
                        // border: "5px solid #ffffffc6",
                        borderRadius: "1rem",
                        backgroundColor: "rgb(13, 77, 5, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "0.5rem",
                      }}
                    >
                      개인 상담
                    </Col>
                    <Col
                      xs={8}
                      xl={4}
                      className="p-3 mb-2 "
                      style={{
                        border: "5px solid rgb(13, 77, 5, 0.1)",
                        borderRadius: "1rem",
                        textAlign: "left",
                        marginRight: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        // backgroundColor: "rgb(13, 77, 5, 0.1)",
                      }}
                    >
                      내적 갈등을 해결하고 타인과의 건강한 관계를 맺기 위해 자기
                      이해, 자기 수용, 자기 신뢰를 돕는 과정
                    </Col>

                    <Col
                      xs={3}
                      xl={1}
                      className=" mb-2"
                      style={{
                        // border: "5px solid #ffffffc6",
                        borderRadius: "1rem",
                        backgroundColor: "rgb(13, 77, 5, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "0.5rem",
                      }}
                    >
                      청소년 상담
                    </Col>
                    <Col
                      xs={8}
                      xl={4}
                      className="p-3 mb-2 "
                      style={{
                        border: "5px solid rgb(13, 77, 5, 0.1)",
                        borderRadius: "1rem",
                        textAlign: "left",
                        marginRight: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        // justifyContent: "left",
                        // backgroundColor: "rgb(13, 77, 5, 0.1)",
                      }}
                    >
                      내적 갈등을 해결하고 타인과의 건강한 관계를 맺기 위해 자기
                      이해, 자기 수용, 자기 신뢰를 돕는 과정
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col
                      xs={3}
                      xl={1}
                      className=" mb-2"
                      style={{
                        // border: "5px solid #ffffffc6",
                        borderRadius: "1rem",

                        backgroundColor: "rgb(13, 77, 5, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "0.5rem",
                      }}
                    >
                      부부 상담
                    </Col>
                    <Col
                      xs={8}
                      xl={4}
                      className="p-3 mb-2 "
                      style={{
                        border: "5px solid rgb(13, 77, 5, 0.1)",
                        borderRadius: "1rem",
                        textAlign: "left",
                        marginRight: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        // backgroundColor: "rgb(13, 77, 5, 0.1)",
                      }}
                    >
                      배우자와의 갈등을 해결하기 위해 배우자를 서로 이해하고
                      바람직한 의사소통을 하도록 돕는 과정
                    </Col>

                    <Col
                      xs={3}
                      xl={1}
                      className=" mb-2 p-2"
                      style={{
                        // border: "5px solid #ffffffc6",
                        borderRadius: "1rem",
                        backgroundColor: "rgb(13, 77, 5, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "0.5rem",
                      }}
                    >
                      가족 상담
                    </Col>
                    <Col
                      xs={8}
                      xl={4}
                      className="p-3 mb-2 "
                      style={{
                        border: "5px solid rgb(13, 77, 5, 0.1)",
                        borderRadius: "1rem",
                        textAlign: "left",
                        marginRight: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        // backgroundColor: "rgb(13, 77, 5, 0.1)",
                      }}
                    >
                      가족 체계의 구조를 재구성하고 효율적인 의사 소통을하여
                      문제 해결력을 증진하도록 돕는 과정
                    </Col>
                    <Col lg={9} className="p-3 ">
                      * 소요시간 : 50분
                    </Col>
                  </Row>
                </Container>
              </Card>
              <img
                className="p-3"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              {/* 평가도구 */}
              Seongwon Language Psychology Center since 2013
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
