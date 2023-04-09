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
          성원의 협약서
        </ListSubheader>
      </ImageListItem>
      <ImageList sx={{ width: "100%", height: "auto" }} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
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
    title: "발달재활서비스제공기관지정서",
    author: "@송파점",
    // rows: 4,
    // cols: 4,
    // featured: true,
  },
  {
    img: "/img/mou_001.png",
    title: "꿈이든서비스제공기관지정서",
    author: "@위례점",
    // rows: 4,
    // cols: 4,
    // featured: true,
  },
  {
    img: "/img/mou_004.png",
    title: "이화여자대학교협약서",
    author: "@송파점 @위례점",
    // rows: 4,
    // cols: 4,
  },
  {
    img: "/img/mou_002.png",
    title: "난독바우처업무협약서",
    author: "@송파점",
    // cols: 4,
  },
  {
    img: "/img/mou_003.png",
    title: "난독바우처지정서",
    author: "@송파점",
    // cols: 2,
  },

  {
    img: "/img/mou_005.png",
    title: "통합가족서비스제공자등록증",
    author: "@위례점",
    // rows: 2,
    // cols: 2,
    // featured: true,
  },
  {
    img: "/img/mou_006.png",
    title: "특수교육치료지원제공기관지정서",
    author: "@송파점",
  },
];
