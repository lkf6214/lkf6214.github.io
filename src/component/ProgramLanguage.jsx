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
          <Card.Header className="h2">언어치료</Card.Header>
          <Card.Body>
            <Card.Text
              className="p-2"
              style={{ margin: "auto", left: "0", right: "0" }}
            >
              <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                  <img
                    alt="ProgramImage"
                    src="/img/언어치료01.png"
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
                ✔ 언어치료란
              </Card.Title>
              <Card.Title className="p-2 m-2" style={{ lineHeight: "2rem" }}>
                언어치료는 발음문제, 인지문제, 신경학적 문제, 음성문제, 말더듬,
                공명 문제 등의 다양한 이유로 인하여 생기는 의사소통의 어려움을
                도와주는 치료 과정입니다.
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
                    {/* <Col lg className="p-3">
                      <img
                        className=""
                        alt="ProgramImage"
                        src="/img/photo_012.png"
                        width={"100%"}
                      />
                    </Col> */}

                    <Col
                      // xl={7}
                      className="pt-1 p-3"
                      // style={{ display: "table-cell", verticalAlign: "middle" }}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card.Title
                        className="p-2"
                        style={{
                          lineHeight: "2rem",
                          textAlign: "left",
                          marginLeft: "1.8rem",
                        }}
                      >
                        <li>언어발달이 또래보다 느린 아동</li>
                        <li>우리말 발음에 어려움을 보이는 아동 및 성인</li>
                        <li>인지 및 사회성 발달에 어려움을 보이는 아동 </li>
                        <li>말을 더듬거나 지나치게 빠른 아동 및 성인</li>
                        <li>쉰 목소리나 콧소리가 심한 아동이나 성인</li>
                        <li>질병이나 사고로 인한 실어증 및 마비말장애 </li>
                        <li>글을 읽거나 쓰는데 어려움을 보이는 아동</li>
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
                      width: "7.5rem",
                      height: "7.5rem",
                      border: "5px solid #f7fbf7c5",
                      borderRadius: "5rem",
                      backgroundColor: "rgb(13, 77, 5, 0.1)",

                      // color: "#ffffff",
                      // height: "auto",
                    },
                  }}
                >
                  <h6>언어발달</h6>
                  <h6>난독(읽기 쓰기)</h6>
                  <h6>조음(발음)</h6>
                  <h6>말더듬 말빠름증</h6>
                  <h6>음성장애</h6>
                  <h6>신경언어장애</h6>
                  <h6>구개열</h6>
                  <h6>사회성 언어</h6>
                </Box>
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
                    그룹치료 대상자
                  </Card.Title>

                  <Row className="justify-content-lg-center">
                    <Col lg className="p-3">
                      <img
                        className=""
                        alt="ProgramImage"
                        src="/img/photo_003.png"
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
                        <li>적절한 상호작용 및 의사소통이 안되는 아동</li>
                        <li>충동적이고 감정 조절이 안되는 아동</li>
                        <li>
                          친구를 사귀는 기술이 부족하거나 또래나 다른 사람에게
                          자신의 감정이나 의사 전달이 어려운 아동
                        </li>
                        <li>
                          양보하기, 차례 지키기, 도움 요청하기, 도와주기, 갈등
                          상황 해결 등 자기 통제 기술이 안되는 아동
                        </li>
                        <li>다양한 실제 상황에서 문제해결이 안되는 아동 </li>
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
                    <Col lg className="p-3">
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
                        <ListGroup
                          variant="flush"
                          style={{
                            margin: "auto",
                            left: "0",
                            right: "0",
                          }}
                        >
                          <ListGroup.Item
                            // className="pt-3 pb-3"
                            style={{ lineHeight: "2rem" }}
                          >
                            문장으로 의사 표현이 가능한 취학 전 아동들을
                            대상으로 2-4명의 짝그룹이나 소그룹 형태로
                            구성됩니다.
                          </ListGroup.Item>

                          <ListGroup.Item
                            className="p-4"
                            style={{
                              lineHeight: "2rem",
                              margin: "auto",
                              left: "0",
                              right: "0",
                            }}
                          >
                            일반 교육 환경에 통합하여 잘 적응할 수 있도록
                            준비하는 과정으로 실제 교육 환경에서 활용할 수 있는
                            실질적이고 구체적인 기술을 배우고, 이를 바탕으로
                            가정과 학교, 지역 사회 생활에서 필요한 자기 관리
                            기술, 의사소통 기술, 문제 해결 능력, 사회성을
                            향상시키기 위한 프로그램입니다.
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>

                    <Col lg className="p-3">
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
                          <ListGroup.Item  style={{ lineHeight: "2rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                            현재 학교 생활을 하고 있는 초등 저학년을 대상으로
                            2-4명의 짝그룹이나  소그룹 형태로 구성됩니다.
                          </ListGroup.Item>
                          <ListGroup.Item style={{ lineHeight: "2rem" }}>
                            아동들이 가정은 물론 학교와 지역 사회에서 일어날
                            수있는 다양한 상황을 이해하고, 원인을 파악하거나
                            결과를 예측하는 훈련을 통해 실제적인 다양한 문제
                            상황에서의 적응력을 키워주게 됩니다. 또한 학교나
                            집단 내에서 지켜야하는 규칙을 이해하고 기억하는
                            훈련을 통해 또래와의 기본적인 사회 기술(대화와
                            대인기술) 습득에 도움을 주기 위한 프로그램입니다.
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
              {/* 4 찐 */}
              {/* 평가도구 */}
              <Card>
                <Card.Title
                  className="pt-4"
                  style={{
                    color: "#2f6597",
                    fontWeight: "800",
                  }}
                >
                  영역별 언어 검사도구 안내
                </Card.Title>
                <h6 className="p-3">
                  언어평가를 통해 언어발달 지연과 관련된 다양한 의사소통 문제,
                  발음문제, 말더듬, 신경학적 언어문제를 평가합니다.
                </h6>

                <Card.Text
                  className="pb-3 m-2"
                  // style={{ lineHeight: "1.6rem" }}
                >
                  <Container>
                    <Card.Title
                      className="pb-2"
                      style={{
                        color: "#e37114",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      언어 / 어휘 / 화용
                    </Card.Title>

                    <Row className="justify-content-lg-center">
                      {/* 1 */}
                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>SELSI </Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{
                                fontSize: "0.8rem",
                              }}
                            >
                              영유아 언어발달 선별검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-1"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            3세 이전 영유아의 언어능력
                          </Card.Text>
                        </Card>
                      </Col>

                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>K-SNAP</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              영유아 언어 및 의사소통 발달 선별검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            6-36개월 영유아의 언어 및 의사소통 발달 수준
                          </Card.Text>
                        </Card>
                      </Col>

                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>PRES</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              취학전 아동의 수용언어 및 표현언어 척도
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            학령전기 아동의 의미, 구문, 화용 영역에서 이해▪
                            표현언어능력
                          </Card.Text>
                        </Card>
                      </Col>

                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>REVT</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              수용 표현 어휘력 검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            2세 6개월~16세 이상 성인의 수용▪표현어휘력
                          </Card.Text>
                        </Card>
                      </Col>

                    

                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-3 pb-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>언어문제해결력검사</Card.Title>
                            {/* <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              언어문제해결력검사
                            </Card.Subtitle> */}
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            5세~12세 아동의 논리적인 사고과정을 언어화하는
                            상위언어능력
                          </Card.Text>
                        </Card>
                      </Col>



   {/* 1 */}
   <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>LSSC</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              학령기 아동 언어 검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            학령기 아동의 언어능력 평가 및 언어지체 혹은
                            언어장애 판별
                          </Card.Text>
                        </Card>
                      </Col>

     {/* 1-1 */}

     <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>CPLC </Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              아동 화용언어 체크리스트
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0", }}
                          >
                            언어적 상호작용의 강점과 약점을 파악하고 담화관리능력, 상황에 따른 적용능력, 의사소통 의도 등을 평가
                          </Card.Text>
                        </Card>
                      </Col>


                       {/* 1-1 */}
                       <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>KOPLAC</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              한국 아동 메타-화용언어 검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                          만 5세~12세 아동의 메타-화용언어 능력을 요소별(의사소통조율/이야기 담화정보/상위언어)로 평가하여 발달정도와 지연여부 판별</Card.Text>
                        </Card>
                      </Col>


                      {/* 6 */}
                    </Row>
                  </Container>

                  <Container>
                    <Card.Title
                      className="pt-3 pb-2"
                      style={{
                        color: "#e37114",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      발음 / 유창성
                    </Card.Title>
                    <Row className="justify-content-lg-center">
                      {/* 1 */}
                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              // backgroundColor: "rgb(93, 176, 220, 0.3)",

                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>APAC</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              우리말 조음음운평가
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            2세 6개월~6세 5개월 아동의 조음음운 능력
                          </Card.Text>
                        </Card>
                      </Col>
                      {/* 1-1 */}
                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>U-TAP</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              우리말 조음음운평가
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            2세~12세 아동의 조음음운 능력
                          </Card.Text>
                        </Card>
                      </Col>

                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>OSMSE-R</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              구강조음기관의 기능 선별검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            구강조음기관의 구조와 기능의 이상 여부 검사
                          </Card.Text>
                        </Card>
                      </Col>

                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>P-FA</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              파라다이스 유창성 검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            성인 및 아동의 말더듬 심한정도를 평가
                          </Card.Text>
                        </Card>
                      </Col>
                    </Row>
                  </Container>

                  <Container>
                    <Card.Title
                      className="pt-3 pb-2"
                      style={{
                        color: "#e37114",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      학령기 학습
                    </Card.Title>
                    <Row className="justify-content-lg-center">
                   
   {/* 1-1 */}
   <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>KISE-BATT</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              기초학력검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            만 5세에서 14세 학령기 아동을 대상의 기초학력 검사
                          </Card.Text>
                        </Card>
                      </Col>


                      {/* 1-1 */}
                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>KOLRA</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                              한국어 읽기검사
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            전반적인 언어기반 읽기평가, 읽기 하위 영역의 강·약점
                            파악
                          </Card.Text>
                        </Card>
                      </Col>


                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>BASA:R</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            > 기초학습기능 수행평가체제: 읽기
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            특수아동을 위한 학습부진 및 학습장애 영역에서의
                            읽기장애 진단
                          </Card.Text>
                        </Card>
                      </Col>

                      <Col xs={6} lg={3} className="pb-3">
                        <Card
                          className="mb-3"
                          style={{
                                                        height: "100%",
                          }}
                        >
                          <Card.Header
                            className="p-1"
                            style={{
                              backgroundColor: "rgb(13, 77, 5, 0.1)",
                            }}
                          >
                            <Card.Title>C-TONI-2</Card.Title>
                            <Card.Subtitle
                              className=" text-muted"
                              style={{ fontSize: "0.8rem" }}
                            >
                                비언어성 지능검사    
                            </Card.Subtitle>
                          </Card.Header>
                          <Card.Text
                            className="p-2"
                            style={{ margin: "auto", left: "0", right: "0" }}
                          >
                            만 2세~ 7세 11개월 아동의 비언어적 지능 평가
                          </Card.Text>
                        </Card>
                      </Col>


                      
                    

                      <Col lg={9} className="p-3 pb-1">
                        * 이 밖에도 MCDI-K(영유아의 어휘목록 평가), 상징놀이
                        검사, 의사소통기능 평가, 실어증검사, 자발화 분석과 같은
                        비공식적인 질적인 평가를 함께 실시함으로써 보다 정확한
                        아동의 언어수준을 평가할 수 있습니다.
                      </Col>




                    </Row>
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
              Seongwon Language Psychology Center since 2013
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
