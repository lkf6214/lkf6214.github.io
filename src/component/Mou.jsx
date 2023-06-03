import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import "../css/Mou.css";

export default function TitlebarImageList() {
  return (
    <>
      <ImageListItem key="Subheader" cols={1}>
        <h5 className="pt-5 pb-2">지원사업 / 협력기관</h5>
      </ImageListItem>
      <ImageList sx={{ width: "100%", height: "auto" }} cols={3}>
        {itemData.map((item) => (
          <ImageListItem
            style={{ border: "2px solid rgb(17, 167, 176,0.7)" }}
            key={item.img}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              className="ImageListItemBar"
              style={{
                backgroundColor: "rgb(17, 167, 176,0.7)",
                fontSize: "0.5rem",
              }}
              title={item.title}
              size="sm"
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "/img/mou_000.jpg",
    title: "발달재활서비스",
    author: "@송파점",
  },
  {
    img: "/img/mou_001.png",
    title: "꿈e든서비스",
    author: "@위례점",
    // rows: 4,
    // cols: 4,
    // featured: true,
  },
  {
    img: "/img/mou_004.png",
    title: "이화여자대학교",
    author: "@송파점 @위례점",
    // rows: 4,
    // cols: 4,
  },
  {
    img: "/img/mou_002.png",
    title: "난독 학생 지원",
    author: "@송파점",
    // cols: 4,
  },
  {
    img: "/img/mou_003.png",
    title: "난독고위험군 연계 지원",
    author: "@송파점",
    // cols: 2,
  },

  {
    img: "/img/mou_005.png",
    title: "통합가족서비스",
    author: "@위례점",
  },
  {
    img: "/img/mou_006.png",
    title: "특수교육대상자 치료지원",
    author: "@송파점",
  },
  {
    img: "/img/mou_008.png",
    title: "맞춤형 학부모 학습상담 「온맘」",
    author: "@송파점",
  },
  {
    img: "/img/mou_007.jpg",
    title: "장애인 의사소통 지원",
    author: "@송파점",
  },
];
