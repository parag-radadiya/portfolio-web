import { List, ListItem, ListItemText, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import appDrawerStyles from "@/styles/AppDrawer.styles";

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
            top: "20px",
            right: "20px",
            borderRadius: "50%",
            padding: "3px",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
          onClick={() => setMenuMobileVisible?.(false)}
        >
          <ClearIcon fontSize="medium" />
        </Box>
        <List sx={{ padding: 5, marginTop: 10 }}>
          {menuItems.map((item: any, index: number) => (
            <ListItem
              key={item.stepIndex}
              sx={{ color: "#FFFFFF", fontSize: "22px", cursor: "pointer" }}
              onClick={() => handleClick(item.stepIndex, item.sectionId)}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AppDrawer;
