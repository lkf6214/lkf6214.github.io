import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#FeFeFe",
      contrastText: "#000000",
    },
    background: {
      default: "#000000",
    },
    divider: "#fefefe",
    action: {
      selectedOpacity: 0.95,
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#000000",
            backgroundColor: "#fefefe",
          },
          "&:hover": {
            color: "#000000",
            backgroundColor: "#fefefe",
          },
        },
      },
    },
  },
});
