import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../css/KakaoMap.css";

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.472584894923585, 127.14290432171676),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(
      37.472584894923585,
      127.14290432171676
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      {/* <Row>
        <Col
          xs={10}
          lg={9}
          id="myMap"
          style={{
            width: "100vh",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // margin-left: auto;
            // margin-right: auto;
            // border-style: solid;
            // border-width: medium;
            // border-color: #D8D8D8;
          }}
        ></Col>
      </Row> */}

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
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
              <h5 className="p-1">
                📞 성원언어심리센터 (위례점) <br /> 031-757-0504
              </h5>
            </Card>
          </a>
        </Col>
      </Row>

      <Container className="justify-content-center">
        <div className="kakaomap">
          <div
            className="root_daum_roughmap"
            // className="justify-content-center"
            id="myMap"
            style={{
              border: "5px solid red",
              maxWidth: "700px",
              width: "90vw",
              height: "30vw",
              // margin: "auto",
              // left: "0",
              // right: "0",
            }}
          ></div>
        </div>
      </Container>
    </>
  );
};

export default MapContainer;
