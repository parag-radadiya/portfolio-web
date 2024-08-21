import {
  getRelativeFontSize,
  interFont,
  interRegularFont,
  primaryColorBlack,
  primaryColorOrange,
  primaryColorWhite,
  regularFont,
  theme,
} from "../../styles/styles";

export const commonStyles = {
  headingFont: {
    ...interFont,
    fontSize: getRelativeFontSize(10),
    color: "#FFFFFF",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: getRelativeFontSize(2),
    },
  },
  subHeading: {
    ...interRegularFont,
    fontSize: getRelativeFontSize(38),
    color: primaryColorWhite,
    textAlign: "center",
    lineHeight: "70px",
    [theme.breakpoints.down("lg")]: {
      fontSize: getRelativeFontSize(25),
    },
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(10),
      lineHeight: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: getRelativeFontSize(6),
      lineHeight: "28px",
    },
  },
  btnStyle: {
    ...interRegularFont,
    width: "250px",
    height: "55px",
    padding: "2px 2px 2px 2px",
    fontSize:getRelativeFontSize(5),
    borderRadius: "8px",
    backgroundColor: primaryColorOrange,
    color: primaryColorBlack,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#ffb40d",
      color: primaryColorBlack,
    },
    [theme.breakpoints.down("md")]: {
      fontSize:getRelativeFontSize(2),
      width: "180px",
      height: "35px",
    },
  },
  skillTitle: {
    ...interRegularFont,
    fontSize: getRelativeFontSize(15),
    color: primaryColorWhite,
  },
  skillDes: {
    ...interFont,
    fontSize: getRelativeFontSize(1),
    color: primaryColorWhite,
  },
  contactInfo: {
    ...interRegularFont,
    fontSize: getRelativeFontSize(4),
    color: primaryColorWhite,
    [theme.breakpoints.down("md")]: {
      fontSize: getRelativeFontSize(-1),

    },
  },
} as const;
