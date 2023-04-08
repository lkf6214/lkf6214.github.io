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
    img: "/img/위례_1.jpg",
    title: "로비",
  },

  {
    img: "/img/위례_3.jpg",
    title: "로비",
  },

  {
    img: "/img/위례_5.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_4.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_6.jpg",
    title: "로비",
  },
  // {
  //   img: "/img/위례_7.jpg",
  //   title: "로비",
  // },
  {
    img: "/img/위례_25.jpg",
    title: "로비",
  },

  {
    img: "/img/위례_7_1.jpg",
    title: "로비",
  },

  {
    img: "/img/위례_10.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_11.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_24.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_12.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_13.jpg",
    title: "로비",
  },
  // {
  //   img: "/img/위례_8.jpg",
  //   title: "로비",
  // },
  // {
  //   img: "/img/위례_9.jpg",
  //   title: "로비",
  // },
  {
    img: "/img/위례_14.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_15.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_16.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_17.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_18.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_19.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_20.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_21.jpg",
    title: "로비",
  },
  {
    img: "/img/위례_22.jpg",
    title: "로비",
  },
  // {
  //   img: "/img/위례_23.jpg",
  //   title: "로비",
  // },
  {
    img: "/img/위례_2.jpg",
    title: "로비",
  },
];
