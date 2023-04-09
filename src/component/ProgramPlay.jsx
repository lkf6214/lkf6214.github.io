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
import ProgramPlayTable from "./ProgramPlayTable";

export default function History() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">놀이치료</Card.Header>
          <Card.Body>
            <Card.Text className="p-3">
              <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                  <img
                    alt="ProgramImage"
                    src="/img/놀이치료.png"
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
                ✔ 놀이치료란
              </Card.Title>
              <Card.Title className="p-2 m-2" style={{ lineHeight: "2rem" }}>
                놀이 치료는 유아, 아동, 청소년 및 성인의 정서적 부적응이나
                발달상의 문제를 놀이를 통해서 도와주며, 언어로 표현하기 힘든
                경험, 정서, 욕구, 바람 등이 그대로 드러나는 놀이를 통해 사회성,
                인지, 정서 발달을 촉진시켜주는 과정입니다.
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
                    대상자
                  </Card.Title>

                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <img
                        className=""
                        alt="ProgramImage"
                        src="/image/046.jpg"
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
                          정신지체, 발달 장애 등 발달적 어려움을 가진 유아,
                          아동, 청소년 및 성인
                        </li>
                        <li>
                          고집, 떼 쓰기가 심하여 양육하기 어려운 유아, 아동,
                          청소년 및 성인
                        </li>
                        <li>
                          다양한 이유로 인해 불안, 위축, 우울한 정서를 가진
                          유아, 아동, 청소년 및 성인
                        </li>
                        <li>
                          주의 집중을 잘 못하고 산만한 유아, 아동, 청소년 및
                          성인 충동적이고 공격적 행동을 보이거나 분노감을
                          표현하는 유아, 아동, 청소년 및 성인
                        </li>
                        <li>
                          다양한 실제 상황에서 문제 해결이 어려운 유아, 아동,
                          청소년 및 성인
                        </li>
                        <li>
                          정서, 인지, 행동 문제로 인해 유치원, 학교에서 또래와의
                          적응이 어려운 유아, 아동, 청소년 및 성인
                        </li>
                        <li>
                          부모와의 애착 관계가 불안정하고 관계의 개선과 향상이
                          필요한 유아, 아동
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
                      width: "8rem",
                      height: "8rem",
                      border: "5px solid #f7fbf7c5",
                      borderRadius: "5rem",

                      backgroundColor: "rgb(13, 77, 5, 0.1)",
                      // color: "#ffffff",
                      // height: "auto",
                    },
                  }}
                >
                  <h6>개인 심리 치료</h6>
                  <h6>발달 놀이 치료</h6>
                  <h6>소집단 치료</h6>
                  <h6>모아 상호작용 증진 치료</h6>
                  <h6>부모상담 및 부모교육</h6>
                </Box>

                {/* <Row className="justify-content-lg-center">
                  <Col xs={6} lg={4} className="p-3">
                    <Card>
                      <Card.Header
                        className="h5"
                        style={{
                          color: "#cf9866",
                          fontWeight: "600",
                        }}
                      >
                        개인 심리 치료
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          style={{
                            lineHeight: "2rem",
                          }}
                        >
                          치료자와 내담 아동이 일대일 놀이를 통해 정서적,
                          행동적, 사회적 어려움을 완화 시키도록 돕는 치료
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>

                  <Col xs={6} lg={4} className="p-3">
                    <Card>
                      <Card.Header
                        className="h5"
                        style={{
                          color: "#cf9866",
                          fontWeight: "600",
                        }}
                      >
                        발달 놀이 치료
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          style={{
                            lineHeight: "2rem",

                            textAlign: "left",
                          }}
                        >
                          발달 지연이있는 내담 아동을 대상으로 놀이를 통해
                          발달을 촉진시킬 수 있도록 돕는 치료
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>

                  <Col xs={6} lg={4} className="p-3">
                    <Card>
                      <Card.Header
                        className="h5"
                        style={{
                          color: "#cf9866",
                          fontWeight: "600",
                        }}
                      >
                        소집단 치료
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          style={{
                            lineHeight: "2rem",

                            textAlign: "left",
                          }}
                        >
                          두 명 이상의 내담 아동을 대상으로 치료자가 대인 관계
                          어려움을 완화시키고 사 회성을 증진시킬 수 있도록 하는
                          치료로, 내담 아동의 특성에 따라 치료자도 2인 이상이
                          참여
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>

                  <Col xs={6} lg={4} className="p-3">
                    <Card>
                      <Card.Header
                        className="h5"
                        style={{
                          color: "#cf9866",
                          fontWeight: "600",
                        }}
                      >
                        모아 상호 작용 증진 치료
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          style={{
                            lineHeight: "2rem",

                            textAlign: "left",
                          }}
                        >
                          어머니와 아동 간 상호 작용을 증진시키고 애착 관계를
                          향상시키기 위해 어머니와 아동을 대상으로 진행하는
                          프로그램
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                  <Col xs={6} lg={4} className="p-3">
                    <Card>
                      <Card.Header
                        className="h5"
                        style={{
                          color: "#cf9866",
                          fontWeight: "600",
                        }}
                      >
                        부모 상담 및 부모 교육
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          style={{
                            lineHeight: "2rem",

                            textAlign: "left",
                          }}
                        >
                          부모 역할의 어려움이나 부모를 개인적으로 변화시키고
                          자하는 목표를 위해 개인 상담을 진행하며, 부모를
                          대상으로 자녀를 이해하고 부모로서의 효능감을 가지며
                          스트레스에 대처할 수 있도록 부모 교육을 실시
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                </Row> */}

                <Container className="p-2">
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
                      개인 심리치료
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
                      치료자와 내담 아동이 일대일 놀이를 통해 정서적, 행동적,
                      사회적 어려움을 완화 시키도록 돕는 치료
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
                      발달 놀이치료
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
                      발달 지연이있는 내담 아동을 대상으로 놀이를 통해 발달을
                      촉진시킬 수 있도록 돕는 치료
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
                      소집단 치료
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
                      두 명 이상의 내담 아동을 대상으로 치료자가 대인 관계
                      어려움을 완화시키고 사 회성을 증진시킬 수 있도록 하는
                      치료로, 내담 아동의 특성에 따라 치료자도 2인 이상이 참여
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
                      모아 상호작용 증진 치료
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
                      어머니와 아동 간 상호 작용을 증진시키고 애착 관계를
                      향상시키기 위해 어머니와 아동을 대상으로 진행하는 프로그램
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
                      부모상담 및 부모교육
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
                      부모 역할의 어려움이나 부모를 개인적으로 변화시키고 자하는
                      목표를 위해 개인 상담을 진행하며, 부모를 대상으로 자녀를
                      이해하고 부모로서의 효능감을 가지며 스트레스에 대처할 수
                      있도록 부모 교육을 실시
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
              {/* 4 그룹치료 대상자 이미지포함 */}
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
                    사회성 그룹치료 대상자
                  </Card.Title>

                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <img
                        className=""
                        alt="ProgramImage"
                        src="/image/045.jpg"
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
                          marginLeft: "1.8rem",
                          textAlign: "left",
                        }}
                      >
                        <li>친구에게 관심은 있지만 다가가지 못하는 아이</li>
                        <li>
                          높은 불안으로 또래 관계를 회피하거나 자기표현이 서툰
                          아이
                        </li>
                        <li>
                          수줍음이 많고 심리적인 위축으로 자신감이 부족하고
                          소외감을 느끼는 아이
                        </li>
                        <li>작은 일에 상처를 받거나 다툼이 잦은 아이</li>
                        <li>
                          자신의 생각이나 감정을 제대로 표현하기 어려운 아이{" "}
                        </li>
                        <li>
                          다양한 상황에 대한 이해와 상황판단 및 문제의 해결과
                          대처능력에 어려움을 보이는 아이
                        </li>
                        <li>
                          다른 사람의 감정이나 생각에 대한 이해가 부족하여
                          상호작용에 어려움을 보이는 아이
                        </li>
                        <li>게임 내 규칙 및 순서지키기가 어려운 아이</li>
                        <li>수업 및 단체활동에 집중하지 못하고 산만한 아이</li>
                        <li>상황에 적절하지 않은 말이나 행동을 하는 아이</li>
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
                    사회성 그룹치료 프로그램
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
                    <h6>자아 파악</h6>
                    <h6>친구 사귀기</h6>
                    <h6>갈등 대처</h6>
                    <h6>문제해결능력</h6>
                    <h6>적응 및 협동</h6>
                    <h6>책임감, 자존감 높이기</h6>
                  </Box>
                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <img
                        className=""
                        alt="ProgramImage"
                        src="/image/044.jpg"
                        width={"100%"}
                      />
                    </Col>

                    <Col lg className="p-3">
                      <Card.Title
                        className="p-2"
                        style={{ lineHeight: "2rem" }}
                      >
                        사회성 그룹치료는 또래와 어울리면서 친구를 사귀는
                        즐거움을 체험하여, 친사회적 기술 및 바람직한 상호작용을
                        배움으로써 유연한 또래와의 관계를 유지하도록 돕는
                        프로그램입니다. <br />
                        사회성 그룹치료 속 놀이를 통하여 자신에 대하여 파악할 수
                        있으며, 새로운 친구를 사귀고, 문제가 발생하였을 때
                        갈등을 대처하는 능력과 효율적인 문제해결 능력을 키울
                        뿐만 아니라, 친구들과 적응하고 협동하고, 인내하는 방법을
                        깨달으며 사회성을 증진할 수 있습니다. 사회적 기술의
                        습득뿐만 아니라 원만한 또래관계를 형성하는 데 방해가
                        되는 문제를 직접 다룸으로써, 아동이 속한 사회적인
                        관계에서 정서적인 지지를 받고 협업, 책임감 및 자존감을
                        높일 수 있습니다.
                      </Card.Title>
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
              {/* 평가도구 */}
              <Card>
                <Card.Title
                  className="pt-4"
                  style={{
                    color: "#2f6597",
                    fontWeight: "800",
                  }}
                >
                  놀이 평가 안내
                </Card.Title>

                <Card.Text
                // className="pb-3 m-2"
                // style={{ lineHeight: "1.6rem" }}
                >
                  <Container>
                    <Row className="justify-content-center">
                      {/* 1-1 */}
                      <Col xs={12} md={11}>
                        <Card.Title
                          className="pt-3"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                            fontSize: "1rem",
                          }}
                        >
                          놀이 평가 / 발달 평가 / 부모 및 가족평가
                        </Card.Title>
                        <Card className="m-2">
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(248, 208, 99, 0.5)",
                            }}
                          >
                            <Card.Title>놀이 평가</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            ></Card.Subtitle>
                          </Card.Header>
                          <ListGroup variant="flush">
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              영유아기부터 초등저학년 아동의 심리적 상태와
                              양육자와의 관계의 질을 알아보기 위한 평가입니다.
                              검사자와의 개별적인 놀이활동과 양육자와의 모-아
                              상호작용 평가로 이루어집니다. 평가 후 양육코칭을
                              받을 수 있는 검사입니다.
                            </ListGroup.Item>
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              검사도구: 한국 아동 인성 평정척도(KPRC), 아동
                              상호작용검사(CIBT), 영유아 기질 및
                              비전형행동척도(K-TABS)
                            </ListGroup.Item>
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              대상 : 불안이나 위축 같은 심리적 어려움이 있는
                              아동, 산만하여 주의집중이 어려운 아동, 또래와
                              어울리기 어려운 아동, 자신감이 없는 아동
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                      </Col>
                    </Row>
                    {/* 2 */}

                    <Row className="justify-content-center">
                      {/* 1-1 */}
                      <Col xs={12} md={11}>
                        {/* <Card.Title
                          className="pt-4"
                          style={{
                            color: "#cf9866",
                            fontWeight: "600",
                            fontSize: "1rem",
                          }}
                        >
                          발달 평가
                        </Card.Title> */}
                        <Card className="m-2">
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(248, 208, 99, 0.5)",
                            }}
                          >
                            <Card.Title>발달 평가</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            ></Card.Subtitle>
                          </Card.Header>
                          <ListGroup variant="flush">
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              발달평가는 발달지연이나 발달상의 불균형이 의심되는
                              0-5세 아동을 대상으로 합니다. 아동발달의 5가지
                              영역인 언어, 인지, 사회성, 운동성, 신변처리의
                              발달수준을 정확히 파악하여 적절한 치료적 도움을 줄
                              수 있도록 하는 데 목적이 있습니다.
                            </ListGroup.Item>
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              검사도구: 사회성숙도 검사(SMS), 아동발달
                              검사(K-CDI), 자폐선별 검사(K-CARS), 아동상호작용
                              검사(CIBT), 기질 및 성격 검사(J-TCI)
                            </ListGroup.Item>
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              대상 - 발달상의 어려움이 있는 영유아 및 아동 -
                              양육자와의 불안정한 애착관계에 있는 영유아 및 아동
                              - 상호작용에 어려움이 있는 영유아 및 아동
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                      </Col>
                    </Row>

                    {/* 2 */}

                    <Row className="justify-content-center">
                      {/* 1-1 */}
                      <Col xs={12} md={11}>
                        {/* <Card.Title
                          className="pt-4"
                          style={{
                            color: "#cf9866",
                            fontWeight: "600",
                            fontSize: "1rem",
                          }}
                        >
                          부모 및 가족평가
                        </Card.Title> */}
                        <Card className="m-2">
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(248, 208, 99, 0.5)",
                            }}
                          >
                            <Card.Title>부모 및 가족평가</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            ></Card.Subtitle>
                          </Card.Header>
                          <ListGroup variant="flush">
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              아동의 발달력과 양육, 학교생활 등 과거부터
                              현재까지 아동을 둘러싼 환경적 요인의 정보를
                              수집하고, 현재 아동을 포함한 가족이 처한 어려움의
                              원인과 가족의 역동을 파악하여 문제해결을 위한
                              치료적 방향과 자원을 찾도록 도와줍니다.
                            </ListGroup.Item>
                            <ListGroup.Item style={{ lineHeight: "2rem" }}>
                              검사도구: 부모양육태도 검사, 부모양육스트레스
                              검사, 다면적 인성 검사(MMPI-2), 문장완성검사(SCT),
                              기질 및 성격 검사(TCI)
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                      </Col>
                    </Row>

                    <Card.Title
                      className="pt-5"
                      style={{
                        color: "#e37114",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      종합심리검사
                    </Card.Title>
                    <h6 className="p-2">
                      검사 소요시간 : 120분 내외 검사결과 해석상담은 검사 일주일
                      후 진행하며 소요시간 30분 내외 (추후 협의진행)
                    </h6>
                    <ProgramPlayTable />
                  </Container>

                  {/* </Card.Title> */}
                </Card.Text>
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
