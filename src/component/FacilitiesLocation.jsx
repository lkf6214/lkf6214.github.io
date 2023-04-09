import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "react-bootstrap/Card";
import FacilitiesImgSongpa from "./FacilitiesImgSongpa";
import FacilitiesImgWirye from "./FacilitiesImgWirye";
import FacilitiesImgSongpa1 from "./FacilitiesImgSongpa1";
import FacilitiesImgWirye1 from "./FacilitiesImgWirye1";
import Row from "react-bootstrap/Row";
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
              <p>💁 상담 문의: 오후 12시 ~ 6시</p>
              <p>📞 전화: 02-412-0505</p>
            </Card.Title>

            {/* <Row className="justify-content-md-center">
              <Col md="auto">
                <Card>
                  <Card.Text
                    className="p-3"
                    style={{
                      lineHeight: "2rem",
                      textAlign: "left",
                      width: "auto",
                    }}
                  >
                    🕙 운영시간: 평일 오전 10:00~오후 7:00, 토요일 오전
                    9:00~오후 2:00, 일/공휴일 휴무
                    <br />
                    📍 주소: 서울 송파구 올림픽로35길 10 파크리오B상가 505-2호
                    <br />
                    📞 전화: 02-412-0505
                  </Card.Text>
                </Card>
              </Col>
            </Row> */}
            <FacilitiesImgSongpa />
            <FacilitiesImgSongpa1 />
          </Card.Body>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card.Body>
            <Card.Title className="p-2" style={{ lineHeight: "1.8rem" }}>
              <p>
                📍 주소: 경기도 성남시 수정구 위례광장로 320 (창곡동 509-3)
                608호
              </p>
              <p>🕙 운영시간: 평일 오전 10시 ~ 오후 7시, 주일/공휴일 휴무</p>
              <p>💁 상담 문의: 오후 12시 ~ 6시</p>
              <p>📞 전화: 031-757-0504</p>
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
