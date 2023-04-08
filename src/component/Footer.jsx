/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
// import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="footer4 b-t spacer"
      style={{
        padding: "1rem",
        backgroundColor: "#f2f2f2",
        color: "#919191",
        fontWeight: "300",
      }}
    >
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <div
              style={{
                fontSize: "0.8rem",
                border: "1px solid #c8c8c8",
                borderRadius: "1rem",
                padding: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              성원언어임상연구소 | 대표 : 이소영 | 전화 : 02-412-0505 |
              <br />
              평일 오전 10:00~오후 7:00, 토요일 오전 9:00~오후 2:00, 일/공휴일
              휴무 | <br /> 상담 문의 : 평일 오후 12:00 ~ 오후 6:00 | <br />
              서울 송파구 올림픽로35길 10 파크리오B상가 505-2호 |
              <br /> Copyright 2023. 성원언어임상연구소 all rights reserved.
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div
              style={{
                fontSize: "0.8rem",
                border: "1px solid #c8c8c8",
                borderRadius: "1rem",
                padding: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              성원언어심리센터 | 대표 : 이소영 | 전화 : 031-757-0504 |
              <br />
              평일 오전 10:00~오후 7:00, 주일/공휴일 휴무 | <br /> 상담 문의 :
              평일 오후 12:00 ~ 오후 6:00 |
              <br /> 경기도 성남시 수정구 위례광장로 320 아이에스센트럴타워
              608호 |
              <br />
              Copyright 2023. 성원언어심리센터 all rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
