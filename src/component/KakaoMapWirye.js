import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const { kakao } = window;

const MapContainer = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    const container = document.getElementById("myMap-sonpa");
    const options = {
      center: new kakao.maps.LatLng(37.472584894923585, 127.14290432171676),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const markerPosition = new kakao.maps.LatLng(
      37.472584894923585,
      127.14290432171676
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    // tetz2,
    // 마커 위에 뜨는 정보는 아래에 있는 문자열 HTML 을 수정하시면 됩니다!
    // 다만 카카오 맵에서 일정 크기 이상으로는 못 만드는 것으로 보이니, 적당히 수정 하시면 될 것 같아요!!
    // 길찾기의 경우는 주소에서 to/ 뒤 부분에 원하는 글 쓰시고, 위도 경도 정보 넘기시면 됩니다!
    let iwContent =
      '<div style="padding:0.1rem; margin:0.8rem 2rem;" >성원언어심리센터<br><a href="https://map.kakao.com/link/to/성원언어심리센터(위례점),37.472584894923585,127.14290432171676" style="color:blue" target="_blank">길찾기</a></div>';

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
    <>
      <Container fluid={true} className="p-0">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h5 className="pb-3">
              주소 : 경기도 성남시 수정구 위례광장로 320 아이에스센트럴타워
              608호
            </h5>
            <h5 className="pb-3">주차 등록: 1시간 30분 무료 </h5>
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
                  📞 성원언어심리센터 (위례점) <br /> 031-757-0504
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
              width: "100%",
              maxWidth: "100%",
              height: mobile ? "70vw" : "40vw",
            }}
          ></div>
        </Row>
      </Container>
    </>
  );
};

export default MapContainer;
