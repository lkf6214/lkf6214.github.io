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
          height: "16rem",
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

            <Container>
              <Row className="justify-content-md-center">
                <Col xs={6} md={5}>
                  <a href="tel:02-412-0505">
                    <Card
                      style={{
                        height: "80%",
                        padding: "2rem 0.5rem 3rem 0.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <h5 calssName="p-3">
                        📞 성원언어상담연구소 (송파점) <br />
                        02-412-0505
                      </h5>
                    </Card>
                  </a>
                </Col>
                <Col xs={6} md={5}>
                  <a href="tel:031-757-0504">
                    <Card
                      style={{
                        height: "80%",
                        padding: "2rem 1rem 3rem 1rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <h5>
                        📞 성원언어심리센터 (위례점) <br /> 031-757-0504
                      </h5>
                    </Card>
                  </a>
                </Col>
              </Row>
            </Container>
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
