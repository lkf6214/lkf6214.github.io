import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";
import Step from "./Step";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Information() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/img/029.jpg)",
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
              className="p-2"
              alt="informationimage"
              src="/img/information_007.png"
              width={"100%"}
            />

            <Container>
              <Row className="justify-content-md-center">
                <Col xs={6} md={4}>
                  <a href="tel:02-412-0505">
                    <Card
                      style={{
                        margin: "auto",
                        marginTop: " 1rem",
                        marginBottom: " 1rem",
                        left: "0",
                        right: "0",
                        padding: "1rem",
                        paddingTop: "1.5rem",
                        width: "auto",
                        // backgroundColor: "#ece5fc",
                        borderRadius: "1rem",
                      }}
                    >
                      <h5 calssName="p-3">
                        📞 성원언어임상연구소 (송파점) <br />
                        02-412-0505
                      </h5>
                    </Card>
                  </a>
                </Col>
                <Col xs={6} md={4}>
                  <a href="tel:031-757-0504">
                    <Card
                      style={{
                        margin: "auto",
                        marginTop: " 1rem",
                        marginBottom: " 1rem",
                        left: "0",
                        right: "0",
                        padding: "1rem",
                        paddingTop: "1.5rem",
                        width: "auto",
                        // backgroundColor: "#fcf9e5",
                        borderRadius: "1rem",
                      }}
                    >
                      <h5 calssName="p-3">
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
              <Step />
              {/* <img
                className="p-2"
                alt="informationimage"
                src="/img/process_005.png"
                width={"100%"}
              /> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
