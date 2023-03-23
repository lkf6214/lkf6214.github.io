import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BasicExample() {
  return (
    <>
      <h4 calssName="p-3" style={{ paddingTop: "2rem" }}>
        🔽 자세히 보기
      </h4>

      <Container>
        {/* 1 */}
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={4}>
            <Card id="발달재활서비스" className="m-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>발달재활 서비스</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush ">
                      <ListGroup.Item>
                        목적: 장애아동의 인지, 의사 소통, 운동, 적응 행동의 기능
                        향상과 행동 발달
                      </ListGroup.Item>

                      <ListGroup.Item>
                        대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사
                        진단서 외 검사 자료로 대체 가능) 전국 가구원 월평균 소득
                        150% 이하
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서비스 : 월 4회, 각 50분 (상담 포함)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        비용 : 월 220,000원 (등급에 따라 본인 부담금 상이)
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 2 */}
          <Col sm={12} md={6} lg={4}>
            <Card id="난독현상치유서비스" className="m-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>난독현상 치유 서비스</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush ">
                      <ListGroup.Item>
                        <li>
                          목적 : 난독 고위험군 학생에게 읽기 쓰기 증진 서비스
                        </li>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        대상 : 초등 2학년~고등 1학년 난독 고위험군 학생
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b> 서비스</b> : 1회기 당 50분수업 (학생 치유 40분 +
                        부모상담 10분)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <i> 비용 : </i>월 220,000원{" "}
                        <mark> (등급에 따라 본인 부담금 상이)</mark>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
          {/* 3 */}
          <Col sm={12} md={6} lg={4}>
            <Card className="m-3">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>발달재활 서비스</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="list-group-flush ">
                      <ListGroup.Item>
                        목적: 장애아동의 인지, 의사 소통, 운동, 적응 행동의 기능
                        향상과 행동 발달
                      </ListGroup.Item>

                      <ListGroup.Item>
                        대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사
                        진단서 외 검사 자료로 대체 가능) 전국 가구원 월평균 소득
                        150% 이하
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서비스 : 월 4회, 각 50분 (상담 포함)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        비용 : 월 220,000원 (등급에 따라 본인 부담금 상이)
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 4 */}
          <Col sm={12} md={6} lg={4}>
            <Card className="m-3">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>발달재활 서비스</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup
                      className="list-group-flush"
                      style={{ textAlign: "left" }}
                    >
                      <ListGroup.Item>
                        목적: 장애아동의 인지, 의사 소통, 운동, 적응 행동의 기능
                        향상과 행동 발달
                      </ListGroup.Item>

                      <ListGroup.Item>
                        대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사
                        진단서 외 검사 자료로 대체 가능) 전국 가구원 월평균 소득
                        150% 이하
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서비스 : 월 4회, 각 50분 (상담 포함)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        비용 : 월 220,000원 (등급에 따라 본인 부담금 상이)
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

export default BasicExample;
