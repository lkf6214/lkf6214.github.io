// import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default function History() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">부모교육</Card.Header>
          <Card.Body>
            <Card.Text className="p-3">
              <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                  <img
                    alt="ProgramImage"
                    src="/img/부모코칭.jpg"
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
                ✔ 부모교육이란
              </Card.Title>
              <Card.Title className="p-2 m-2" style={{ lineHeight: "2rem" }}>
                부모의 자녀에 대한 이해와 지식을 증진시켜서 사고와 감정, 그리고
                행동에 있어서 습관적인 방법을 돌이켜 검토해 보도록 함과 동시에
                자녀를 양육하는 새로운 방법을 습득하도록 도와주는 다양한 교육적
                경험을 말합니다.
              </Card.Title>
              <img
                className="p-3"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              {/* 2 */}
              <Card>
                <Container>
                  <Card.Title
                    className="pt-4"
                    style={{
                      color: "#2f6597",
                      fontWeight: "800",
                      fontSize: "1.5rem",
                    }}
                  >
                    부모교육 프로그램 대상자
                  </Card.Title>

                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <img
                        className=""
                        alt="ProgramImage"
                        src="/image/037.jpg"
                        width={"100%"}
                      />
                    </Col>

                    <Col
                      lg
                      className="p-3"
                      style={{ display: "table-cell", verticalAlign: "middle" }}
                    >
                      {/* <Card.Text
                        className="p-3"
                        style={{ lineHeight: "2rem", textAlign: "left" }}
                      > */}
                      <Card.Title
                        className="p-2"
                        style={{
                          lineHeight: "2rem",
                          textAlign: "left",
                          marginLeft: "1.8rem",
                        }}
                      >
                        <li>
                          영유아(20개월 이상)부터 초등학생 자녀를 가진 부모
                        </li>
                        <li>
                          아이 양육에 어려움을 느끼거나 아이에 대한 이해가
                          부족하신 분
                        </li>
                        <li>양육에 대한 기술이나 방법을 잘 모르시는 분</li>
                        <li>
                          애착형성에 필요하거나 부모 자녀관계계에 어려움을
                          느끼시는 분
                        </li>
                        <li>
                          자녀의 발달과정과 심리적 문제로 어려움을 겪으시는 분
                        </li>
                      </Card.Title>
                      {/* </Card.Text> */}
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
              {/* 3 */}
              <Card>
                <Card.Title
                  className="pt-4"
                  style={{
                    color: "#2f6597",
                    fontWeight: "800",
                    fontSize: "1.5rem",
                  }}
                >
                  부모교육 프로그램
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
                  <h6>언어치료 부모교육</h6>
                  <h6>놀이치료 부모교육</h6>
                  <h6>인지치료 부모교육</h6>
                </Box>

                {/* <Card.Text
                  className="pb-3 m-2"
                  style={{ lineHeight: "1.6rem" }}
                >
                  <Card.Title className="p-2 m-2">
                    <li>언어발달이 또래보다 느린 아동</li>
                    <li>우리말 발음에 어려움을 보이는 아동 및 성인</li>
                  </Card.Title>
                </Card.Text> */}
              </Card>
              <img
                className="p-3"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              <Card>
                <Container>
                  <Card.Title
                    className="pt-4"
                    style={{
                      color: "#2f6597",
                      fontWeight: "800",
                      fontSize: "1.5rem",
                    }}
                  >
                    언어치료 부모교육 프로그램
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
                        width: "8rem",
                        height: "8rem",
                        border: "5px solid #ffffffc6",
                        borderRadius: "5rem",
                        backgroundColor: "rgb(255, 152, 0, 0.2)",
                        // color: "#ffffff",
                        // height: "auto",
                      },
                    }}
                  >
                    <h6>말더듬 아동을 위한 부모교육</h6>
                    <h6>언어 발달 촉진을 위한 부모교육</h6>
                  </Box>
                  <Row className="justify-content-lg-center">
                    <Col xs={12} lg={6}>
                      <img
                        className="pt-3"
                        alt="ProgramImage"
                        src="/image/038.jpg"
                        width={"100%"}
                      />
                    </Col>

                    <Col lg className="p-3">
                      <Card>
                        <Card.Header
                          className="h5"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                          }}
                        >
                          말더듬 아동을 위한 부모교육
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item style={{ lineHeight: "2rem" }}>
                            말더듬 아동을 둔 부모들을 대상으로 말더듬의 원인과
                            말더듬의 양상, 말더듬에 도움이 되는 부모의 역할 및
                            상호작용 방법에 대한 상담과 교육을 실시합니다.
                            아동의 말더듬 문제 개선을 위한 부모의 역할과 실제로
                            아동 말더듬을 증가시키는 주변 원인을 탐색하고, 가정
                            내 언어환경을 개선하여 아동의 유창성을 중진시키기
                            위한 교육 프로그램입니다.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                    <Col xs={12} lg={6}>
                      <img
                        className="pt-3"
                        alt="ProgramImage"
                        src="/image/036.jpg"
                        width={"100%"}
                      />
                    </Col>
                    <Col lg className="p-3">
                      <Card>
                        <Card.Header
                          className="h5"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                          }}
                        >
                          언어 발달 촉진을 위한 부모교육
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item style={{ lineHeight: "2rem" }}>
                            언어발달 지연을 보이는 아동의 부모들을 대상으로
                            자녀양육에 대한 부모의 역량을 강화하고, 아동의
                            언어발달을 촉진하는 데 도움을 줍니다. 아동의
                            언어발달 수준을 확인하고, 정상적인 언어발달 단계에
                            대한 이해와 언어발달 지연의 원인을 탐색하고, 각
                            아동의 언어특성과 언어문제에 따른 구체적인
                            언어자극의 제시방법을 부모에게 교육함으로써
                            언어교육의 효과를 높일 수 있는 프로그램입니다.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Card>
              <img
                className="p-1"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              <Card>
                <Container>
                  <Card.Title
                    className="pt-4"
                    style={{
                      color: "#2f6597",
                      fontWeight: "800",
                      fontSize: "1.5rem",
                    }}
                  >
                    놀이치료 부모교육
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
                        width: "8rem",
                        height: "8rem",
                        border: "5px solid #ffffffc6",
                        borderRadius: "5rem",
                        backgroundColor: "rgb(255, 152, 0, 0.2)",
                        // color: "#ffffff",
                        // height: "auto",
                      },
                    }}
                  >
                    <h6>부모상담 및 부모교육</h6>
                  </Box>
                  <Row className="justify-content-lg-center">
                    <Col xs={12} lg={6}>
                      <img
                        className="pt-3"
                        alt="ProgramImage"
                        src="/image/035.jpg"
                        width={"100%"}
                      />
                    </Col>
                    <Col lg className="p-3">
                      <Card>
                        <Card.Header
                          className="h5"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                          }}
                        >
                          부모상담 및 부모교육
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item style={{ lineHeight: "2rem" }}>
                            아동의 정서, 행동 발달상의 문제를 파악하여 부모
                            아동간의 상호작용을 증진시키고 긍정적인 애착관계를
                            형성시킴으로써 자녀의 바람직한 행동을 증가시키고
                            부적절한 문제행동을 감소시킬 수 있도록 합니다.
                            부모는 치료사의 코칭을 통해 자녀와의 긍정적인
                            상호작용 기술을 습득하고 일상생활에서 자녀를 일관성
                            있게 훈육할 수 있는 양육기술을 제공합니다.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Card>
              <img
                className="p-1"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              <Card>
                <Container>
                  <Card.Title
                    className="pt-4"
                    style={{
                      color: "#2f6597",
                      fontWeight: "800",
                      fontSize: "1.5rem",
                    }}
                  >
                    인지치료 부모교육 프로그램
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
                        width: "8rem",
                        height: "8rem",
                        border: "5px solid #ffffffc6",
                        borderRadius: "5rem",
                        backgroundColor: "rgb(255, 152, 0, 0.2)",
                        // color: "#ffffff",
                        // height: "auto",
                      },
                    }}
                  >
                    <h6>인지학습 부모코칭</h6>
                  </Box>
                  <Row className="justify-content-lg-center">
                    <Col xs={12} lg={6}>
                      <img
                        className="pt-3"
                        alt="ProgramImage"
                        src="/image/034.jpg"
                        width={"100%"}
                      />
                    </Col>
                    <Col lg className="p-3">
                      <Card>
                        <Card.Header
                          className="h5"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                          }}
                        >
                          인지학습 부모코칭
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item style={{ lineHeight: "2rem" }}>
                            인지학습 부모코칭이란 다양한 이유로 학습에 어려움을
                            겪는 자녀를 둔 학부모님을 대상으로 교과를 기반으로
                            읽기전략과 수학교과의 현행 수준에 맞는 다양한 전략에
                            대해 교육합니다. 대부분의 아이들은 양육자가
                            가르쳐주거나 생활 속에서 자연스럽게 학습개념을
                            알아가지만, 느린 학습자는 낮은 주의력과 기억력의
                            부족, 수 관계를 상징적으로 다루는 능력, 추성적이고
                            논리적인 사고능력의 부족 등 인지능력의 제한으로 인해
                            학습의 속도가 느리고 성취도가 낮습니다. 인지학습
                            부모코칭은 자녀의 인지적인 특성과 제한점을 확인하여
                            다양한 놀이와 구체적 사물의 사용, 꾸준한 반복적 학습
                            등의 각 아이들의 인지특성에 맞는 구체적인 학습전략을
                            부모님에게 교육함으로써 효과적인 가정학습이 이루어질
                            수 있도록 도와줍니다.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Card>
              <img
                className="p-1"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              Seongwon speech and psychological therapist clinic since 2013
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
