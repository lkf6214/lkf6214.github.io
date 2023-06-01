import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";

export default function TitlebarImageList() {
  return (
    <>
      {/* <Container> */}
      {/* <Card>
        <Card border="light" className="text-center">
          <Card.Header className="h2">협약서</Card.Header>
          <Card.Body> */}
      <ImageListItem key="Subheader" cols={1}>
        <ListSubheader component="div" className="pt-5">
          지원사업 / 협력기관
        </ListSubheader>
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
              style={{
                backgroundColor: "rgb(17, 167, 176,0.7)",
              }}
              title={item.title}
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
      {/* </Card.Body>
        </Card>
      </Card> */}
      {/* </Container> */}
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
    // rows: 2,
    // cols: 2,
    // featured: true,
  },
  {
    img: "/img/mou_006.png",
    title: "특수교육대상자 치료지원",
    author: "@송파점",
  },
  {
    img: "/img/mou_008.png",
    title: "맞춤형학부모학습상담 「온맘(溫마음)」",
    author: "@송파점",
  },
  {
    img: "/img/mou_007.jpg",
    title: "서울시장애인의사소통권리증진센터",
    author: "@송파점",
  },
];
