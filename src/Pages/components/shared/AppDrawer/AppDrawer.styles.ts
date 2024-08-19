import { theme } from "@/styles/styles";

const appDrawerStyles = {
  drawer: {
    display: "flex",
    flexGrow: 1,
    width: "40vw",
    backgroundColor: "#14203a",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
} as const;

export default appDrawerStyles;
