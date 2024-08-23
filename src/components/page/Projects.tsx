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
import project4 from "../../assets/images/project4.svg";
import project5 from "../../assets/images/project5.svg";
import project6 from "../../assets/images/project6.svg";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { commonStyles } from "./Common.styles";
import {
  centerItemFlex,
  getRelativeFontSize,
  interFont,
  interRegularFont,
  theme,
} from "../../styles/styles";

const projectData = [
  {
    icon: project1.src,
    title: "Just Ask",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project2.src,
    title: "Swin Fit App",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project3.src,
    title: "Scrap",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project4.src,
    title: "UNIlearn",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project5.src,
    title: "EasePlus",
    subTitle:
      "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
  },
  {
    icon: project6.src,
    title: "Employee Directory",
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        [theme.breakpoints.down("md")]: {
          ...centerItemFlex,
        },
        [theme.breakpoints.down("sm")]: {
          height: "80vh",
          marginBottom: "0",
        },
        [theme.breakpoints.up(1080)]: {
          height: "65vh",
        },
        [theme.breakpoints.between(768, 780)]: {
          height: "75vh",
        },
        [theme.breakpoints.up(975)]: {
          height: "60vh",
        },
        [theme.breakpoints.between(1910, 1940)]: {
          height: "70vh",
        },
        [theme.breakpoints.between(1024,1245)]: {
          ...centerItemFlex,
          height: "80vh",
        },
        marginBottom: "100px",
      }}
    >
      <Stack direction={"column"} spacing={1} textAlign="start">
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
                        borderRadius: "8px",
                        backgroundColor: "#182541",
                      }}
                    >
                      <img src={i.icon} width="100%" height="auto" />
                      <Typography
                        sx={{
                          ...classes.contactInfo,
                          fontSize: getRelativeFontSize(7),
                          color: "#54d5d4",
                          mt: 2,
                          padding: "0 4px",
                        }}
                      >
                        {i.title}
                      </Typography>
                      <Typography
                        sx={{
                          ...classes.skillDes,
                          fontSize: getRelativeFontSize(3),
                          padding: "5px",
                          mb: 2,
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
                          borderRadius: "8px",
                          backgroundColor: "#182541",
                        }}
                      >
                        <img src={i.icon} width="100%" height="auto" />
                        <Box p={"2px"}>
                          <Typography
                            gutterBottom
                            sx={{
                              ...interRegularFont,
                              color: "#54d5d4",
                              textAlign: "start",
                              fontSize: "15px",
                            }}
                          >
                            {i.title}
                          </Typography>
                          <Typography
                            sx={{
                              ...interFont,
                              color: "#FFFFFF",
                              textAlign: "start",
                              fontSize: "12px",
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
                  color: activeStep === 0 ? "#FFFFFF" : "#FFFFFF",
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                },
                "&:focus": {
                  color: activeStep === 0 ? "#ffffff" : "#FFFFFF",
                  backgroundColor: "#505d69",
                },
                "&:hover": {
                  color: activeStep === 0 ? "#ffffff" : "#FFFFFF",
                  backgroundColor: "#505d69",
                },
                transition: "all ease 0.5s",
              }}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeftIcon color="inherit" />
            </Button>
            <Button
              size="small"
              onClick={handleNext}
              disabled={
                isDesktop
                  ? activeStep >= maxSteps - 3
                  : activeStep >= maxSteps - 1
              }
              sx={{
                cursor: "pointer",
                minWidth: "auto !important",
                width: "45px",
                height: "45px",
                backgroundColor: "#353f55",
                borderRadius: "50%",
                svg: {
                  color:
                    activeStep >= maxSteps - (isDesktop ? 3 : 1)
                      ? "#FFFFFF"
                      : "#FFFFFF",
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                },
                "&:focus": {
                  color:
                    activeStep >= maxSteps - (isDesktop ? 3 : 1)
                      ? "FFFFFF"
                      : "#FFFFFF",
                  backgroundColor: "#505d69",
                },
                "&:hover": {
                  color:
                    activeStep >= maxSteps - (isDesktop ? 3 : 1)
                      ? "#ffffff"
                      : "#FFFFFF",
                  backgroundColor: "#505d69",
                },
                transition: "all ease 0.5s",
              }}
            >
              <KeyboardArrowRightIcon color="inherit" />
            </Button>
          </Stack>
        ) : null}
      </Stack>
    </Container>
  );
};

export default Projects;
