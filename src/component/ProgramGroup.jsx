// import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default function History() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">사회성 그룹치료</Card.Header>
          <Card.Body>
            <Card.Text className="p-3">
              <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                  <img
                    alt="ProgramImage"
                    src="/img/학교준비반사회성그룹.png"
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
                ✔ 사회성 그룹치료란
              </Card.Title>
              <Card.Title className="p-2 m-2" style={{ lineHeight: "2rem" }}>
                의사소통기술이나 자기표현방법, 또는 또래 수용기술 및 학업기술
                등을 향상시켜 자존감과 독립성을 갖고 사회에 적응해 가는 방법을
                익히게 하는 프로그램입니다.
              </Card.Title>
              <img
                className="p-3"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              {/* 2 */}
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
                  그룹치료 프로그램
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
                  <h6>언어 그룹치료</h6>
                  <h6>놀이 그룹치료</h6>
                  <h6>인지 그룹치료</h6>
                </Box>
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
                    언어 그룹치료
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
                    <h6>취학전 아동 사회성 증진</h6>
                    <h6>학령기 아동 사회성 증진</h6>
                  </Box>

                  <Row className="justify-content-lg-center">
                    {/* <Col xs={12} lg={6}>
                      <img
                        className="pt-3"
                        alt="ProgramImage"
                        src="/image/013.jpg"
                        width={"100%"}
                      />
                    </Col> */}

                    <Col xs={12} lg={6} className="p-3 ">
                      <Card style={{ height: "100%" }}>
                        <Card.Header
                          className="h5"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                          }}
                        >
                          취학 전 아동 언어 그룹
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            className="p-3"
                            style={{ lineHeight: "2.1rem" }}
                          >
                            일반 교육 환경에 통합하여 잘 적응할 수 있도록
                            준비하는 과정으로 실제 교육 환경에서 활용할 수 있는
                            실질적이고 구체적인 기술을 배우고, 이를 바탕으로
                            가정과 학교, 지역 사회 생활에서 필요한 자기 관리
                            기술, 의사소통 기술, 문제 해결 능력, 사회성을
                            향상시키기 위한 프로그램입니다.
                          </ListGroup.Item>

                          <ListGroup.Item>
                            자기 관리 기술, 의사소통 기술, 문제 해결 능력,
                            사회성 향상
                          </ListGroup.Item>
                          <ListGroup.Item style={{ lineHeight: "2rem" }}>
                            대상자: 문장으로 의사 표현이 가능한 취학 전 아동들을
                            대상으로 2-4명의 짝그룹이나 소그룹 형태로
                            구성됩니다.
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              lineHeight: "2rem",
                            }}
                          >
                            소요시간: 50분
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>

                    <Col xs={12} lg={6} className="p-3 ">
                      <Card style={{ height: "100%" }}>
                        <Card.Header
                          className="h5"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                          }}
                        >
                          학령기 아동 언어 그룹
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item style={{ lineHeight: "2rem" }}>
                            아동들이 가정은 물론 학교와 지역 사회에서 일어날
                            수있는 다양한 상황을 이해하고, 원인을 파악하거나
                            결과를 예측하는 훈련을 통해 실제적인 다양한 문제
                            상황에서의 적응력을 키워주게 됩니다. 또한 학교나
                            집단 내에서 지켜야하는 규칙을 이해하고 기억하는
                            훈련을 통해 또래와의 기본적인 사회 기술(대화와
                            대인기술) 습득에 도움을 주기위한 프로그램입니다.
                          </ListGroup.Item>

                          <ListGroup.Item>
                            - 규칙이해, 사회 기술(대화와 대인기술) 등
                          </ListGroup.Item>
                          <ListGroup.Item style={{ lineHeight: "1.9rem" }}>
                            대상자: 현재 학교 생활을 하고 있는 초등 저학년을
                            대상으로 2-4명의 짝그룹이나 소그룹 형태로
                            구성됩니다.
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              lineHeight: "2rem",
                            }}
                          >
                            소요시간: 50분
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
                    놀이 그룹치료
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
                    <h6>놀이치료 사회성 프로그램</h6>
                  </Box>
                  <Row className="justify-content-lg-center">
                    <Col>
                      <img
                        className="pt-3"
                        alt="ProgramImage"
                        src="/image/010.jpg"
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
                          사회성 프로그램
                        </Card.Header>
                        <ListGroup
                          style={{ lineHeight: "1.6rem" }}
                          variant="flush"
                        >
                          <ListGroup.Item>
                            사회성 그룹치료는 또래와 어울리면서 친구를 사귀는
                            즐거움을 체험하여, 친사회적 기술 및 바람직한
                            상호작용을 배움으로써 유연한 또래와의 관계를
                            유지하도록 돕는 프로그램입니다. 사회성 그룹치료 속
                            놀이를 통하여 자신에 대하여 파악할 수 있으며, 새로운
                            친구를 사귀고, 문제가 발생하였을 때 갈등을 대처하는
                            능력과 효율적인 문제해결 능력을 키울 뿐만 아니라,
                            친구들과 적응하고 협동하고, 인내하는 방법을 깨달으며
                            사회성을 증진할 수 있습니다. 사회적 기술의 습득뿐만
                            아니라 원만한 또래관계를 형성하는 데 방해가 되는
                            문제를 직접 다룸으로써, 아동이 속한 사회적인
                            관계에서 정서적인 지지를 받고 협업, 책임감 및
                            자존감을 높일 수 있습니다.
                          </ListGroup.Item>
                          <ListGroup.Item>
                            - 자아 파악, 친구 사귀기, 갈등 대처, 문제해결능력,
                            적응 및 협동, 책임감과 자존감 높이기
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            <h6> 대상자: 학령전기, 학령기 아동 (2~4명)</h6>
                            <h6>
                              - 친구에게 관심은 있지만 다가가지 못하는 아이
                            </h6>
                            <h6>
                              - 높은 불안으로 또래 관계를 회피하거나 자기표현이
                              서툰 아이
                            </h6>
                            <h6>
                              - 수줍음이 많고 심리적인 위축으로 자신감이
                              부족하고 소외감을 느끼는 아이 등
                            </h6>
                          </ListGroup.Item>

                          <ListGroup.Item>소요시간: 50분</ListGroup.Item>
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
                    인지 그룹치료
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
                    <h6>인지치료 사회성 프로그램</h6>
                  </Box>
                  <Row className="justify-content-lg-center">
                    <Col>
                      <img
                        className="pt-3"
                        alt="ProgramImage"
                        src="/image/015.jpg"
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
                          학교 준비반
                        </Card.Header>
                        <ListGroup
                          style={{ lineHeight: "1.6rem" }}
                          variant="flush"
                        >
                          <ListGroup.Item>
                            초등학교는 유치원과 어린이집과는 운영방식과
                            교육과정의 차이가 있기 때문에 초등학교 입학을 앞둔
                            아동들은 학교적응을 위한 준비과정이 필요합니다. 학교
                            준비반 프로그램은 아동들이 새로운 환경 내에서 학습에
                            필요한 태도와 예절, 자기관리능력, 학업수행을 위한
                            기초능력, 또래 친구들과 원활한 집단활동을 할 수
                            있도록 도와줍니다.
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            <h6>
                              - 수업참여: 착석 유지, 선생님의 지시를 듣고
                              수행하기, 발표하기
                            </h6>
                            <h6>
                              - 학교적응: 칠판 보기, 시간표 보기, 알림장
                              작성하기, 쉬는 시간과 수업시간 구분하기 등
                            </h6>
                            <h6>
                              - 자기관리: 물건 챙기기, 자기 자리 찾기, 가방
                              챙기기 등
                            </h6>
                            <h6>
                              - 사회성: 집단 활동 및 또래와의 상호작용 증진
                            </h6>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            대상자: 입학 예정 아동 (2~4명)
                          </ListGroup.Item>

                          <ListGroup.Item>소요시간: 4-50분</ListGroup.Item>
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
              Seongwon Language Psychology Center since 2013
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
