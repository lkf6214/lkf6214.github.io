import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap-sonpa");
    const options = {
      center: new kakao.maps.LatLng(37.5202, 127.113174),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const markerPosition = new kakao.maps.LatLng(37.5202, 127.113174);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    // tetz2,
    // 마커 위에 뜨는 정보는 아래에 있는 문자열 HTML 을 수정하시면 됩니다!
    // 다만 카카오 맵에서 일정 크기 이상으로는 못 만드는 것으로 보이니, 적당히 수정 하시면 될 것 같아요!!
    // 길찾기의 경우는 주소에서 to/ 뒤 부분에 원하는 글 쓰시고, 위도 경도 정보 넘기시면 됩니다!

    let iwContent =
      '<div style="padding:1rem;">  성원언어임상연구소 <br><a href="https://map.kakao.com/link/to/성원언어심리센터(송파점),37.520200, 127.113174" style="color:blue" target="_blank">길찾기</a></div>';

    let iwPosition = new kakao.maps.LatLng(
      37.472584894923585,
      127.14290432171676
    );

    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    infowindow.open(map, marker);
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h5 className="pb-3">
            주소: 서울 송파구 올림픽로35길 10 파크리오B상가 505-2호
          </h5>
          <h5 className="pb-3">주차 등록: 1시간 무료 </h5>
          <h5
            className="pb-3"
            style={{
              color: "#e37114",
            }}
          >
            문의사항은 전화 주시기 바랍니다.
          </h5>
        </Col>

        <Col xs={12} md={6}>
          <a href="tel:031-757-0504">
            <Card
              style={{
                margin: "auto",

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
                📞 성원언어임상연구소 (송파점) <br /> 02-412-0505
              </h5>
            </Card>
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <div
          id="myMap-sonpa"
          style={{
            // tetz2, 간단한 반응형을 위해 max-width 값 부여!
            width: "70vw",
            maxWidth: "100vw",
            height: "40vw",
          }}
        ></div>
      </Row>
    </Container>
  );
};

export default MapContainer;
