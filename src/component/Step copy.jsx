import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid/Grid";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Container } from "@mui/system";
import Card from "react-bootstrap/Card";

const steps = [
  {
    label: "상담예약",
    description: `전화 또는 온라인상담을 통해 상담 날짜를 예약합니다. 
    송파점 (02) 412-0505 / 위례점 (031) 757-0504`,
  },
  {
    label: "평가",
    description:
      "치료 대상자에게 필요한 (언어, 놀이, 심리)평가를 실시하여 정확한 수준과 상태를 진단합니다.",
  },
  {
    label: "치료 및 부모상담",
    description: `치료 대상자에게 필요한 치료와 함께 부모상담과 보호자 교육을 실시합니다.`,
  },
  {
    label: "사후관리",
    description: `치료 종료 후에도 사후 관리가 필요한 경우, 지속적인 추후관리(Follow-up)를 통해서 치료효과의 유지를 지속적으로 모니터링합니다.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Container>
        <Card border="light" className="text-center">
          <Card.Header className="h2">연혁</Card.Header>
          <Card.Body>
            <Card.Text className="p-1">
              <img
                className="p-2"
                alt="greetingImage"
                src="/img/연혁.jpeg"
                width={"90%"}
              />
              <Card.Title className="p-3">
                <mark>성원언어심리센터</mark>는 임상에서의 오랜 경험과 전문적인
                소양을 갖춘 선생님들의 학문적인 연구와 임상에서의 사례 연구와
                정확하고 면밀한 진단을 통해 최적의 언어 심리치료 서비스를
                제공하고 있습니다.
              </Card.Title>
              Seongwon speech and psychological treatment clinic since 2013
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <h1>치료 과정 안내</h1>

      <Grid container spacing={2} m={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              "& > :not(style)": {
                m: 2,
                p: 1.5,
                textAlign: "center",
              },
            }}
          >
            <Paper elevation={5} style={{ padding: "5%" }}>
              <h3
                style={{
                  padding: "2%",
                  marginBottom: "2%",
                  backgroundColor: "#cfeae1",
                  textAlign: "center",
                  borderRadius: "50px",
                }}
              >
                치료 프로세스
              </h3>
              상담 후 연령과 수준에 적절한 언어/놀이/심리평가를 실시하며 1:1
              개별 치료를 실시합니다.
              <br />
              치료대상자의 심한 정도에 따라 치료 횟수가 결정되며
              <br />
              40분 치료와 부모상담으로 진행됩니다.
              <div
                className="songpa_wirye_call"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    padding: "2%",
                    margin: "2%",
                    backgroundColor: "#cfeae1",
                    borderRadius: "10px",
                  }}
                >
                  {/* <LocalPhoneIcon /> */}
                  송파점 (02) 412-0505
                </div>

                <div
                  style={{
                    padding: "2%",
                    margin: "2%",
                    backgroundColor: "#cfeae1",
                    borderRadius: "10px",
                  }}
                >
                  {/* <LocalPhoneIcon /> */}
                  위례점 (031) 757-0504
                </div>
              </div>
              <div
                style={{
                  padding: "2%",
                  margin: "2%",
                  backgroundColor: "#cfeae1",
                  borderRadius: "10px",
                }}
              >
                <PhoneIphoneIcon />
                카카오 아이디
              </div>
              <h5>평일: 오전 10시 ~ 오후 7시</h5>
              <h5>토요일: 오전 10시 ~ 오후 2시</h5>
              <h5>공휴일: 휴무</h5>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 600, m: 2, p: 1.5 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">종결</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "안내사항" : "다음"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          이전
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  ✔ 본 센터는 예약제로 운영됩니다.
                  <br />
                  평가를 원하시는 경우 반드시 사전예약(1~2일 전) 해주셔야 하며,
                  평가시간은 평가항목에 따라 달라질 수 있습니다.
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  처음으로
                </Button>
              </Paper>
            )}
          </Box>
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  );
}
