import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
function BasicExample() {
  return (
    <>
      <div style={{ padding: "1rem 0rem" }}>
        <h4 calssName="p-3" style={{ paddingTop: "2rem" }}>
          🔽 자세히 보기
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* 1 */}
          <Card style={{ width: "18rem", margin: "1rem" }}>
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
                      대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사 진단서
                      외 검사 자료로 대체 가능) 전국 가구원 월평균 소득 150%
                      이하
                    </ListGroup.Item>
                    <ListGroup.Item>
                      서비스 : 월 4회, 각 50분 (상담 포함)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      비용 : 월 220,000원 중 본인 부담금은 등급에 따라 다름
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>

          {/* 2 */}
          <Card style={{ width: "18rem", margin: "1rem" }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>발달재활 서비스</Accordion.Header>
                <Accordion.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      목적: 장애아동의 인지, 의사 소통, 운동, 적응 행동의 기능
                      향상과 행동 발달
                    </ListGroup.Item>

                    <ListGroup.Item>
                      대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사 진단서
                      외 검사 자료로 대체 가능) 전국 가구원 월평균 소득 150%
                      이하
                    </ListGroup.Item>
                    <ListGroup.Item>
                      서비스 : 월 4회, 각 50분 (상담 포함)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      비용 : 월 220,000원 중 본인 부담금은 등급에 따라 다름
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>

          {/* 3 */}
          <Card style={{ width: "18rem", margin: "1rem" }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>발달재활 서비스</Accordion.Header>
                <Accordion.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      목적: 장애아동의 인지, 의사 소통, 운동, 적응 행동의 기능
                      향상과 행동 발달
                    </ListGroup.Item>

                    <ListGroup.Item>
                      대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사 진단서
                      외 검사 자료로 대체 가능) 전국 가구원 월평균 소득 150%
                      이하
                    </ListGroup.Item>
                    <ListGroup.Item>
                      서비스 : 월 4회, 각 50분 (상담 포함)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      비용 : 월 220,000원 중 본인 부담금은 등급에 따라 다름
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
