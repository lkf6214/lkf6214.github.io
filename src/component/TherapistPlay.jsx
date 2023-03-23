import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMedia from "@mui/material/CardMedia";

function KitchenSinkExample() {
  return (
    <>
      <Container>
        {/* 1, 2 */}
        <Card className="p-4">
          <Card.Title id="놀이치료사" className="p-1">
            놀이치료사
          </Card.Title>
          <Row className="justify-content-center">
            <Col sm={6} lg={4}>
              <Card className="m-3">
                <CardMedia
                  style={{
                    padding: "3rem 3rem 0rem 3rem",
                  }}
                  component="img"
                  image="/img/석미선t.png"
                  alt="therapist1"
                />
                <Card.Body>
                  <Card.Title>석미선 연구원</Card.Title>
                  <Card.Text>놀이심리 상담사</Card.Text>
                  <Card.Subtitle className="text-muted">
                    청소년상담/부부상담
                  </Card.Subtitle>
                </Card.Body>

                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>자격사항</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h6>청소년상담사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>가족상담사 1급</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>부모교육강사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>유치원 정교사 1급</h6>
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
                          <h6>現 성원언어심리센터 (송파점&위례점)</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>건강가정지원센터 전문상담사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>생각과 마음 코칭 상담센터 놀이치료사</h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>학력</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h6>백석대학교 가족상담학 석사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>중앙대학교 유아교육학 학사</h6>
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
                  image="/img/황미아t.png"
                  alt="therapist2"
                />
                <Card.Body>
                  <Card.Title>황미아 연구원</Card.Title>
                  <Card.Text>1급 놀이심리상담사</Card.Text>
                  <Card.Subtitle className="text-muted">
                    청소년 상담, 부부상담
                  </Card.Subtitle>
                </Card.Body>

                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>자격사항</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h6>임상심리사 2급</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>부모교육지도사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>청소년상담사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>가족심리상담사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>진료교육전문가</h6>
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
                          <h6>마중물언어심리센터 놀이치료사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>아이플러스언어심리센터 놀이치료사</h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>학력</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h6>이화여자대학교 목회상담학 석사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>전북대학교 심리학과 학사</h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </Col>

            {/* 3 */}
            <Col sm={6} lg={4}>
              <Card className="m-3">
                <CardMedia
                  style={{
                    padding: "3rem 3rem 0rem 3rem",
                  }}
                  component="img"
                  image="/img/진시연t.jpeg"
                  alt="therapist3"
                />
                <Card.Body>
                  <Card.Title>진시연 연구원</Card.Title>
                  <Card.Text>임상심리사 1급</Card.Text>
                  <Card.Subtitle className="text-muted">
                    조음(발음), 난독, 신경언어장애
                  </Card.Subtitle>
                </Card.Body>

                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>자격사항</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>
                        <h6>임상심리사 1급</h6>
                      </ListGroup.Item> */}
                        <ListGroup.Item>
                          <h6>인지학습상담전문가 2급</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>임상미술치료사 1급</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>미술심리치료사 1급</h6>
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
                          <h6>
                            現 안산 석산정신건강의학과/ 서울 이화심리상담센터
                            임상심리사
                          </h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>
                            일산해암병원/서울강서필병원/한국산업보건환경연구소
                            부설 엔젤병원 종합검사
                          </h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>송도 라온정신건강의학과 상담, 인지치료사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>
                            안산 소아정신과 새론마음 클리닉 미술/인지치료사
                          </h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>학력</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h6>한국상담대학원 교 상담학과 석사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>서강대학교 경영대학원 수료</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>서강대학교 심리학과</h6>
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
                  image="/img/오향경t.jpeg"
                  alt="therapist4"
                />
                <Card.Body>
                  <Card.Title>오향경 연구원</Card.Title>
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
                  image="/img/허연정t.png"
                  alt="therapist5"
                />
                <Card.Body>
                  <Card.Title>허연정 연구원</Card.Title>
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
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default KitchenSinkExample;
