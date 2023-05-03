import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList className="mt-3" sx={{ width: "100%", height: 800 }} cols={2}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=165&h=165&fit=crop&auto=format`}
            srcSet={`${item.img}?w=300&h=600&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/img/송파_1.jpg",
    title: "입구",
  },

  {
    img: "/img/송파_2.jpg",
    title: "송파사랑상품권 가맹점",
  },

  {
    img: "/img/송파_2_1.jpg",
    title: "서울아산병원 감사패",
  },

  {
    img: "/img/송파_3.jpg",
    title: "Information",
  },
  {
    img: "/img/송파_4.jpg",
    title: "대기실",
  },
  {
    img: "/img/송파_5.jpg",
    title: "대기실",
  },

  {
    img: "/img/송파_6.jpg",
    title: "복도",
  },

  // {
  //   img: "/img/송파_7.jpg",
  //   title: "복도",
  // },

  {
    img: "/img/송파_8.jpg",
    title: "복도",
  },

  // {
  //   img: "/img/송파_8_2.jpg",
  //   title: "언어치료실",
  // },
  // {
  //   img: "/img/송파_9.jpg",
  //   title: "언어치료실",
  // },
  {
    img: "/img/송파_10.jpg",
    title: "언어치료실",
  },

  {
    img: "/img/송파_11.jpg",
    title: "언어치료실",
  },

  // {
  //   img: "/img/송파_12.jpg",
  //   title: "놀이치료실",
  // },

  {
    img: "/img/송파_13.jpg",
    title: "놀이치료실",
  },

  {
    img: "/img/송파_14_1.jpg",
    title: "놀이치료실",
  },

  {
    img: "/img/송파_15.jpg",
    title: "놀이치료실",
  },
  {
    img: "/img/송파_16.jpg",
    title: "언어치료실",
  },
];
