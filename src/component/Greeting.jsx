import { Container } from "@mui/system";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Greeting() {
  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">인사말</Card.Header>
          <Card.Body>
            <img
              className="p-2"
              alt="greetingImage"
              src="/img/032.png"
              width={"75%"}
            />
            <img alt="greetingImage" src="/img/greeting.jpeg" width={"90%"} />
            <Card.Text className="p-1">
              <Card.Title className="p-3"></Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
        {/*         <Card className="text-center">
          <Card.Header className="h2 p-3">인사말</Card.Header>
          <Card.Body className="p-5">
            <div
              style={{
                backgroundImage: "url(/img/032.png)",
                // position: "relative",
                // overflow: "hidden",
                display: "table",
                width: "100%",
                height: "200px",
                backgroundPosition: "50% 0%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                // textAlign: "center",
              }}
            ></div>
            <Card.Title>
              성원언어심리센터는 의사소통에 어려움을 겪고 있는 아동과 성인을
              대상으로 특성화된 언어 심리치료를 실시합니다.
            </Card.Title>
            <Card.Text>
              본 센터는 임상에서의 오랜 경험과 전문적인 소양을 갖춘 선생님들의
              학문적인 연구와 임상에서의 사례 연구와 정확하고 면밀한 진단을 통해
              최적의 언어 심리치료 서비스를 제공하고 있습니다.
              <br />
              성원언어심리센터는 진정 우리가 바라고 원하는 것들을 함께 고민하고
              공유하며 행복한 미래를 향한 작지만 소중한 한 걸음걸음을 함께
              내딛기를 소망합니다.
              <br />
              Seongwon speech and psychological treatment clinic since 2013
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card> */}

        {/* 이전 테두리 없이 텍스트와 이미지 */}
        {/* <h2 style={{ padding: "1rem 0" }}>인사말</h2>
        <div
          style={{
            backgroundImage: "url(/img/032.png)",
            // position: "relative",
            // overflow: "hidden",
            display: "table",
            width: "100%",
            height: "500px",
            backgroundPosition: "50% 0%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            // textAlign: "center",
          }}
        ></div> */}
      </Container>
    </>
  );
}
