import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "../css/HomeSection.css";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

const images = [
  {
    url: "/img/photo_003.png",
    title: "언어치료",
    width: "30%",
    href: "program/language",
  },
  {
    url: "/img/1.jpg",
    title: "인지치료",
    width: "30%",
    href: "program/cognitive",
  },
  {
    url: "/img/photo_002.png",
    title: "놀이치료",
    width: "30%",
    href: "program/play",
  },
  {
    url: "/img/photo_010.png",
    title: "성인상담",
    width: "30%",
    href: "program/counseling",
  },

  {
    url: "/img/2.jpg",
    title: "그룹치료",
    width: "30%",
    href: "program/group",
  },
  {
    url: "/image/003.jpg",
    title: "부모교육",
    width: "30%",
    href: "program/family",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -4,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function HomeProgram() {
  return (
    <>
      <section
        style={{
          padding: "3rem 0rem 0rem 0rem",
          margin: "1rem 0rem",

          backgroundColor: "rgb(8, 118, 48, 0.2)",
        }}
      >
        <h2>
          <FilterVintageIcon
            color="warning"
            fontSize="large"
            style={{ marginBottom: "0.5rem" }}
          />
        </h2>
        <h2> 치료 프로그램</h2>

        {/* <h2>
          <FilterVintageIcon color="warning" /> 치료 프로그램{" "}
          <FilterVintageIcon color="warning" />
        </h2> */}
        <h5 className="p-1">
          성원의 전문 언어치료/놀이치료/성인상담/인지치료에 대해 알아보세요
        </h5>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
            justifyContent: "center",
            // justifyContent: "space-around",
            padding: "1rem 0rem",
          }}
        >
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              href={image.href}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>

        <Stack
          direction="row"
          spacing={2}
          justifyContent={"center"}
          padding={"1rem 0rem 2rem 0rem"}
        >
          <Chip
            className="HomeBtn"
            label="치료 프로그램 바로가기"
            component="a"
            href="program/language"
            color="warning"
            variant="outlined"
            clickable
            style={{ fontSize: "1.3rem", padding: "1.3rem" }}
          />
        </Stack>
        {/* <Button /> */}
      </section>
    </>
  );
}
