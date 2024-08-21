import {
  centerItemFlex,
  defaultBoxShadow,
  getRelativeFontSize,
  headingFont,
  interFont,
  primaryColorWhite,
  primaryFontColor,
  primaryFontHoverColor,
  regularFont,
  theme,
} from "../../../styles/styles";

const appHeaderStyles = {
  appBar: {
    boxShadow: defaultBoxShadow,
    backgroundColor: "#14203a",
    color: "black",
    wordSpacing: 1,
  },
  menuToolbar: {
    backgroundColor: "#14203a",
    color: "#cfcfcf",
    ...centerItemFlex,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.up("md")]: {
      height: "112px",
    },

    [theme.breakpoints.up("sm")]: {
      height: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30px",
    },
  },
  fontStyle: {
    ...interFont,
    fontSize: getRelativeFontSize(7),
    color: primaryFontColor,
    "&:hover": {
      color: primaryFontHoverColor,
    },
  },
  menuMobile: {
    width: "30vw",
  },
  menuIcon: {
    "& .MuiSvgIcon-root": {
      color: primaryColorWhite,
      width: "auto",
      height: "35px",
      "&:hover": {
        color: "#54d5d4",
      },
    },
  },
} as const;

export default appHeaderStyles;
