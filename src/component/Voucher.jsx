import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import VoucherHeader from "./VoucherHeader";
import VoucherCard from "./VoucherCard";
// import VoucherCardTotal from "./VoucherCardTotal";
import Card from "react-bootstrap/Card";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const ItemHeader = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#5f5fd1",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "1.5rem",
  color: "white",
}));

export default function Voucher() {
  return (
    <>
      <div
        style={{
          // backgroundImage: "url(/img/bg_001.jpg)",
          background:
            "linear-gradient( 45deg, #fffffd,    rgb(83, 181, 63, 0.6), rgb(17, 167, 176,0.6) )",

          position: "relative",
          display: "table",
          width: "100%",
          height: "16rem",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "1.5em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          바우처
        </div>
      </div>

      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2" style={{ margin: "2rem 0rem 0rem 0rem" }}>
            바우처 및 서비스 안내
          </Card.Header>
          <Card.Body>
            <VoucherHeader />
          </Card.Body>
        </Card>
      </Container>

      {/* <Box sx={{ flexGrow: 1, backgroundColor: "#ebebeb", pt: 1 }}>
        <ItemHeader>송파점</ItemHeader>
        <Grid container spacing={2}>
          <Grid container xs={12} md={12} lg={12} spacing={2} p={5} pt={3}>
            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  발달재활 서비스
                </Box>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  <li>
                    목적 : 장애아동의 인지, 의사 소통, 운동, 적응 행동의 기능
                    향상과 행동 발달
                  </li>
                  <li>
                    대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사 진단서
                    외 검사 자료로 대체 가능) 전국 가구원 월평균 소득 150% 이하
                  </li>
                  <li>서비스 : 월 4회, 각 50분 (상담 포함)</li>
                  <li>비용 : 월 220,000원 중 본인 부담금은 등급에 따라 다름</li>
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  난독현상 치유 서비스
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>목적 : 난독 고위험군학생에게 치료서비스 </li>
                  <li>대상 : 초2-고1중 난독 고위험군 학생</li>
                  <li>
                    서비스 : 1회기 당 50분수업 (학생치유 40분+부모상담 10분)
                  </li>
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  굳센 카드 (서울시 특수교육대상)
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>
                    목적 : 특수교육 대상자의 방과 후 및 치료 지원을 위만 서비스
                  </li>
                  <li>
                    대상 : 특수 교육 대실 자로 지정된 학생 (학교에서 지점 또는
                    발급)
                  </li>
                  <li>서비스 : 지정된 횟수, 각 50 분 (상담 포함)</li>
                  <li>비용 : 치료비 지원 12만원외 자기 부담금 발생</li>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, backgroundColor: "#ebebeb", pt: 1 }}>
        <ItemHeader>위례점</ItemHeader>
        <Grid container spacing={2}>
          <Grid container xs={12} md={12} lg={12} spacing={2} p={5} pt={3}>
            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  발달재활 서비스
                </Box>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  <li>
                    목적 : 장애아동의 인지, 의사 소통, 운동, 적응 행동의 기능
                    향상과 행동 발달
                  </li>
                  <li>
                    대상 : 만 18세 미만의 장애 아동 (만 6세 미만은 의사 진단서
                    외 검사 자료로 대체 가능) 전국 가구원 월평균 소득 150% 이하
                  </li>
                  <li>서비스 : 월 4회, 각 50분 (상담 포함)</li>
                  <li>비용 : 월 220,000원 중 본인 부담금은 등급에 따라 다름</li>
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  우리아이 심리지원 서비스[성남시]
                </Box>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  <li>
                    목적 : 문제 행동 아동의 조기 발견과 개입으로 문제 행동을
                    감소시키고 정상 성장 지원
                  </li>
                  <li>
                    대상 : 만 18세 미만의 서비스가 필요한 아동 전국가구 월평균
                    소득 140% 이하 (1년마다 갱신, 최대2년)
                  </li>
                  <li>서비스 : 월4회, 각 50분 (상담포함)</li>
                  <li>
                    비용 : 월 192,000 원 중 본인 부담금은 등급에 따라 다름
                  </li>
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  통합가족 상담 서비스
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>
                    목적 : 건강한 기족 항성을 위하여 위기별 문제 행동에 따른
                    맞춤형 상담 서비스
                  </li>
                  <li>
                    대상 : 만 18 세미 만의 아동이 포함 된 서비스가 필요한 가정
                    전국가구 원 평균 소득 170 % 이하 (최대 1 년)
                  </li>
                  <li>서비스 : 월4회, 각 60분 (상담포함)</li>
                  <li>
                    비용 : 월 160,000 원 중 본인 부담금은 등급에 따라 다름{" "}
                  </li>
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  꿈이든 카드 (경기도 특수교육대상)
                </Box>
                <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                  <li>
                    목적 : 특수교육 대상자의 방과 후 및 치료 지원을 위만 서비스
                  </li>
                  <li>
                    대상 : 특수 교육 대실 자로 지정된 학생 (학교에서 지점 또는
                    발급)
                  </li>
                  <li>서비스 : 지정된 횟수, 각 50 분 (상담 포함)</li>
                  <li>
                    비용 : 방과후 9만원 지원 / 치료비 지원 12만원외 자기 부담금
                    발생
                  </li>
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  읽기곤란(난독증) 학생 서비스
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>목적 : 난독 고위험군학생에게 치료서비스</li>
                  <li>대상 : 초1-초6 읽기곤란(난독증) 의심 학생</li>
                  <li>
                    서비스 : 1회기 당 50분수업 (학생치유 40분+부모상담 10분)
                  </li>
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Item>
                <Box
                  id="category-a"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  온맘
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>목적 :</li>
                  <li>대상 :</li>
                  <li>서비스 : </li>
                  <li>비용 :</li>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}
