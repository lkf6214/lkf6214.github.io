import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import "../css/VoucherListSongpa.css";

export default function SimplePaper() {
  return (
    <>
      <div style={{ padding: "1rem 0rem" }}>
        <h4>
          성원언어상담연구소는 바우처 카드 이용 가능한 전문 언어치료 / 심리치료
          기관🌻
        </h4>
        <h4 className="p-3">☎ 바우처 및 서비스 문의는 전화 상담</h4>

        <a href="tel:02-412-0505">
          <Col
            // lg={10}
            style={{
              margin: "auto",
              left: "0",
              right: "0",
              padding: "1rem",
              paddingTop: "1.5rem",

              backgroundColor: "#fcf9e5",
              borderRadius: "1rem",
            }}
          >
            <h5 className="p-1">📞 성원언어상담연구소 (송파점) 02-412-0505</h5>
          </Col>
        </a>
      </div>

      <div style={{ padding: "1rem 0rem" }}>
        <h4 className="pt-1" style={{ paddingTop: "2rem" }}>
          🔽 성원 송파점 바우처
        </h4>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            "& > :not(style)": {
              m: 1,
              p: 1.5,
              pb: 0.5,
              textAlign: "center",
              width: "auto",
            },
          }}
        >
          <Paper
            elevation={3}
            label="Clickable Link"
            component="a"
            href="#발달재활서비스"
            clickable
          >
            <h6>발달재활 서비스</h6>
          </Paper>
          <Paper
            elevation={3}
            label="Clickable Link"
            component="a"
            href="#굳센카드"
            clickable
          >
            <h6>굳센 카드</h6>
          </Paper>
        </Box>
      </div>
      <Container>
        <h4 calssName="p-3" style={{ paddingTop: "2rem" }}>
          🔽 바우처 자세히 보기
        </h4>

        {/* 1 */}
        <Row className="justify-content-center">
          <Col xs={11} md={5} lg={4} className="pt-3">
            <Card id="발달재활서비스">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  {/* tetz2, 중앙 정렬 효과를 주기 위한 클래스 부여 */}
                  {/* 중앙 정렬 효과는 VoucherListSongpa.css 파일에서 패딩 값으로 주고 있음, 온갖 중앙 정렬 방법이 안먹히더군요 -_-;;; */}
                  <Accordion.Header className="first">
                    발달재활 서비스
                  </Accordion.Header>

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
                        비용 : 월 250,000원 중 본인 부담금은 등급에 따라 다름
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* 2 */}
          <Col xs={11} md={5} lg={4} className="pt-3">
            <Card id="굳센카드">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  {/* tetz2, 중앙 정렬 효과를 주기 위한 클래스 부여 */}
                  {/* 중앙 정렬 효과는 VoucherListSongpa.css 파일에서 패딩 값으로 주고 있음, 온갖 중앙 정렬 방법이 안먹히더군요 -_-;;; */}
                  <Accordion.Header className="second">
                    굳센 카드
                  </Accordion.Header>

                  <Accordion.Body>
                    <ListGroup
                      className="list-group-flush"
                      style={{ textAlign: "left" }}
                    >
                      <ListGroup.Item>
                        목적: 특수교육 대상자의 방과 후 및 치료 지원을 위만
                        서비스
                      </ListGroup.Item>

                      <ListGroup.Item>
                        대상 : 특수 교육 대실 자로 지정된 학생 (학교에서 지점
                        또는 발급) 진단서 외 검사 자료로 대체 가능) 전국 가구원
                        월평균 소득 150% 이하
                      </ListGroup.Item>
                      <ListGroup.Item>
                        서비스 : 지정된 횟수, 각 50 분 (상담 포함)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        비용 : 치료비 지원 월 160,000원 외 본인 부담금 발생
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>

        <h4 className="pt-5" style={{ paddingTop: "2rem" }}>
          ✅ 성원 송파점 서비스
        </h4>

        <Row className="justify-content-center">
          <Col xs={11} md={5} lg={4} className="pt-3">
            <Card>
              <Card.Img
                variant="top"
                src="/img/mou_logo_3.gif"
                className="p-4 pt-5"
              />

              <Card.Body>
                <Card.Title>서울특별시 교육청 </Card.Title>
                <Card.Text class="text-muted">난독 전문 지원 기관</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={11} md={5} lg={4} className="pt-3">
            <Card>
              <Card.Img
                variant="top"
                src="/img/mou_logo_5.png"
                className="p-4 pt-5"
              />

              <Card.Body>
                <Card.Title>서울특별시 강동 송파 교육지원청</Card.Title>
                <Card.Text class="text-muted">난독 전문 지원 기관</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={11} md={5} lg={4} className="pt-3">
            <Card>
              <Card.Img
                variant="top"
                src="/img/mou_logo_5.png"
                className="p-4 pt-5"
              />

              <Card.Body>
                <Card.Title>서울특별시 강동 송파 교육지원청</Card.Title>
                <Card.Text class="text-muted">
                  [ 온맘 ] 부모학습 코칭 프로그램 치유 기관
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={11} md={5} lg={4} className="pt-3">
            <Card>
              <Card.Img
                variant="top"
                src="/img/mou_logo_9.png"
                className="p-4 pt-5"
              />

              <Card.Body>
                <Card.Title>서울시장애인의사소통권리증진센터</Card.Title>
                <Card.Text class="text-muted">협력업체</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={11} md={5} lg={4} className="pt-3">
            <Card>
              <Card.Img
                variant="top"
                src="/img/mou_logo_8.png"
                className="p-4 pt-5"
              />

              <Card.Body>
                <Card.Title>서울대학교병원 행동발달증진센터</Card.Title>
                <Card.Text class="text-muted">지역언어협력센터 지정</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
