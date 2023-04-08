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
        {/* <Card className="p-4"> */}
        <Card.Title id="놀이치료사" className="p-1">
          놀이치료사
        </Card.Title>
        <Row className="justify-content-center">
          {/* 1 석미선t */}
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
                image="/img/석미선t.jpg"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>석미선 연구원</Card.Title>
                <Card.Text>한국상담학회전문상담사</Card.Text>
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
                        건강가정지원센터 전문상담사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        생각과 마음 코칭 상담센터 놀이치료사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>놀이심리 상담사</ListGroup.Item>
                      <ListGroup.Item>청소년상담사</ListGroup.Item>
                      <ListGroup.Item>가족상담사 1급</ListGroup.Item>
                      <ListGroup.Item>부모교육 강사</ListGroup.Item>
                      <ListGroup.Item>유치원 정교사 1급</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        백석대학교 가족상담학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        중앙대학교 유아교육학 학사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 2 황미아t */}
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
                image="/img/황미아.png"
                alt="therapist2"
              />
              <Card.Body>
                <Card.Title>황미아 연구원</Card.Title>
                <Card.Text>놀이심리상담사 1급</Card.Text>
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
                        마중물언어심리센터 놀이치료사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        아이플러스언어심리센터 놀이치료사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>임상심리사 2급</ListGroup.Item>
                      <ListGroup.Item>부모교육지도사</ListGroup.Item>
                      <ListGroup.Item>RT발달중재사</ListGroup.Item>
                      <ListGroup.Item>청소년상담사</ListGroup.Item>
                      <ListGroup.Item>가족심리상담사</ListGroup.Item>
                      <ListGroup.Item>진료교육전문가</ListGroup.Item>
                      <ListGroup.Item>플로어타임상담지도사 2급</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        이화여자대학교 목회상담학 석사
                      </ListGroup.Item>
                      <ListGroup.Item>전북대학교 심리학과 학사</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 3 진시연*/}
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
                image="/img/진시연.png"
                alt="therapist3"
              />
              <Card.Body>
                <Card.Title>진시연 연구원</Card.Title>
                <Card.Text>임상심리사 1급</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        現 성원언어상담연구소 송파, <br />
                        성원언어심리센터 위례
                      </ListGroup.Item>
                      <ListGroup.Item>
                        現 안산 석산정신건강의학과 임상심리사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        現 서울 이화심리상담센터 임상심리사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        일산해암병원/서울강서필병원/한국산업보건환경연구소 부설
                        엔젤병원 종합검사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        송도 라온정신건강의학과 상담, 인지치료사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        안산 소아정신과 새론마음 클리닉 미술/인지치료사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>인지학습상담전문가 2급</ListGroup.Item>
                      <ListGroup.Item>임상미술치료사 1급</ListGroup.Item>
                      <ListGroup.Item>미술심리치료사 1급</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        한국상담대학교 상담학과 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서강대학교 경영대학원 수료
                      </ListGroup.Item>
                      <ListGroup.Item>서강대학교 심리학과</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 4 허연정t */}
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
                image="/img/허연정.png"
                alt="therapist5"
              />
              <Card.Body>
                <Card.Title>허연정 연구원</Card.Title>
                <Card.Text>임상심리사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item> 現 성원언어심리센터 위례</ListGroup.Item>
                      <ListGroup.Item>
                        성모누리정신건강의원 심리치료사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        성남시 육아종합지원센터 놀이치료사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        새날아동상담교육센터 놀이치료사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>장애아동통합치료사</ListGroup.Item>
                      <ListGroup.Item>아동가족상담사</ListGroup.Item>
                      <ListGroup.Item>한국놀이치료학회</ListGroup.Item>
                      <ListGroup.Item>한국임상모래놀이치료학회</ListGroup.Item>
                      <ListGroup.Item>한국상담심리학회</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        남서울대학교 아동복지과 아동상담심리치료 석사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        남서울대학교 아동복지학과 학사
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
