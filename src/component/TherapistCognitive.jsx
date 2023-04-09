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
        {/* <Card className="p-4"> */}
        {/* 1, 2 */}
        <Card.Title id="인지치료사" className="p-1">
          인지치료사
        </Card.Title>
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
                image="/img/박현진t.jpg"
                alt="therapist1"
              />
              <Card.Body>
                <Card.Title>박현진 연구원</Card.Title>
                <Card.Text>인지학습상담전문가</Card.Text>
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
                        나우히어링 청각언어센터 인지학습치료사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        을지아동발달지원센터 인지학습치료사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        해솔마음클리닉 인지학습치료사
                      </ListGroup.Item>
                      <ListGroup.Item>
                        하랑아동발달연구소 인지행동치료사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>자격사항</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>직업재활사</ListGroup.Item>
                      <ListGroup.Item>사회복지사</ListGroup.Item>
                      <ListGroup.Item>유아레크레이션 전문지도사</ListGroup.Item>
                      <ListGroup.Item>
                        한국자폐협의회 인지행동치료사
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>학력</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        나사렛대학교 인간재활학 학사
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
