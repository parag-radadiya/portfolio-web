import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import appDrawerStyles from "./AppDrawer.styles";
import { getRelativeFontSize, interFont, theme } from "../../../styles/styles";

interface CustomProps {
  setMenuMobileVisible?: Function;
  setActiveStep?: Function;
}

const menuItems = [
  { label: "Home", stepIndex: 0, sectionId: "home" },
  { label: "Skills & Specialization", stepIndex: 1, sectionId: "skill" },
  { label: "About Me", stepIndex: 2, sectionId: "about" },
  { label: "My Resume", stepIndex: 3, sectionId: "resume" },
  { label: "Get in Touch", stepIndex: 4, sectionId: "contact" },
  { label: "My Projects", stepIndex: 5, sectionId: "project" },
];

const AppDrawer = ({ setMenuMobileVisible, setActiveStep }: CustomProps) => {
  const classes = appDrawerStyles;

  const handleClick = (stepIndex: number, sectionId: string) => {
    setActiveStep?.(stepIndex);
    setMenuMobileVisible?.(false);

    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <Box sx={classes.drawer}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "fixed",
            top: "50px",
            right: "50px",
            borderRadius: "50%",
            padding: "3px",
            color: "#FFFFFF",
            cursor: "pointer",
            [theme.breakpoints.down("md")]:{
              top: "25px",
              right: "25px",
            }
          }}
          onClick={() => setMenuMobileVisible?.(false)}
        >
          <ClearIcon fontSize="large" />
        </Box>
        <List sx={{ padding: 5, marginTop: 10 }}>
          {menuItems.map((item: any, index: number) => (
            <ListItem
              key={item.stepIndex}
              onClick={() => handleClick(item.stepIndex, item.sectionId)}
            >
              <Typography
                gutterBottom
                sx={{
                  ...interFont,
                  color: "#FFFFFF",
                  fontSize: "22px",
                  cursor: "pointer",
                  [theme.breakpoints.down("md")]: {
                    fontSize: getRelativeFontSize(4),
                  },
                  "&:hover": {
                    color: "#54d5d4",
                  },
                }}
              >
                {item.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AppDrawer;
