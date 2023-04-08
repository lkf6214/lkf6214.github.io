import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { flexbox } from "@mui/system";

export default function ActionAreaCard() {
  return (
    <>
      <h1>바우처</h1>

      <Card sx={{ maxWidth: 345, display: "flex" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              발달재활 서비스
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>대상</h4>
              만 18세 미만의 장애 아동 (만 6세 미만은 '의사 진단서' 외 '검사
              자료'로 대체 가능)
              <br />
              전국 가구원 월평균 소득 150% 이하
              <h4>서비스</h4>월 4회, 각 50분 (상담 포함)
              <h4>비용</h4>월 220,000원 중 (본인 부담금은 등급에 따라 다름)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              발달재활 서비스
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>대상</h4>
              만 18세 미만의 장애 아동 (만 6세 미만은 '의사 진단서' 외 '검사
              자료'로 대체 가능)
              <br />
              전국 가구원 월평균 소득 150% 이하
              <h4>서비스</h4>월 4회, 각 50분 (상담 포함)
              <h4>비용</h4>월 220,000원 중 (본인 부담금은 등급에 따라 다름)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
