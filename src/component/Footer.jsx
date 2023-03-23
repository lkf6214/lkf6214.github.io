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
        {/* <div style={{ fontSize: "1rem" }}>
          성원언어임상연구소 | 대표 : 이소영 | 전화 : 02-412-0505 | <br />
          평일 오전 10:00~오후 7:00, 토요일 오전 9:00~오후 2:00, 일/공휴일 휴무,
          점심시간 : 오후 12시~오후 1시 <br /> 서울 송파구 올림픽로35길 10
          파크리오B상가 505-2호 <br />
          Copyright 성원언어임상연구소 all rights reserved.
        </div>
        <div style={{ fontSize: "1rem" }}>
          성원언어심리센터 | 대표 : 이소영 | 전화 : 031-757-0504 | <br />
          평일 오전 10:00~오후 7:00, 토요일 오전 9:00~오후 2:00, 일/공휴일 휴무,
          점심시간 : 오후 12시~오후 1시 <br /> 경기도 성남시 수정구 위례광장로
          320(창곡동 509-3)608호 <br /> Copyright 성원언어심리센터 all rights
          reserved.
        </div>
         */}
        <div style={{ fontSize: "0.8rem" }}>
          성원언어임상연구소 | 대표 : 이소영 | 전화 : 02-412-0505 | 평일 오전
          10:00~오후 7:00, 토요일 오전 9:00~오후 2:00, 일/공휴일 휴무, 점심시간
          : 오후 12시~오후 1시 <br /> 서울 송파구 올림픽로35길 10 파크리오B상가
          505-2호 | Copyright 성원언어임상연구소 all rights reserved.
        </div>

        <div style={{ fontSize: "0.8rem" }}>
          성원언어심리센터 | 대표 : 이소영 | 전화 : 031-757-0504 | 평일 오전
          10:00~오후 7:00, 토요일 오전 9:00~오후 2:00, 일/공휴일 휴무, 점심시간
          : 오후 12시~오후 1시 <br /> 경기도 성남시 수정구 위례광장로 320(창곡동
          509-3)608호 | Copyright 성원언어심리센터 all rights reserved.
        </div>
        {/* 
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>71 Amsteroum Avenue Cronish Night, NY 35098</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>
              Reception : +205 123 4567 <br />
              Office : +207 235 7890
            </p>
          </Col>
        </Row> */}
        {/* <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="https://www.wrappixel.com">
                    <a className="link">wrappixel.com</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
      </Container>
    </div>
  );
};
export default Footer;
