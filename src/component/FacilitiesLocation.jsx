import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "react-bootstrap/Card";
import FacilitiesImgSongpa from "./FacilitiesImgSongpa";
import FacilitiesImgWirye from "./FacilitiesImgWirye";
import FacilitiesImgSongpa1 from "./FacilitiesImgSongpa1";
import FacilitiesImgWirye1 from "./FacilitiesImgWirye1";
// import { Col } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          // justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            textAlign: "center",
            width: "auto",
            height: "auto",
          },
        }}
      >
        {/* <Box sx={{ width: "100%" }}> */}
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", paddingTop: "1rem" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="송파점" icon={<LocationOnIcon />} {...a11yProps(0)} />

            <Tab label="위례점" icon={<LocationOnIcon />} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Card.Body>
            <Card.Title className="p-2" style={{ lineHeight: "1.8rem" }}>
              <p>
                📍 주소: 서울시 송파구 올림픽로35길 10 파크리오B상가 505-2호
              </p>

              <p>
                🕙 운영시간: 평일 오전 10시 ~ 오후 7시, 토요일 오전 10시 ~ 오후
                2시, 일/공휴일 휴무
              </p>
              <p>💁 상담 문의: 오후 12시 ~ 6시 30분</p>
              <a href="tel:02-412-0505">
                <Col
                  xs={12}
                  md={5}
                  style={{
                    margin: "auto",
                    left: "0",
                    right: "0",
                    padding: "1rem",
                    paddingTop: "1.5rem",

                    backgroundColor: "#fcf9e5",
                    borderRadius: "1rem",
                  }}
                >
                  <h5 className="p-1">
                    📞 성원언어상담연구소 (송파점) <br /> 02-412-0505
                  </h5>
                </Col>
              </a>
            </Card.Title>

            <FacilitiesImgSongpa />
            <FacilitiesImgSongpa1 />
          </Card.Body>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card.Body>
            <Card.Title className="p-2" style={{ lineHeight: "1.8rem" }}>
              <p>
                📍 주소: 경기도 성남시 수정구 위례광장로 320 아이에스센트럴타워
                608호
              </p>
              <p>🕙 운영시간: 평일 오전 10시 ~ 오후 7시, 주일/공휴일 휴무</p>
              <p>💁 상담 문의: 오후 1시 ~ 6시</p>
              <a href="tel:02-412-0505">
                <Col
                  xs={12}
                  md={5}
                  style={{
                    margin: "auto",
                    left: "0",
                    right: "0",
                    padding: "1rem",
                    paddingTop: "1.5rem",

                    backgroundColor: "#fcf9e5",
                    borderRadius: "1rem",
                  }}
                >
                  <h5 className="p-1">
                    📞 성원언어심리센터 (위례점) <br /> 031-757-0504
                  </h5>
                </Col>
              </a>
            </Card.Title>
            <FacilitiesImgWirye />
            <FacilitiesImgWirye1 />
          </Card.Body>
        </TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
      </Box>
    </>
  );
}
