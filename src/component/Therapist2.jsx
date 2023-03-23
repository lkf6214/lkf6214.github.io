import * as React from "react";
// import Card from "@mui/material/Card";
import Card from "react-bootstrap/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, margin } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import "../App.css";

export default function ActionAreaCard() {
  return (
    <>
      <Container>
        {/* <h1> 치료사 소개</h1> */}
        <Card border="light" className="text-center">
          <Card.Header className="h2">연구원 소개</Card.Header>
          <Card.Body>
            {/* <Card.Title className="p-3">
              성원언어심리센터는 의사소통에 어려움을 겪고 있는 아동과 성인을
            </Card.Title> */}

            {/* 1 */}
            {/* 사진 내용 세로로 */}
            <div style={{ padding: "1rem", margin: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Card
                  className="therapist_img"
                  sx={{ maxWidth: 345, width: "100%" }}
                ></Card>

                <Card
                  sx={{
                    maxWidth: 345,
                    width: "100%",
                  }}
                >
                  <CardContent
                    style={{
                      verticalAlign: "middle",
                      display: "flex",
                      flexDirection: "column",
                      // justifyContent: "center",
                    }}
                  >
                    <Typography
                      textAlign={"center"}
                      style={{ paddingBottom: "1rem" }}
                    >
                      <CardMedia
                        style={{
                          paddingTop: "2rem",
                          paddingRight: "2rem",
                          paddingLeft: "2rem",
                        }}
                        component="img"
                        image="/img/이소영t.jpeg"
                        alt="therapist1"
                      />
                      <div className="titletext">이소영 원장</div>
                      <div className="titlepoint">1급 언어치료사</div>
                      <div className="titlepoint2">
                        말더듬, 조음(발음), 신경언어장애
                      </div>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      <div className="subtitle">| 자격사항 |</div>
                      {/* <li>1급 언어치료사</li> */}
                      <li>부모교육지도사</li>
                      <li>보완대체의사소통(ACC) 전문가 </li>
                      <li>한국언어청각임상학회 정회원</li>
                      <li>한국재활사협회 정회원 </li>
                      <div className="subtitle">| 경력사항 |</div>
                      <li>서울삼성병원 재활의학과 </li>
                      <li>서울아산병원 재활의학과</li>
                      <li>이화여자대학교 대학원 임상지도</li>
                      <li>윤미선 언어청각센터 </li>
                      <div className="subtitle">| 학력 |</div>
                      <li>이화여자대학교 대학원 언어병리학 석사</li>
                      <li>대구대학교 언어치료학 학사</li>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
