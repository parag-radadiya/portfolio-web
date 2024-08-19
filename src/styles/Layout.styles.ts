import { theme } from "./styles";

const LayoutStyles = {
  main: {
    [theme.breakpoints.up("md")]: {
      marginTop: "100px",
    },
  },
} as const;

export default LayoutStyles;
