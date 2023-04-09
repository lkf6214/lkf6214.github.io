// import React, { useEffect } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

// const { kakao } = window;

// const MapContainer = () => {
//   useEffect(() => {
//     const container = document.getElementById("myMap");
//     const options = {
//       center: new kakao.maps.LatLng(37.52030729018396, 127.11325598818053),
//       level: 3,
//     };
//     const map = new kakao.maps.Map(container, options);
//     const markerPosition = new kakao.maps.LatLng(
//       37.52030729018396,
//       127.11325598818053
//     );
//     const marker = new kakao.maps.Marker({
//       position: markerPosition,
//     });
//     marker.setMap(map);
//   }, []);

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12} md={6}>
//           <a href="tel:02-412-0505">
//             <Card
//               style={{
//                 margin: "auto",
//                 marginTop: " 1rem",
//                 marginBottom: " 1rem",
//                 left: "0",
//                 right: "0",
//                 padding: "1rem",
//                 paddingTop: "1.5rem",
//                 width: "auto",

//                 borderRadius: "1rem",
//               }}
//             >
//               <h5 className="p-1">
//                 📞 성원언어임상연구소 (송파점) <br />
//                 02-412-0505
//               </h5>
//             </Card>
//           </a>
//         </Col>
//       </Row>
//       <div
//         id="myMap"
//         style={{
//           width: "100vh",
//           height: "70vh",
//         }}
//       ></div>
//     </Container>
//   );
// };

// export default MapContainer;

import React from "react";
import "../css/KakaoMap.css";

export default function KakaoMapSongpa() {
  return (
    <>
      <div className="kakaomap">
        <div
          id="daumRoughmapContainer1679309500574"
          class="root_daum_roughmap root_daum_roughmap_landing"
        ></div>
        <div> 지도</div>
      </div>
    </>
  );
}
