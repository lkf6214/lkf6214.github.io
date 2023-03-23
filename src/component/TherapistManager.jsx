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
          <Card.Title id="실장님" className="p-1">
            실장님
          </Card.Title>
          <Row className="justify-content-center">
            <Col sm={6} lg={4}>
              <Card className="m-3">
                <CardMedia
                  style={{
                    padding: "3rem 3rem 0rem 3rem",
                  }}
                  component="img"
                  image="/img/cd_006.png"
                  alt="therapist1"
                />
                <Card.Body>
                  <Card.Title>김현숙 실장</Card.Title>
                  <Card.Text>성원언어임상연구소</Card.Text>
                  <Card.Subtitle className="text-muted">송파점</Card.Subtitle>
                </Card.Body>

                <Accordion defaultActiveKey="0" flush>
                  {/* <Accordion.Item eventKey="0"></Accordion.Item> */}
                  <Accordion.Item>
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
                  image="/img/cd_007.png"
                  alt="therapist1"
                />
                <Card.Body>
                  <Card.Title>ㅇㅇ 실장</Card.Title>
                  <Card.Text>성원언어심리센터</Card.Text>
                  <Card.Subtitle className="text-muted">위례점</Card.Subtitle>
                </Card.Body>

                <Accordion defaultActiveKey="0" flush>
                  {/* <Accordion.Item eventKey="0"></Accordion.Item> */}
                  <Accordion.Item>
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
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default KitchenSinkExample;
