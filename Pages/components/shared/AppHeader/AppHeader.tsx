import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import appHeaderStyles from "@/styles/AppHeader.styles";
import AppDrawer from "../AppDrawer/AppDrawer";
import logo from "../../../../public/logo.png";
import { primaryColorWhite, theme } from "@/styles/styles";

const AppHeader = ({ setActiveStep }: { setActiveStep: Function }) => {
  const classes = appHeaderStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [menuMobileVisible, setMenuMobileVisible] = useState<boolean>(false);

  const handleMenuMobileVisibility = () => {
    setMenuMobileVisible(true);
  };

  const toggleDrawer = (open: boolean) => () => {
    setMenuMobileVisible(open);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={classes.appBar}>
        <Toolbar sx={classes.menuToolbar}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent={"space-around"}
            alignItems="center"
            sx={{ width: "100vw", padding: isDesktop ? "0 40px" :"0 20px" }}
          >
            <Stack
              direction="row"
              spacing={4}
              sx={{ width: "100vw" }}
              alignItems="center"
            >
              <img
                src={logo.src}
                alt="logo"
                style={{
                  height: isDesktop ? "50px" : "25px",
                  width: isDesktop ? "35px" : "25ppx",
                  cursor: "pointer",
                  textAlign: "center",
                  marginRight: "50px",
                }}
              />
              {isDesktop && (
                <Typography sx={classes.fontStyle}> +91-9643006703</Typography>
              )}
              {isDesktop && (
                <Typography sx={classes.fontStyle}>
                  pyush.anand7@gmail.com
                </Typography>
              )}
            </Stack>
            <IconButton
              size="large"
              edge="end"
              aria-label="open drawer"
              color="inherit"
              onClick={handleMenuMobileVisibility}
              sx={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        open={menuMobileVisible}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          paper: classes.menuMobile,
        }}
      >
        <AppDrawer
          setMenuMobileVisible={setMenuMobileVisible}
          setActiveStep={setActiveStep}
        />
      </Drawer>
    </Box>
  );
};

export default AppHeader;
