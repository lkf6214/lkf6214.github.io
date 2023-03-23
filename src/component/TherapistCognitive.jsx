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
        <Card className="p-4">
          {/* 1, 2 */}
          <Card.Title id="인지치료사" className="p-1">
            인지치료사
          </Card.Title>
          <Row className="justify-content-center">
            <Col sm={6} lg={4}>
              <Card className="m-3">
                <CardMedia
                  style={{
                    padding: "3rem 3rem 0rem 3rem",
                  }}
                  component="img"
                  image="/img/박현진t.jpg"
                  alt="therapist1"
                />
                <Card.Body>
                  <Card.Title>박현진 연구원</Card.Title>
                  <Card.Text>인지학습상담전문가</Card.Text>
                  <Card.Subtitle className="text-muted">ㅁㅁ</Card.Subtitle>
                </Card.Body>

                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>자격사항</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h6>사회복지사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>직업재활사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>한국자폐협의회 인지행동치료사</h6>
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
                          <h6>나우히어링 청각언어센터 인지학습치료사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>을지아동발달지원센터 인지학습치료사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>해솔마음클리닉 인지학습치료사</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h6>하랑아동발달연구소 인지행동치료사</h6>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>학력</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h6>을지대학교 </h6>
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
