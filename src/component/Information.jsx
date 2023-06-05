import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";
// import Step from "./Step";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Information() {
  return (
    <>
      <div
        style={{
          // backgroundImage: "url(/img/029.jpg)",
          background:
            "linear-gradient( 45deg,  #fffffd,   rgb(229, 94, 39, 0.8), rgb(242, 195, 36, 0.8) )",

          position: "relative",
          display: "table",
          width: "100%",
          height: "10rem",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "1.5em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          예약 안내
        </div>
      </div>

      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2" style={{ margin: "2rem 0rem 0rem 0rem" }}>
            예약 안내
          </Card.Header>
          <Card.Body>
            <img
              className="p-1 pb-4"
              alt="information_img"
              src="./img/logo1.png"
              width={"100%"}
            />

            {/* <Container> */}
            <Row className="justify-content-md-center">
              <Col xs={6} lg={4}>
                <a href="tel:02-412-0505">
                  <Card
                    style={{
                      height: "100%",
                      borderRadius: "1rem",
                      padding: "1rem 0rem",
                    }}
                  >
                    <div
                      className="p-2"
                      style={{
                        margin: "auto",
                        left: "0",
                        right: "0",
                      }}
                    >
                      <h4>📞</h4>
                      <h5>성원언어상담연구소 (송파점)</h5>
                      <h5>02-412-0505</h5>
                    </div>
                  </Card>
                </a>
              </Col>
              <Col xs={6} lg={4}>
                <a href="tel:031-757-0504">
                  <Card
                    style={{
                      height: "100%",
                      borderRadius: "1rem",
                      padding: "1rem 0rem",
                    }}
                  >
                    <div
                      className="p-2"
                      style={{
                        margin: "auto",
                        left: "0",
                        right: "0",
                      }}
                    >
                      <h4>📞</h4>
                      <h5> 성원언어심리센터 (위례점)</h5>

                      <h5> 031-757-0504</h5>
                    </div>
                  </Card>
                </a>
              </Col>
            </Row>
            {/* </Container> */}
            <Card.Text className="p-1">
              <img
                className="p-3"
                alt="line"
                src="/img/line_002.png"
                width={"100%"}
              />
              {/* 치료과정 이미지 */}

              {/* <Step /> */}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="light" className="text-center">
          <Card.Header className="h2">치료 과정</Card.Header>
          <Card.Body>
            <img
              className="p-1"
              alt="information_step"
              src="/img/process_006.png"
              width={"100%"}
            />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
