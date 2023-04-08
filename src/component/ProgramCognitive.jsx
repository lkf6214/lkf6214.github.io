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
          <Card.Header className="h2">인지치료</Card.Header>
          <Card.Body>
            <Card.Text className="p-3">
              <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                  <img
                    alt="ProgramImage"
                    src="/img/인지치료.png"
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
                ✔ 인지치료란
              </Card.Title>
              <Card.Title className="p-2 m-2" style={{ lineHeight: "2rem" }}>
                아동의 개별적인 인지적 특성, 인지영역 별 강점 및 약점을 파악하고
                인지 능력을 효율적으로 발휘하도록 촉진, 보완하기 위한 교육적
                중재입니다.
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
                        src="/image/026.jpg"
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
                          fontSize: "1.2rem",
                        }}
                      >
                        <li>
                          전반적인 인지발달, 경계선 지능 등 인지발달에 지연을
                          보이는 아동 및 청소년
                        </li>
                        <li>
                          활동이나 학습에 동기와 흥미가 필요한 아동 및 청소년
                        </li>
                        <li>취학 전 기초학습개념 습득이 필요한 아동</li>
                        <li>
                          읽기, 쓰기, 계산하기 등 기초 학습능력이 부족한 아동 및
                          청소년
                        </li>
                        <li>특정 과목이나 영역에서 어려움을 보이는 아동</li>
                        <li>
                          초등 저학년 교과 습득 후 사회기술에 적용이 필요한 아동
                          및 청소년
                        </li>
                        <li>각 인지영역별 불균형 심한 아동 및 청소년</li>
                        <li>
                          지능이나 학습능력에 큰 문제는 없지만 주의산만 등으로
                          인해 효율적인 학습이 이루어지지 않는 아동
                        </li>
                        <li>
                          정상 혹은 그 이상의 지능을 갖고 있지만 학업성취도가
                          낮은 아동
                        </li>
                        <li>주의력문제로 인한 학습이 어려운 아동 및 청소년</li>
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
              {/* 3 숨김 */}
              {/* <Card>
                <Container>
                  <Card.Title
                    className="pt-4"
                    style={{
                      color: "#2f6597",
                      fontWeight: "800",
                      fontSize: "1.5rem",
                    }}
                  >
                    그룹치료 대상자
                  </Card.Title>

                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <Card.Title
                        // className="pt-4"
                        style={{
                               color: "#e37114",
                          fontWeight: "600",
                          // fontSize: "1rem",
                        }}
                      >
                        취학 전 아동 언어 그룹
                      </Card.Title>
                      <Card.Title
                        className="p-2"
                        style={{ lineHeight: "2rem" }}
                      >
                        <li>
                          문장으로 의사 표현이 가능한 취학 전 아동들을 대상으로
                          2-4명의 짝그룹이나 소그룹 형태로 구성됩니다.
                        </li>
                        <li>
                          일반 교육 환경에 통합하여 잘 적응할 수 있도록 준비하는
                          과정으로 실제 교육 환경에서 활용할 수 있는 실질적이고
                          구체적인 기술을 배우고, 이를 바탕으로 가정과 학교,
                          지역 사회 생활에서 필요한 자기 관리 기술, 의사소통
                          기술, 문제 해결 능력, 사회성을 향상시키기 위한
                          프로그램입니다.{" "}
                        </li>
                      </Card.Title>
                    </Col>

                    <Col lg className="p-3" style={{}}>
                      <Card.Title
                        // className="pt-4"
                        style={{
                               color: "#e37114",
                          fontWeight: "600",
                          // fontSize: "1rem",
                        }}
                      >
                        학령기 아동 언어 그룹
                      </Card.Title>
                      <Card.Title
                        className="p-2"
                        style={{ lineHeight: "2rem" }}
                      >
                        <li>
                          현재 학교 생활을 하고 있는 초등 저학년을 대상으로 2-4
                          명의 짝 그룹이나 소그룹 형태로 구성됩니다.
                        </li>
                        <li>
                          아동들이 가정은 물론 학교와 지역 사회에서 일어날
                          수있는 다양한 상황을 이해하고, 원인을 파악하거나
                          결과를 예측하는 훈련을 통해 실제적인 다양한 문제
                          상황에서의 적응력을 키워주게 됩니다. 또한 학교 나 집단
                          내에서 지켜야하는 규칙을 이해하고 기억하는 훈련을 통해
                          또래와의 기본적인 사회 기술 (대화와 대인 기술) 습득에
                          도움을 주기위한 프로그램입니다.
                        </li>
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
              /> */}
              {/* 3 */}
              <Card>
                <Card.Title
                  className="pt-4 pb-3"
                  style={{
                    color: "#2f6597",
                    fontWeight: "800",
                    fontSize: "1.5rem",
                  }}
                >
                  인지 학습치료 개별 프로그램
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
                  <h6>읽기/쓰기 향상</h6>
                  <h6>수학 향상</h6>
                  <h6>문해력 향상</h6>
                  <h6>학습능력 향상(주의집중/기억력 향상)</h6>
                  <h6>인지학습코칭/부모코칭</h6>
                </Box>
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
                      ① <br /> 읽기/쓰기 향상
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
                      문자변별 및 낱말을 다른 사람들이 이해할 수 있는 언어음으로
                      읽는 문항들로 구성하여 읽기능력을 길러줍니다. 또한 낱말의
                      철자를 잘 알도록 지도하며 기초쓰기 능력을 길러줍니다.
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
                      ② <br />
                      수학 향상
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
                      수인지 등 기초적인 수학 지식과 개념을 확장 및 능력을 향상
                      시킵니다.
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
                      ➂ <br />
                      문해력 향상
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
                      어휘력 확장을 통해 글을 읽고 이해하는 능력을 증진시키는
                      프로그램입니다.
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
                      ④<br />
                      학습능력 향상 (주의집중/기억력)
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
                      주의집중 및 기억력 향상을 통해 학업성취를 높여가는
                      프로그램입니다.
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
                      ⑤<br /> 인지학습 코칭/부모 코칭
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
                      가정에서 대상자에게 효과적인 학습코칭을 진행 할 수 있도록
                      도움을 주는 프로그램입니다.
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
                      ⑥ <br />
                      사회성 증진 프로그램 (그룹)
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
                      다양한 상황에서 아동이 어려움을 겪는 사회적인 부분들을
                      다양한 내용으로 접근하여 해결능력을 향상시키는
                      프로그램입니다.
                    </Col>
                  </Row>
                </Container>

                {/* 
                <Card.Text
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
                    사회성 그룹치료
                  </Card.Title>

                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <img
                        className=""
                        alt="ProgramImage"
                        src="/image/028.jpg"
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
                          marginLeft: "2rem",
                          textAlign: "left",
                        }}
                      >
                        <h5
                          className="pb-1"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          « 학교 준비반 »
                        </h5>
                        <li>입학 예정 아동 (2~4명)</li>
                        <li>
                          초등학교는 유치원과 어린이집과는 운영방식과 교육과정의
                          차이가 있기 때문에 초등학교 입학을 앞둔 아동들은
                          학교적응을 위한 준비과정이 필요합니다. 학교 준비반
                          프로그램은 아동들이 새로운 환경 내에서 학습에 필요한
                          태도와 예절, 자기관리능력, 학업수행을 위한 기초능력,
                          또래 친구들과 원활한 집단활동을 할 수 있도록
                          도와줍니다.
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
                        width: "8rem",
                        height: "8rem",
                        border: "5px solid #fff9f9c5",
                        borderRadius: "2rem",

                        backgroundColor: "rgb(255, 152, 0, 0.2)",

                        // color: "#e37114",
                        // color: "#ffffff",
                        // height: "auto",
                      },
                    }}
                  >
                    <h6>수업 참여</h6>
                    <h6>학교 적응</h6>
                    <h6>자기 관리</h6>
                    <h6>사회성</h6>
                  </Box>
                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <Card>
                        <Card.Header
                          className="h5"
                          style={{
                            color: "#e37114",
                            fontWeight: "600",
                          }}
                        >
                          수업참여
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            style={{
                              lineHeight: "2rem",
                              marginLeft: "1.8rem",
                              textAlign: "left",
                            }}
                          >
                            <li>착석 유지</li>
                            <li>선생님의 지시를 듣고 수행하기</li>
                            <li>발표하기</li>
                            {/* - 착석유지, 선생님의 지시를 듣고
                            수행하기, 발표하기 */}
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
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
                          학교적응
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            style={{
                              lineHeight: "2rem",
                              marginLeft: "1.8rem",
                              textAlign: "left",
                              wordBreak: "break-all",
                            }}
                          >
                            <li>칠판 보기</li>
                            <li>시간표 보기</li>
                            <li>알림장 작성하기</li>
                            <li>쉬는 시간과 수업시간 구분하기 등</li>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
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
                          자기관리
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            style={{
                              lineHeight: "2rem",
                              marginLeft: "1.8rem",
                              textAlign: "left",
                            }}
                          >
                            <li>물건 챙기기</li>
                            <li>자기 자리 찾기</li>
                            <li>가방 챙기기 등</li>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
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
                          사회성
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            style={{
                              lineHeight: "2rem",
                              marginLeft: "1.8rem",
                              textAlign: "left",
                            }}
                          >
                            <li>집단 활동 및 또래와의 상호작용 증진</li>
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
