import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/system";
import Card from "react-bootstrap/Card";

const steps = [
  {
    label: "상담예약",
    description: `전화 또는 온라인상담을 통해 상담 날짜를 예약합니다. 
   `,
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
        <Card>
          <Card border="light" className="text-center">
            <Card.Header className="h2">치료 과정</Card.Header>
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  // flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{ maxWidth: 600, m: 1, p: 1 }}
                  style={{ textAlign: "left" }}
                >
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
                                {index === steps.length - 1
                                  ? "안내사항"
                                  : "다음"}
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
                    <Paper square elevation={0} sx={{ p: 2 }}>
                      <Typography>
                        ✔ 본 센터는 <mark>예약제</mark>로 운영됩니다.
                        <br />
                        평가를 원하시는 경우 반드시 사전예약(1~2일 전) 해주셔야
                        하며, 평가시간은 평가항목에 따라 달라질 수 있습니다.
                      </Typography>
                      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        처음으로
                      </Button>
                    </Paper>
                  )}
                </Box>
              </div>

              {/* <Card.Text className="p-1">
              
              <Card.Title className="p-3">
               서비스를
                제공하고 있습니다.
              </Card.Title>
              Seongwon speech and psychological treatment clinic since 2013
            </Card.Text> */}
            </Card.Body>
          </Card>
        </Card>
      </Container>
    </>
  );
}
