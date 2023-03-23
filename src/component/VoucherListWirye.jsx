import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";

export default function SimplePaper() {
  return (
    <>
      <div style={{ padding: "1rem 0rem" }}>
        <h4 calssName="p-3">
          성원언어심리센터는 바우처 카드 이용 가능한 전문 언어치료 / 심리치료
          기관입니다🌻
        </h4>
        <h4 calssName="p-3">☎ 바우처 문의는 전화 주세요</h4>

        <div
          style={{
            margin: "auto",
            left: "0",
            right: "0",
            padding: "1rem",
            paddingTop: "1.5rem",
            width: "auto",
            backgroundColor: "#fcf9e5",
            borderRadius: "1rem",
          }}
        >
          <h5 calssName="p-3">
            <a href="tel:031-757-0504">
              📞 성원언어심리센터 (위례점) 031-757-0504
            </a>
          </h5>
        </div>
      </div>

      <div style={{ padding: "1rem 0rem" }}>
        <h4 calssName="pt-1" style={{ paddingTop: "2rem" }}>
          🔽 성원 위례점 바우처 목록
        </h4>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            "& > :not(style)": {
              m: 1,
              p: 1.5,
              pb: 0.5,
              textAlign: "center",
              width: "auto",
              // height: "auto",
            },
          }}
        >
          <Paper elevation={3}>
            <h6>발달재활 서비스</h6>
          </Paper>
          <Paper elevation={3}>
            <h6>난독현상 치유 서비스</h6>
          </Paper>
          <Paper elevation={3}>
            <h6>굳센 카드</h6>
          </Paper>
          <Paper elevation={3}>
            <h6>우리아이 심리지원 서비스</h6>
          </Paper>
          <Paper elevation={3}>
            <h6>통합가족 상담 서비스</h6>
          </Paper>
          <Paper elevation={3}>
            <h6>꿈이든 카드</h6>
          </Paper>
          <Paper elevation={3}>
            <h6>읽기곤란(난독증)</h6>
          </Paper>
          <Paper elevation={3}>
            <h6>온맘</h6>
          </Paper>
        </Box>
      </div>
    </>
  );
}
