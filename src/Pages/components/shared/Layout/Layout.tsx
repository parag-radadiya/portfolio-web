import { Box } from "@mui/system";
import AppHeader from "../AppHeader/AppHeader";
import { useState } from "react";
import LayoutStyles from "../../../../styles/Layout.styles";

interface CustomProps {
  children?: any;
}

const Layout = (props: CustomProps) => {
  const classes = LayoutStyles;

  return (
    <>
      <Box sx={classes.main}>{props.children}</Box>
    </>
  );
};

export default Layout;
