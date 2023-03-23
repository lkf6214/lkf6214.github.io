import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VoucherListTotal from "./VoucherListTotal";
import VoucherCardTotal from "./VoucherCardTotal";
import VoucherListSongpa from "./VoucherListSongpa";
import VoucherCardSongpa from "./VoucherCardSongpa";
import VoucherListWirye from "./VoucherListWirye";
import VoucherCardWirye from "./VoucherCardWirye";

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
        <Box sx={{ p: 3 }}>
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
            textAlign: "center",
            width: "auto",
            height: "auto",
          },
        }}
      >
        {/* <Box sx={{ width: "100%" }}> */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="전체 바우처" {...a11yProps(0)} />
            <Tab label="송파점" {...a11yProps(1)} />
            <Tab label="위례점" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <VoucherListTotal />
          <VoucherCardTotal />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VoucherListSongpa />
          <VoucherCardSongpa />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VoucherListWirye />
          <VoucherCardWirye />
        </TabPanel>
      </Box>
    </>
  );
}
