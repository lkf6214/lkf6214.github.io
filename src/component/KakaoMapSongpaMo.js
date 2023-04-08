import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function KaKaoMapTest(props) {
  return (
    <Container>
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
                📞 성원언어심리센터 ({props.data.name}점) <br />{" "}
                {props.data.tel}
              </h5>
            </Card>
          </a>
        </Col>
      </Row>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: props.data.kakaoMap[0],
          lng: props.data.kakaoMap[1],
        }}
        style={{
          // 지도의 크기
          width: "70vw",
          height: "70vw",
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          position={{
            // 인포윈도우가 표시될 위치입니다
            lat: props.data.kakaoMap[0],
            lng: props.data.kakaoMap[1],
          }}
        >
          {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
          {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
          <div style={{ padding: "5px", color: "#000" }}>
            {props.data.name} <br />
          </div>
        </MapMarker>
      </Map>
    </Container>
  );
}
