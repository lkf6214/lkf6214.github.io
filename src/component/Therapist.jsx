import * as React from "react";
// import Card from "@mui/material/Card";
import Card from "react-bootstrap/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import TherapistSlp from "./TherapistSlp";
import TherapistPlay from "./TherapistPlay";
import TherapistCognitive from "./TherapistCognitive";
import TherapistManager from "./TherapistManager";
import "../App.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ActionAreaCard() {
  return (
    <>
      <Container>
        {/* <h1> 치료사 소개</h1> */}

        <Card border="light" className="text-center">
          <Card.Header className="h2">연구원 소개</Card.Header>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={"center"}
            padding={"2rem 0rem 1rem 0rem"}
          >
            {/* <Chip label="언어치료사" component="a" href="step" clickable />
          <Chip
            label="언어치료사"
            component="a"
            href="step"
            clickable
            color="primary"
            variant="outlined"
          /> */}
            <Chip
              className="therapist_chip"
              label="언어치료사"
              component="a"
              href="#언어재활사"
              variant="outlined"
              clickable
            />

            <Chip
              label="인지치료사"
              component="a"
              href="#인지치료사"
              variant="outlined"
              clickable
            />

            <Chip
              label="놀이치료사"
              component="a"
              href="#놀이치료사"
              variant="outlined"
              clickable
            />
            <Chip
              label="실장님"
              component="a"
              href="#실장님"
              variant="outlined"
              clickable
            />
          </Stack>
          <Card.Body>
            <TherapistSlp />
            <img
              className="p-3"
              alt="line"
              src="/img/line_002.png"
              width={"100%"}
            />
            <TherapistCognitive />
            <img
              className="p-3"
              alt="line"
              src="/img/line_002.png"
              width={"100%"}
            />
            <TherapistPlay />
            <img
              className="p-3"
              alt="line"
              src="/img/line_002.png"
              width={"100%"}
            />
            <TherapistManager />
            <br />
            test
            {/* 1 이소영__0T */}
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
                >
                  {/* <Box> */}
                  <CardMedia
                    style={{
                      padding: "3rem",
                    }}
                    component="img"
                    image="/img/이소영t.jpeg"
                    alt="therapist1"
                  />
                  {/* </Box> */}
                </Card>

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
                      // style={{ padding: "1rem" }}
                    >
                      <div className="titletext">이소영 원장_0</div>
                      <div className="titlepoint">1급 언어재활사</div>
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
            {/* 1 이소영T___1*/}
            {/* 사진 내용 가로로 */}
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
                >
                  <CardMedia
                    style={{
                      padding: "3rem 3rem 0rem 3rem",
                    }}
                    component="img"
                    image="/img/이소영t.jpeg"
                    alt="therapist1"
                  />
                  <Typography
                    textAlign={"center"}
                    style={{ padding: "1rem 1rem 2rem 1rem" }}
                  >
                    <div className="titletext">이소영 원장_1</div>
                    <div className="titlepoint">1급 언어재활사</div>
                    <div className="titlepoint2">
                      말더듬, 조음(발음), 신경언어장애
                    </div>
                  </Typography>
                </Card>

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
                    {/* <Typography
                      textAlign={"center"}
                      // style={{ padding: "1rem" }}
                    >
                      <div className="titletext">이소영 원장</div>
                      <div className="titlepoint">1급 언어재활사</div>
                      <div className="titlepoint2">
                        말더듬, 조음(발음), 신경언어장애
                      </div>
                    </Typography> */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ padding: "1rem 0rem " }}
                    >
                      <div className="subtitle">| 자격사항 |</div>
                      {/* <li>1급 언어치료사</li> */}
                      <li>부모교육지도사</li>
                      <li>보완대체의사소통(ACC) 전문가 </li>
                      <li>한국언어청각임상학회 정회원</li>
                      <li>한국재활사협회 정회원 </li>
                      <div className="subtitle">| 경력사항 |</div>
                      <li>現 성원언어심리센터(송파점&위례점) 원장</li>
                      <li>現 이화여자대학교 대학원 임상지도</li>
                      <li>서울삼성병원 재활의학과 </li>
                      <li>서울아산병원 재활의학과</li>
                      <li>윤미선 언어청각센터 </li>
                      <div className="subtitle">| 학력 |</div>
                      <li>이화여자대학교 대학원 언어병리학 석사</li>
                      <li>대구대학교 언어치료학 학사</li>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* 1 이소영T___2*/}
            {/* 사진-contents wrap해제 */}
            <div style={{ padding: "1rem", margin: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  className="therapist_img"
                  sx={{ maxWidth: 345, width: "100%" }}
                >
                  <CardMedia
                    style={{
                      padding: "1.5rem",
                    }}
                    component="img"
                    image="/img/이소영t.jpeg"
                    alt="therapist1"
                  />
                  <Typography
                    textAlign={"center"}
                    style={{ padding: "0rem 1rem 2rem 1rem" }}
                  >
                    <div className="titletext">이소영 원장_2</div>

                    <div className="titlepoint">1급 언어재활사</div>
                    <div className="titlepoint2">
                      말더듬, 조음(발음), 신경언어장애
                    </div>
                  </Typography>
                </Card>

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
                    {/* <Typography
                      textAlign={"center"}
                      // style={{ padding: "1rem" }}
                    >
                      <div className="titletext">이소영 원장</div>
                      <div className="titlepoint">1급 언어재활사</div>
                      <div className="titlepoint2">
                        말더듬, 조음(발음), 신경언어장애
                      </div>
                    </Typography> */}
                    <Typography variant="body3" color="text.secondary">
                      <div className="subtitle">| 자격사항 |</div>
                      {/* <li>1급 언어치료사</li> */}
                      <li>부모교육지도사</li>
                      <li>보완대체의사소통(ACC) 전문가 </li>
                      <li>한국언어청각임상학회 정회원</li>
                      <li>한국재활사협회 정회원 </li>
                      <div className="subtitle">| 경력사항 |</div>
                      <li>現 성원언어심리센터(송파점&위례점) 원장</li>
                      <li>現 이화여자대학교 대학원 임상지도</li>
                      <li>서울삼성병원 재활의학과 </li>
                      <li>서울아산병원 재활의학과</li>
                      <li>윤미선 언어청각센터 </li>
                      <div className="subtitle">| 학력 |</div>
                      <li>이화여자대학교 대학원 언어병리학 석사</li>
                      <li>대구대학교 언어치료학 학사</li>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* 1 이소영T___3*/}
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
                          padding: "2rem 2rem 1rem 2rem",
                        }}
                        component="img"
                        image="/img/이소영t.jpeg"
                        alt="therapist1"
                      />
                      <div className="titletext">이소영 원장_3</div>
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
