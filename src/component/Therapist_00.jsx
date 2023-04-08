import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function KitchenSinkExample() {
  return (
    <>
      <Container>
        {/* 1, 2 */}

        <Stack
          direction="row"
          spacing={2}
          justifyContent={"center"}
          padding={"1rem 0rem"}
        >
          {/* <Chip label="언어치료사" component="a" href="step" clickable />
          <Chip
            label="언어치료사"
            component="a"
            href="step"
            clickable
            color="primary"
            variant="outlined"
          /> */}
          <Chip
            className="therapist_chip"
            label="언어재활사"
            component="a"
            href="#언어치료사"
            variant="outlined"
            clickable
          />

          <Chip
            label="놀이치료사"
            component="a"
            href="#놀이치료사"
            variant="outlined"
            clickable
          />
          <Chip
            label="인지치료사"
            component="a"
            href="#인사말"
            variant="outlined"
            clickable
          />
        </Stack>

        <Row className="justify-content-center">
          <Col sm={6} lg={4}>
            <Card id="언어치료사" className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/이소영t.jpeg"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>이소영 원장</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  구개열, 말더듬, 조음음운장애, 신경언어장애
                </Card.Subtitle>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>부모교육지도사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>문해교육전문가 기초 과정</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>보완대체의사소통(ACC) 전문가 </h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어심리센터 원장(송파점&위례점)</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>서울삼성병원 재활의학과 언어치료실</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>서울아산병원 재활의학과 언어치료실</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 임상지도</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>윤미선 언어청각센터</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>대구대학교 언어치료학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 2 */}
          <Col sm={6} lg={4}>
            <Card className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/하선영t.jpg"
                alt="therapist2"
              />
              <Card.Body>
                <Card.Title>하선영 위례센터 부원장</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  영유아언어발달, 조음음운장애, 신경언어장애
                </Card.Subtitle>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>문해교육전문가 기초 과정</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어심리센터(송파&위례점)</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>서울삼성병원 재활의학과 언어치료실</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>서울아산병원 재활의학과 언어치료실</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>두리언어치료실 언어치료사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>이화여자대학교 특수교육학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>

        {/* 3, 4, 5 */}
        <Row>
          {/* 3 */}
          <Col sm={6} lg={4}>
            <Card className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/황서영t.jpeg"
                alt="therapist3"
              />
              <Card.Body>
                <Card.Title>황서영 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  조음(발음), 난독, 신경언어장애
                </Card.Subtitle>
              </Card.Body>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>논술지도사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>문해교육전문가 기초 과정</h6>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어임상연구소(송파점)</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>아이코리아 아동발달교육연구원 언어치료사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>이화여자대학교 신경언어연구실 연구원</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>경희대학교 국어국문학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 4 */}
          <Col sm={6} lg={4}>
            <Card className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/나니나t.jpeg"
                alt="therapist4"
              />
              <Card.Body>
                <Card.Title>나니나 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  영유아언어발달, 자폐스펙트럼장애
                </Card.Subtitle>
              </Card.Body>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어임상연구소(송파점) </h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>하나아동발달센터 언어치료사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한효섭언어청각센터 언어치료사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>이화언어병리실 언어치료사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 5 */}
          <Col sm={6} lg={4}>
            <Card className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/김윤희t.png"
                alt="therapist5"
              />
              <Card.Body>
                <Card.Title>김윤희 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  영유아언어발달, 난독증, 조음(발음)
                </Card.Subtitle>
              </Card.Body>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>문해교육전문가 기초 과정</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어심리센터(송파점&위례점)</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>이화여자대학교 아동언어연구실 연구원</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한양대학교 영어영문학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 6 */}
          <Col sm={6} lg={4}>
            <Card id="놀이치료사" className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/최정임t.jpeg"
                alt="therapist6"
              />
              <Card.Body>
                <Card.Title>최정임 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  자폐스펙트럼장애, 청능재활, 영유아언어발달, 조음(발음)
                </Card.Subtitle>
              </Card.Body>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어심리센터(위례점)</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>강북삼성병원 이비인후과 언어치료실</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>초록소리 언어치료사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>서울탑 정신과 언어치료사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>중앙대학교 심리학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 7 */}
          <Col sm={6} lg={4}>
            <Card className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/오영란t.jpeg"
                alt="therapist7"
              />
              <Card.Body>
                <Card.Title>오영란 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  청능재활, 영유아언어발달, 조음(발음)
                </Card.Subtitle>
              </Card.Body>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>나사렛대학교 언어청각센터 임상실습 감독</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어심리센터 원장(송파점&위례점)</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>순천향대 부천병원 이비인후과 청각재활</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>성동장애인복지관 언어치료사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>윤미선청각언어연구실 언어치료사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>초록아동발달센터 언어치료사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>연세대학교 인문학부(심리,사회) 심리학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 8 */}
          <Col sm={6} lg={4}>
            <Card className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/강현자t.jpeg"
                alt="therapist8"
              />
              <Card.Body>
                <Card.Title>강현자 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  영유아언어발달, 조음(발음)
                </Card.Subtitle>
              </Card.Body>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>한국언어청각임상학회 정회원</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어심리센터(위례점) </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>ㅇ</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 9 */}
          <Col sm={6} lg={4}>
            <Card className="m-3">
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/이은경t.jpeg"
                alt="therapist9"
              />
              <Card.Body>
                <Card.Title>이은경 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  영유아언어발달, 조음(발음)
                </Card.Subtitle>
              </Card.Body>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어심리센터(위례점)</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>대구언어치료실</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>대구대학교 재활과학대학원 언어치료학과 석사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>대구대학교 언어치료학과 학사</h6>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <h6>경북대학교 심리학과 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default KitchenSinkExample;
