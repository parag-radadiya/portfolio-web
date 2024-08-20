import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import EastSharpIcon from "@mui/icons-material/EastSharp";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import { commonStyles } from "./Common.styles";
import { centerItemFlex, theme } from "../../styles/styles";

const projectData = [
  {
    icon: project1.src,
    title: "Swin Fit App",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project2.src,
    title: "Scrap",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project3.src,
    title: "UNIlearn",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project2.src,
    title: "Scrap",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project3.src,
    title: "UNIlearn",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
];

const Projects = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projectData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 3)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
          height: "85vh",
          ...centerItemFlex,
      }}
    >
      <Stack direction={"column"} spacing={1}>
        <Typography
          sx={{
            ...classes.headingFont,
            textAlign: "start",
          }}
        >
          My{" "}
          <span
            style={{
              color: "#ff9710",
            }}
          >
            Projects
          </span>
        </Typography>
        <Typography
          sx={{
            ...classes.subHeading,
            textAlign: "start",
            marginBottom: "20px !important",
          }}
        >
          Some of my recent work!
        </Typography>
        <Stack
          direction={isDesktop ? "row" : "column"}
          spacing={2}
          alignItems="center"
        >
          {isDesktop ? (
            <>
              {projectData.map((i, index) => (
                <>
                  {Math.abs(activeStep - index + 1) <= 1 && (
                    <Box
                      key={index}
                      sx={{
                        // width: "300px",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: "#182541",
                      }}
                    >
                      <img src={i.icon} width="100%" height="auto" />
                      <Typography
                        sx={{
                          ...classes.contactInfo,
                          color: "#54d5d4",
                          mt: 2,
                        }}
                      >
                        {i.title}
                      </Typography>
                      <Typography
                        sx={{
                          ...classes.skillDes,
                        }}
                      >
                        {i.subTitle}
                      </Typography>
                    </Box>
                  )}
                </>
              ))}
            </>
          ) : (
            <>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {projectData.map((i, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {Math.abs(activeStep - index + 1) <= 1 && (
                      <Box
                        key={index}
                        sx={{
                          width: "90%",
                          borderRadius: "8px",
                          backgroundColor: "#182541",
                        }}
                      >
                        <img src={i.icon} width="100%" height="auto" />
                        <Box p={1}>
                          <Typography
                            gutterBottom
                            sx={{
                              ...classes.subHeading,
                              color: "#54d5d4",
                              mt: 2,
                              textAlign: "start",
                            }}
                          >
                            {i.title}
                          </Typography>
                          <Typography
                            sx={{
                              ...classes.skillDes,
                            }}
                          >
                            {i.subTitle}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>
                ))}
              </AutoPlaySwipeableViews>
            </>
          )}
        </Stack>
        {maxSteps >= 4 ? (
          <Stack direction={"row"} spacing={1} justifyContent={"flex-end"}>
            <Button
              size="small"
              onClick={handleBack}
              sx={{
                cursor: "pointer",
                minWidth: "auto !important",
                width: "45px",
                height: "45px",
                backgroundColor: "#353f55",
                borderRadius: "50%",
                svg: {
                  color: activeStep === 0 ? "gray" : "#FFFFFF",
                  cursor: "pointer",
                  width: "23px",
                  height: "23px",
                },
                "&:focus": {
                  color: activeStep === 0 ? "gray" : "#FFFFFF",
                  backgroundColor: "#353f55",
                },
                "&:hover": {
                  color: activeStep === 0 ? "gray" : "#FFFFFF",
                  backgroundColor: "#353f55",
                },
                transition: "all ease 0.5s",
              }}
              disabled={activeStep === 0}
            >
              <KeyboardBackspaceSharpIcon color="inherit" />
            </Button>
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 3}
              sx={{
                cursor: "pointer",
                minWidth: "auto !important",
                width: "45px",
                height: "45px",
                backgroundColor: "#353f55",
                borderRadius: "50%",
                svg: {
                  color: activeStep === maxSteps - 3 ? "gray" : "#FFFFFF",
                  cursor: "pointer",
                  width: "23px",
                  height: "23px",
                },
                "&:focus": {
                  color: activeStep === 0 ? "gray" : "#FFFFFF",
                  backgroundColor: "#353f55",
                },
                "&:hover": {
                  color: activeStep === 0 ? "gray" : "#FFFFFF",
                  backgroundColor: "#353f55",
                },
                transition: "all ease 0.5s",
              }}
            >
              <EastSharpIcon color="inherit" />
            </Button>
          </Stack>
        ) : null}
      </Stack>
    </Container>
  );
};

export default Projects;
