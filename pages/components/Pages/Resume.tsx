import {
  Box,
  Container,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepLabel,
  Stepper,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Check } from "@mui/icons-material";
import { commonStyles } from "@/styles/Common.styles";
import { interFont, theme } from "@/styles/styles";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[100] : "#eaeaf0",
    borderTopWidth: 0,
    borderRadius: 1,
  },
  "&.MuiStepConnector-root": {
    marginLeft: "4px",
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: ownerState.active ? "#54d5d4" : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    "& .QontoStepIcon-completedIcon": {
      color: "#54d5d4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
    "&.MuiStepLabel-label": {
      color: ownerState.active ? "#54d5d4" : "#eaeaf0",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const educationData = [
  {
    label: "Select campaign settings",
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
    label: "Select campaign settings",
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

const Resume = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [activeStep1, setActiveStep1] = useState(0);
  const [activeStep2, setActiveStep2] = useState(0);
  const steps = [
    "Degree",
    "Certification",
    "Associates Degree",
    "College",
    "Schooling",
  ];

  const handleStepChange1 = (step: number) => {
    setActiveStep1(step);
  };

  const handleStepChange2 = (step: number) => {
    setActiveStep2(step);
  };

  const renderStepContent = (stepData: any) => (
    <Stack direction={"column"} spacing={1}>
      <Typography
        sx={{
          ...interFont,
          fontSize: "13px",
          color: "#FFFFFF",
        }}
      >
        {stepData.label}
      </Typography>
      <Typography
        sx={{
          ...interFont,
          fontSize: "10px",
          color: "gray",
        }}
      >
        {stepData.date}
      </Typography>
      <Stack direction={"column"} spacing={2}>
        {stepData.description.map((item: { des: string }, idx: number) => (
          <Stack key={idx} direction={"row"} spacing={1}>
            <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
            <Typography
              sx={{ ...interFont, fontSize: "12px", color: "#FFFFFF" }}
            >
              {item.des}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Container maxWidth="lg">
      <Stack direction={"column"} spacing={0} justifyContent={"center"}>
        <Typography sx={{ ...classes.headingFont, textAlign: "start" }}>
          My <span style={{ color: "#ff9710" }}>Resume</span>
        </Typography>
        <Stack direction={isDesktop ? "row" : "column"} spacing={2}>
          <Box>
            <Typography
              gutterBottom
              sx={{
                ...classes.subHeading,
                textAlign: "start",
                marginBottom: "8px !important",
              }}
            >
              Education
            </Typography>
            <Stack
              direction={isDesktop ? "row" : "column"}
              spacing={1}
              width="100%"
            >
              <Stepper
                activeStep={activeStep1}
                nonLinear
                orientation="vertical"
                connector={<QontoConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel
                      StepIconComponent={QontoStepIcon}
                      onClick={() => handleStepChange1(index)}
                      sx={{
                        ...interFont,
                        cursor: "pointer",
                        "& .MuiStepLabel-label": {
                          color:
                            activeStep1 === index
                              ? "#54d5d4 !important"
                              : "#eaeaf0",
                          "&:hover": {
                            color: "#54d5d4",
                          },
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {renderStepContent(educationData[activeStep1])}
            </Stack>
          </Box>
          <Box>
            <Typography
              gutterBottom
              sx={{
                ...classes.subHeading,
                textAlign: "start",
                marginBottom: "8px !important",
              }}
            >
              Experience
            </Typography>
            <Stack
              direction={isDesktop ? "row" : "column"}
              spacing={1}
              width="100%"
            >
              <Stepper
                activeStep={activeStep2}
                nonLinear
                orientation="vertical"
                connector={<QontoConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel
                      StepIconComponent={QontoStepIcon}
                      onClick={() => handleStepChange2(index)}
                      sx={{
                        ...interFont,
                        cursor: "pointer",
                        "& .MuiStepLabel-label": {
                          color:
                            activeStep2 === index
                              ? "#54d5d4 !important"
                              : "#eaeaf0",

                          "&:hover": {
                            color: "#54d5d4",
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
