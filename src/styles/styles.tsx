import { CSSProperties } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const borderRadius = "30px";
const primaryColor = "rgba(255, 255, 255, 0)";
const primaryColorWhite = "#FFFFFF";
const primaryColorBlack = "#121e37";
const primaryColorOrange = "#ff9710";
const primaryFontColor = "#cfcfcf";
const primaryFontHoverColor = "#54d5d4";
const primaryBackgroundColor = "rgba(255, 255, 255, 0)";
const defaultFontSize = 14;
const defaultBoxShadow = "0px 3px 6px 0px rgba(0, 0, 0, 0.16)";
const drawerWidth = 300;

const mainContainer: CSSProperties = {
  margin: "20px",
};

const headingFont: CSSProperties = {
  fontFamily: "SansSerif-bold",
  fontWeight: 700,
};
const mediumFont: CSSProperties = {
  fontFamily: "Poppins-Bold",
  fontWeight: 700,
};

const regularFont: CSSProperties = {
  fontFamily: "Poppins-Medium",
  fontWeight: 600,
};

const interRegularFont: CSSProperties = {
  fontFamily: "Poppins-Medium",
  fontWeight: 500,
};

const interFont: CSSProperties = {
  fontFamily: "Poppins-Regular",
  fontWeight: 400,
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Poppins_Medium",
      "Poppins_Regular",
      "sans-serif",
    ].join(","),
  },
});

const getRelativeFontSize = (value: number = 0) => {
  let size = defaultFontSize + value;
  return size + "px";
};

const centerItemFlex: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export {
  borderRadius,
  primaryColor,
  primaryBackgroundColor,
  defaultBoxShadow,
  centerItemFlex,
  headingFont,
  regularFont,
  mediumFont,
  interFont,
  getRelativeFontSize,
  theme,
  mainContainer,
  drawerWidth,
  primaryFontColor,
  primaryFontHoverColor,
  primaryColorWhite,
  primaryColorOrange,
  interRegularFont,
  primaryColorBlack,
};
