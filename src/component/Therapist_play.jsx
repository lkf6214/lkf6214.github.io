import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardMedia from "@mui/material/CardMedia";

function KitchenSinkExample() {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "Wrap",
            justifyContent: "center",
            // padding: "1rem",
            // margin: "1rem",
          }}
        >
          {/* 1 */}
          <Row xs={1} md={2}>
            <Card style={{ width: "23rem", margin: "1rem 3rem" }}>
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
          </Row>

          {/* 2 하선영t */}
          <Row xs={1} md={2}>
            <Card style={{ width: "23rem", margin: "1rem 3rem" }}>
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/하선영t.jpg"
                alt="therapist1"
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
          </Row>

          {/* 3 황서영t */}
          <Row xs={1} md={2}>
            <Card style={{ width: "23rem", margin: "1rem 3rem" }}>
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/황서영t.jpeg"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>황서영 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  조음음운장애, 난독증, 신경언어장애
                </Card.Subtitle>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>논술지도사</h6>
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
                <Accordion.Item eventKey="2">
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
                <Accordion.Item eventKey="3">
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
          </Row>

          {/* 4 나니나t */}
          <Row xs={1} md={2}>
            <Card style={{ width: "23rem", margin: "1rem 3rem" }}>
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/나니나t.jpeg"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>나니나 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  자폐스펙트럼장애, 영유아언어발달
                </Card.Subtitle>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
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
                <Accordion.Item eventKey="2">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>現 성원언어임상연구소(송파점)</h6>
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
                <Accordion.Item eventKey="3">
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
          </Row>

          {/* 3 */}
          <Row xs={1} md={2}>
            <Card
              style={{
                width: "23rem",
                margin: "1rem 3rem",
              }}
            >
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/황서영t.jpeg"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>황서영 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>부모교육지도사</h6>
                        <h6>보완대체의사소통(ACC) 전문가 </h6>
                        <h6>한국언어청각임상학회 정회원</h6>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>서울삼성병원 재활의학과</h6>

                        <h6>서울아산병원 재활의학과</h6>

                        <h6>이화여자대학교 대학원 임상지도</h6>

                        <h6>윤미선 언어청각센터</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>

                        <h6>대구대학교 언어치료학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Row>

          {/* 4 */}
          <Row xs={1} md={2}>
            <Card
              style={{
                width: "23rem",
                margin: "1rem 3rem",
              }}
            >
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/나니나t.jpeg"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>나니나 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>부모교육지도사</h6>
                        <h6>보완대체의사소통(ACC) 전문가 </h6>
                        <h6>한국언어청각임상학회 정회원</h6>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>서울삼성병원 재활의학과</h6>

                        <h6>서울아산병원 재활의학과</h6>

                        <h6>이화여자대학교 대학원 임상지도</h6>

                        <h6>윤미선 언어청각센터</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>

                        <h6>대구대학교 언어치료학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Row>

          {/* 5 김윤희t */}
          <Row xs={1} md={2}>
            <Card
              style={{
                width: "23rem",
                margin: "1rem 3rem",
              }}
            >
              <CardMedia
                style={{
                  padding: "3rem 3rem 0rem 3rem",
                }}
                component="img"
                image="/img/김윤희t.png"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>김윤희 연구원</Card.Title>
                <Card.Text>1급 언어치료사</Card.Text>
                <Card.Subtitle className="text-muted">
                  영유아언어발달, 난독증, 조음음운장애
                </Card.Subtitle>
              </Card.Body>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>부모교육지도사</h6>
                        <h6>보완대체의사소통(ACC) 전문가 </h6>
                        <h6>한국언어청각임상학회 정회원</h6>
                        <h6>한국재활사협회 정회원 </h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>경력사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>서울삼성병원 재활의학과</h6>

                        <h6>서울아산병원 재활의학과</h6>

                        <h6>이화여자대학교 대학원 임상지도</h6>

                        <h6>윤미선 언어청각센터</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>이화여자대학교 대학원 언어병리학 석사</h6>

                        <h6>대구대학교 언어치료학 학사</h6>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default KitchenSinkExample;
