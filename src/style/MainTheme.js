import { purple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
export const Maintheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      defualt: red[900],
      gradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});
