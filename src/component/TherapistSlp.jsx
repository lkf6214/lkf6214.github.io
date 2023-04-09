import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMedia from "@mui/material/CardMedia";
import { Hidden } from "@mui/material";

function KitchenSinkExample() {
  return (
    <>
      <Container>
        {/* <Card className="p-4"> */}
        <Card.Title id="언어재활사" className="p-1">
          언어재활사
        </Card.Title>

        {/* 1 양쪽*/}
        {/* <Row className="justify-content-center">
  <Col sm={6} lg={4}>
            <Card className="m-4">
              <Row className="justify-content-center">
                <Col xs={6} sm={12}>
                  <CardMedia
                    style={{
                      padding: "1rem 1rem 1rem 1rem",
                    }}
                    component="img"
                    image="/img/이소영t.jpeg"
                    alt="therapist1"
                  />
                </Col>

                <Col
                  xs={5}
                  sm={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Title>이소영 원장</Card.Title>
                    <Card.Text>1급 언어재활사</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        부모교육지도사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        문해교육전문가 기초 과정
                      </ListGroup.Item>
                      <ListGroup.Item>
                        보완대체의사소통(ACC) 전문가 
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한국재활사협회 정회원 
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어심리센터 원장(송파점&위례점)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서울삼성병원 재활의학과 언어치료실
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서울아산병원 재활의학과 언어치료실
                      </ListGroup.Item>
                      <ListGroup.Item>
                        이화여자대학교 대학원 임상지도
                      </ListGroup.Item>
                      <ListGroup.Item>
                        윤미선 언어청각센터
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        대구대학교 언어치료학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row> */}

        {/* 1 양쪽 imd, div*/}
        {/* <Row className="justify-content-center">
  <Col sm={6} lg={4}>
            <Card className="m-4">
              <Row className="justify-content-center">
                <Col xs={5} sm={12}>
                  <img
                    className="p-3"
                    alt="greetingImage"
                    src="/img/이소영t.jpeg"
                    width={"100%"}
                  />
                </Col>

                <Col
                  xs={5}
                  sm={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem 1rem",
                  }}
                >
                  <div>
                    <Card.Title>이소영 원장</Card.Title>
                    <Card.Text>1급 언어재활사</Card.Text>
                    <Card.Subtitle className="text-muted">
                      구개열, 말더듬, 조음음운장애, 신경언어장애
                    </Card.Subtitle>
                  </div>
                </Col>
              </Row>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        부모교육지도사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        문해교육전문가 기초 과정
                      </ListGroup.Item>
                      <ListGroup.Item>
                        보완대체의사소통(ACC) 전문가 
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한국재활사협회 정회원 
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어심리센터 원장(송파점&위례점)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서울삼성병원 재활의학과 언어치료실
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서울아산병원 재활의학과 언어치료실
                      </ListGroup.Item>
                      <ListGroup.Item>
                        이화여자대학교 대학원 임상지도
                      </ListGroup.Item>
                      <ListGroup.Item>
                        윤미선 언어청각센터
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        대구대학교 언어치료학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row> */}

        {/* 1 원본+ 이미지 크기 줄임*/}
        <Row className="justify-content-center">
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/이소영.png"
                alt="therapist1"
              />

              <Card.Body>
                <Card.Title>이소영 센터장</Card.Title>
                <Card.Text>1급 언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어상담연구소 송파, <br /> 성원언어심리센터 위례
                      </ListGroup.Item>
                      <ListGroup.Item>서울삼성병원 재활의학과</ListGroup.Item>
                      <ListGroup.Item>서울아산병원 재활의학과</ListGroup.Item>
                      <ListGroup.Item>
                        이화여자대학교 대학원 임상지도
                      </ListGroup.Item>
                      <ListGroup.Item>윤미선 언어청각센터</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        보완대체의사소통(ACC) 전문가
                      </ListGroup.Item>
                      <ListGroup.Item>부모교육지도사</ListGroup.Item>
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국언어재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        대구대학교 언어치료학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>

        {/* 3, 4, 5 */}
        <Row className="justify-content-center">
          {/* 2 하선영 t*/}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/하선영.png"
                alt="therapist2"
              />
              <Card.Body>
                <Card.Title>하선영 위례센터 부원장</Card.Title>
                <Card.Text>1급 언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어상담연구소 송파, <br /> 성원언어심리센터 위례
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서울삼성병원 재활의학과 언어치료실
                      </ListGroup.Item>
                      <ListGroup.Item>
                        아산병원 재활의학과 언어치료실
                      </ListGroup.Item>
                      <ListGroup.Item>두리언어치료실 언어재활사</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        이화여자대학교 특수교육학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 3 나니나*/}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/나니나t.png"
                alt="therapist4"
              />
              <Card.Body>
                <Card.Title>나니나 연구원</Card.Title>
                <Card.Text>1급 언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어상담연구소 송파
                      </ListGroup.Item>
                      <ListGroup.Item>
                        하나아동발달센터 언어재활사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한효섭언어청각센터 언어재활사
                      </ListGroup.Item>
                      <ListGroup.Item>초록소리 언어재활사</ListGroup.Item>
                      <ListGroup.Item>이화언어병리실 언어재활사</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 4 황서영 */}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/황서영t_1.jpg"
                alt="therapist3"
              />
              <Card.Body>
                <Card.Title>황서영 연구원</Card.Title>
                <Card.Text>1급 언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어상담연구소 송파
                      </ListGroup.Item>
                      <ListGroup.Item>
                        아이코리아 아동발달교육연구원 언어재활사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        이화여자대학교 신경언어연구실 연구원
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>논술지도사</ListGroup.Item>

                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        경희대학교 국어국문학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 5 김윤희 t*/}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/김윤희t.jpeg"
                alt="therapist5"
              />
              <Card.Body>
                <Card.Title>김윤희 연구원</Card.Title>
                <Card.Text>1급 언어재활사</Card.Text>
                {/* <Card.Subtitle className="text-muted">
                  언어사고력 지도사
                </Card.Subtitle> */}
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어상담연구소 송파, <br /> 성원언어심리센터 위례
                      </ListGroup.Item>
                      <ListGroup.Item>
                        이화여자대학교 아동언어연구실 연구원
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>언어사고력 지도사</ListGroup.Item>
                      <ListGroup.Item>
                        한국난독증협회 문해교육전문가 심화과정 수료
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한양대학교 영어영문학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 6 최정임 */}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/최정임.jpg"
                alt="therapist6"
              />
              <Card.Body>
                <Card.Title>최정임 연구원</Card.Title>
                <Card.Text>1급 언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>現 성원언어심리센터 위례</ListGroup.Item>
                      <ListGroup.Item>
                        강북삼성병원 이비인후과 언어치료실
                      </ListGroup.Item>
                      <ListGroup.Item>초록소리 언어재활사</ListGroup.Item>
                      <ListGroup.Item>서울탑 정신과 언어재활사</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>중앙대학교 심리학 학사</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 7 오영란 */}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/오영란004.png"
                alt="therapist7"
              />
              <Card.Body>
                <Card.Title>오영란 연구원</Card.Title>
                <Card.Text>언어장애전문가</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어상담연구소 송파
                      </ListGroup.Item>
                      <ListGroup.Item>
                        순천향대 부천병원 이비인후과 청각재활
                      </ListGroup.Item>
                      <ListGroup.Item>
                        성동장애인복지관 언어재활사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        윤미선청각언어연구실 언어재활사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        초록아동발달센터 언어재활사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        나사렛대학교 언어청각센터 임상실습 감독
                      </ListGroup.Item>
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국언어재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 대학원 언어병리학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        연세대학교 인문학부(심리,사회) 심리학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 8 강현자*/}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/강현자.png"
                alt="therapist8"
              />
              <Card.Body>
                <Card.Title>강현자 연구원</Card.Title>
                <Card.Text>1급 언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>現 성원언어심리센터 위례</ListGroup.Item>
                      <ListGroup.Item>
                        現 서초한우리정보문화센터/생애지원팀/초기언어진단및 평가
                      </ListGroup.Item>
                      <ListGroup.Item>
                        풍납종합사회복지관 해오름센터
                      </ListGroup.Item>
                      <ListGroup.Item>
                        연세대학교 인문학부(심리,사회) 심리학 학사
                      </ListGroup.Item>
                      <ListGroup.Item>아이코리아 아동발달교육원</ListGroup.Item>
                      <ListGroup.Item>
                        한국육영학교 방과후언어치료
                      </ListGroup.Item>
                      <ListGroup.Item>아이샘아동발달센터</ListGroup.Item>
                      <ListGroup.Item>
                        용납초등학교 방과후 언어치료
                      </ListGroup.Item>
                      <ListGroup.Item>장애전문 한마음어린이집</ListGroup.Item>
                      <ListGroup.Item>
                        KOICA 해외봉사단 강사/보완대체의사소통 AAC 교육
                      </ListGroup.Item>
                      <ListGroup.Item>
                        강동ㆍ송파 장애인가족지원센터 AAC 부모교육
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        한국언어청각임상학회 정회원
                      </ListGroup.Item>
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        단국대학교 대학원 특수교육과
                        석사(청각ㆍ언어장애아교육전공)
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 9 이은경*/}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/이은경t.jpg"
                alt="therapist9"
              />
              <Card.Body>
                <Card.Title>이은경 연구원</Card.Title>
                <Card.Text>언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>現 성원언어심리센터 위례</ListGroup.Item>
                      <ListGroup.Item>대구언어치료실</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        대구대학교 재활과학대학원 언어치료학과 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        대구대학교 언어치료학과 학사
                      </ListGroup.Item>
                      <ListGroup.Item>경북대학교 심리학과 학사</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 10 노현서*/}
          <Col sm={6} lg={5}>
            <Card className="m-4">
              <CardMedia
                style={{
                  padding: "1rem 0rem 0rem 0rem ",
                  width: "10rem",
                  display: "flex",
                  margin: "auto",
                  left: "0",
                  right: "0",
                  borderRadius: "20% 20% 2rem 2rem",
                  overflow: "Hidden",
                }}
                component="img"
                image="/img/노현서t.png"
                alt="therapist9"
              />
              <Card.Body>
                <Card.Title>노현서 연구원</Card.Title>
                <Card.Text>언어재활사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>現 성원언어심리센터 위례</ListGroup.Item>
                      <ListGroup.Item>
                        아이플러스 서울언어치료센터 언어재활사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>한국재활사협회 정회원</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        단국대학교 특수교육대학원 언어치료학과
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>
        {/* </Card> */}
      </Container>
    </>
  );
}

export default KitchenSinkExample;
