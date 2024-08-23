import {
  Box,
  Container,
  Grid,
  Stack,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { commonStyles } from "./Common.styles";
import {
  centerItemFlex,
  getRelativeFontSize,
  interFont,
  theme,
} from "../../styles/styles";

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: ownerState.active ? "#54d5d4" : "gray",
    display: "flex",
    height: 40,
    alignItems: "center",
    marginRight: "10px !important",
    marginBottom: "13px !important",

    "& .QontoStepIcon-circle": {
      width: 2.5,
      height: 69,
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }}>
      <div className="QontoStepIcon-circle" />
    </QontoStepIconRoot>
  );
}

const educationData = [
  {
    label: "Designing User-Centric Experiences",
    date: "Jan 2021 - Jun 2023",
    description: [
      { des: "Proficiency in software tools and creative techniques." },
      {
        des: "Developed the ability to approach challenges with a creative mindset.",
      },
      {
        des: "The institute helped me build a portfolio that showcases my best work.",
      },
      {
        des: "Through group projects and interactions with peers, I learned the importance of teamwork.",
      },
    ],
  },
  {
    label: "Bachelor of Science in UI/UX",
    date: "Jan 2001 - Jun 2004",
    description: [
      { des: "Proficiency in software tools and creative techniques." },
      {
        des: "Developed the ability to approach challenges with a creative mindset.",
      },
      {
        des: "The institute helped me build a portfolio that showcases my best work.",
      },
      {
        des: "Through group projects and interactions with peers, I learned the importance of teamwork.",
      },
    ],
  },
  {
    label: "Art Institute of Pittsburgh, Pittsburgh, PA",
    date: "Oct 1990 - Dec 1992",
    description: [
      { des: "Proficiency in software tools and creative techniques." },
      {
        des: "Developed the ability to approach challenges with a creative mindset.",
      },
      {
        des: "The institute helped me build a portfolio that showcases my best work.",
      },
      {
        des: "Through group projects and interactions with peers, I learned the importance of teamwork.",
      },
    ],
  },
  {
    label: "Master of Science in UX Design",
    date: "Nov 2004 - Dec 2006",
    description: [
      { des: "Proficiency in software tools and creative techniques." },
      {
        des: "Developed the ability to approach challenges with a creative mindset.",
      },
      {
        des: "The institute helped me build a portfolio that showcases my best work.",
      },
      {
        des: "Through group projects and interactions with peers, I learned the importance of teamwork.",
      },
    ],
  },
  {
    label: "Harmony Heights Academy",
    date: "Nov 1988 - Dec 2004",
    description: [
      { des: "Proficiency in software tools and creative techniques." },
      {
        des: "Developed the ability to approach challenges with a creative mindset.",
      },
      {
        des: "The institute helped me build a portfolio that showcases my best work.",
      },
      {
        des: "Through group projects and interactions with peers, I learned the importance of teamwork.",
      },
    ],
  },
];
const experienceData = [
  {
    label: "Senior UI/UX Designer @apple",
    date: "Jun 2017 - Feb 2019",
    description: [
      {
        des: "Leading the creation of user-centered interfaces for digital products.",
      },
      {
        des: "Conducting user research to inform design decisions.",
      },
      {
        des: "Creating wireframes and interactive prototypes for usability testing.",
      },
      {
        des: "Conducting usability tests and incorporating feedback into designs.",
      },
    ],
  },
  {
    label: "Senior UI/UX Designer @samsung",
    date: "Jun 2017 - Feb 2019",
    description: [
      {
        des: "Leading the creation of user-centered interfaces for digital products.",
      },
      {
        des: "Conducting user research to inform design decisions.",
      },
      {
        des: "Creating wireframes and interactive prototypes for usability testing.",
      },
      {
        des: "Conducting usability tests and incorporating feedback into designs.",
      },
    ],
  },
  {
    label: "Senior UI/UX Designer @infotech",
    date: "Jun 2017 - Feb 2019",
    description: [
      {
        des: "Leading the creation of user-centered interfaces for digital products.",
      },
      {
        des: "Conducting user research to inform design decisions.",
      },
      {
        des: "Creating wireframes and interactive prototypes for usability testing.",
      },
      {
        des: "Conducting usability tests and incorporating feedback into designs.",
      },
    ],
  },
  {
    label: "Senior UI/UX Designer @majesco",
    date: "Jun 2017 - Feb 2019",
    description: [
      {
        des: "Leading the creation of user-centered interfaces for digital products.",
      },
      {
        des: "Conducting user research to inform design decisions.",
      },
      {
        des: "Creating wireframes and interactive prototypes for usability testing.",
      },
      {
        des: "Conducting usability tests and incorporating feedback into designs.",
      },
    ],
  },
  {
    label: "Senior UI/UX Designer @scout",
    date: "Jun 2017 - Feb 2019",
    description: [
      {
        des: "Leading the creation of user-centered interfaces for digital products.",
      },
      {
        des: "Conducting user research to inform design decisions.",
      },
      {
        des: "Creating wireframes and interactive prototypes for usability testing.",
      },
      {
        des: "Conducting usability tests and incorporating feedback into designs.",
      },
    ],
  },
];

const Resume = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [activeStep1, setActiveStep1] = useState(0);
  const [activeStep2, setActiveStep2] = useState(0);
  const steps = [
    "Certification",
    "Degree",
    "Associates Degree",
    "College",
    "Schooling",
  ];
  const steps1 = ["Apple", "Samsung", "Infotech", "Majesco", "Scout"];

  const handleStepChange1 = (step: number) => {
    setActiveStep1(step);
  };

  const handleStepChange2 = (step: number) => {
    setActiveStep2(step);
  };

  const renderStepContent = (stepData: any) => (
    <Stack direction={"column"} spacing={1} textAlign={"start"} pt={2}>
      <Typography
        sx={{
          ...interFont,
          fontSize: "18px",
          color: "#FFFFFF",
          marginLeft: "10px !important",
        }}
      >
        {stepData.label}
      </Typography>
      <Typography
        sx={{
          ...interFont,
          fontSize: "14px",
          color: "gray",
          marginLeft: "10px !important",
        }}
      >
        {stepData.date}
      </Typography>
      <Stack direction={"column"} spacing={2.5} pt={2}>
        {stepData.description.map((item: { des: string }, idx: number) => (
          <Stack key={idx} direction={"row"} spacing={1}>
            <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
            <Typography
              sx={{ ...interFont, fontSize: "16px", color: "#FFFFFF" }}
            >
              {item.des}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        [theme.breakpoints.up("md")]: {
          // height: "55vh",
          ...centerItemFlex,
        },
        [theme.breakpoints.up(1080)]: {
          height: "65vh",
        },
        [theme.breakpoints.up(975)]: {
          height: "55vh",
        },
        [theme.breakpoints.between(1910, 1940)]: {
          height: "70vh",
        },
        [theme.breakpoints.between(1024,1245)]: {
          height: "80vh",
        },
      }}
    >
      <Stack direction={"column"} spacing={0} justifyContent={"center"}>
        <Typography sx={{ ...classes.headingFont, textAlign: "start" }}>
          My <span style={{ color: "#ff9710" }}>Resume</span>
        </Typography>
        <Stack direction={isDesktop ? "row" : "column"} spacing={1}>
          <Box>
            <Typography
              gutterBottom
              sx={{
                ...classes.subHeading,
                textAlign: "start",
                marginBottom: "15px !important",
              }}
            >
              Education
            </Typography>
            <Stack
              direction={isDesktop ? "row" : "column"}
              spacing={2}
              width="100%"
            >
              <Stepper
                activeStep={activeStep1}
                connector={null}
                orientation="vertical"
              >
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel
                      StepIconComponent={QontoStepIcon}
                      onClick={() => handleStepChange1(index)}
                      sx={{
                        fontSize: getRelativeFontSize(3),
                        cursor: "pointer",
                        "& .MuiStepLabel-label": {
                          fontFamily: "Poppins-Regular !important",
                          fontWeight: "500px !important",
                          color:
                            activeStep1 === index
                              ? "#54d5d4 !important"
                              : "gray",
                          fontSize: "17px !important",
                          "&:hover": {
                            color: "#54d5d4",
                            cursor: "pointer",
                          },
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Stack
                direction={"column"}
                spacing={1}
                textAlign={"start"}
                pt={2}
              >
                <Typography
                  sx={{
                    ...interFont,
                    fontSize: "18px",
                    color: "#FFFFFF",
                    marginLeft: "10px !important",
                  }}
                >
                  {educationData[activeStep1].label}
                </Typography>
                <Typography
                  sx={{
                    ...interFont,
                    fontSize: "14px",
                    color: "gray",
                    marginLeft: "10px !important",
                  }}
                >
                  {educationData[activeStep1].date}
                </Typography>
                <Stack direction={"column"} spacing={3.5} pt={2}>
                  {educationData[activeStep1].description.map(
                    (item: { des: string }, idx: number) => (
                      <Stack key={idx} direction={"row"} spacing={1}>
                        <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                        <Typography
                          sx={{
                            ...interFont,
                            fontSize: "16px",
                            color: "#FFFFFF",
                          }}
                        >
                          {item.des}
                        </Typography>
                      </Stack>
                    )
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Typography
              gutterBottom
              sx={{
                ...classes.subHeading,
                textAlign: "start",
                marginBottom: "15px !important",
              }}
            >
              Experience
            </Typography>
            <Stack
              direction={isDesktop ? "row" : "column"}
              spacing={2}
              width="100%"
            >
              <Stepper
                activeStep={activeStep2}
                connector={null}
                orientation="vertical"
              >
                {steps1.map((label, index) => (
                  <Step key={index}>
                    <StepLabel
                      StepIconComponent={QontoStepIcon}
                      onClick={() => handleStepChange2(index)}
                      sx={{
                        fontSize: getRelativeFontSize(3),
                        cursor: "pointer",
                        "& .MuiStepLabel-label": {
                          fontFamily: "Poppins-Regular !important",
                          fontWeight: "500px !important",
                          color:
                            activeStep2 === index
                              ? "#54d5d4 !important"
                              : "gray",
                          fontSize: "17px !important",
                          "&:hover": {
                            color: "#54d5d4",
                            cursor: "pointer",
                          },
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {renderStepContent(experienceData[activeStep2])}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Resume;
