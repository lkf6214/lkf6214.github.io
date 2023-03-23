import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, Routes, Route } from "react-router-dom";
import LocationSongpa from "./LocationSongpa";
import LocationWirye from "./LocationWirye";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {/* <BottomNavigationAction label="송파점" icon={<FavoriteIcon />} /> */}
          <Link to="LocationSongpa">
            <BottomNavigationAction label="송파점" icon={<LocationOnIcon />} />
          </Link>
          <Link to="locationWirye">
            <BottomNavigationAction label="위례점" icon={<LocationOnIcon />} />{" "}
            {/* <p>위례점</p> */}
          </Link>
        </BottomNavigation>
      </Box>

      <Routes>
        <Route path="locationSongpa" element={<LocationSongpa />} />
        <Route path="locationWirye" element={<LocationWirye />} />
      </Routes>
    </>
  );
}
