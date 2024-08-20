import type { NextPage } from "next";
import { useEffect, useState, memo } from "react";
import {
  Box,
  Container,
  Stack,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import bannerBg1 from "../../assets/images/bannerBg.png";
import bannerBg2 from "../../assets/images/bg2.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import behance from "../../assets/icons/behance.png";
import {
  centerItemFlex,
  defaultBoxShadow,
  primaryColor,
  theme,
} from "../../styles/styles";
import HomePage from "../../components/page/HomePage";
import Skills from "../../components/page/Skills";
import About from "../../components/page/About";
import Resume from "../../components/page/Resume";
import Projects from "../../components/page/Projects";
import Contact from "../../components/page/Contact";
import AppHeader from "../../components/shared/AppHeader/AppHeader";

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  backgroundColor: ownerState.active ? "#FFFFFF" : "#B0B0B0", // White when active, gray otherwise
  color: "#000",
  width: "16px",
  height: ownerState.active ? "40px" : "16px",
  display: "flex",
  borderRadius: ownerState.active ? "12px" : "50%",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: ownerState.active ? "30px" : "8px",
    width: "8px",
  },
}));

const ColorlibStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    />
  );
};

const SocialIcons = memo(() => {
  const icons = [facebook, instagram, linkedin, behance];
  return (
    <Stack
      direction={"column"}
      spacing={4}
      sx={{
        ...centerItemFlex,
        width: "52px",
        height: "214px",
        backgroundColor: primaryColor,
        boxShadow: defaultBoxShadow,
        borderRadius: "18px",
      }}
    >
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={`social-icon-${index}`}
          width="20px"
          style={{
            filter: "grayscale(100%)", // Default image appearance
            transition: "filter 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter =
              "grayscale(0%) sepia(1) hue-rotate(130deg) saturate(10) brightness(1.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "grayscale(100%)";
          }}
        />
      ))}
    </Stack>
  );
});

SocialIcons.displayName = "SocialIcons";

// TestimonialSection Component
const TestimonialSection = memo(({ activeStep }: { activeStep: number }) => {
  const components = [
    <HomePage key="home" />,
    <Skills key="skills" />,
    <About key="about" />,
    <Resume key="resume" />,
    <Contact key="contact" />,
    <Projects key="projects" />,
  ];

  return <>{components[activeStep]}</>;
});

TestimonialSection.displayName = "TestimonialSection";

// StepperComponent Component
const StepperComponent = ({
  activeStep,
  handleStepChange,
}: {
  activeStep: number;
  handleStepChange: (step: number) => void;
}) => {
  const steps = [1, 2, 3, 4, 5, 6];
  return (
    <Stepper
      activeStep={activeStep}
      nonLinear
      orientation="vertical"
      connector={null}
    >
      {steps.map((label, index) => (
        <Step key={index} sx={{ padding: 0, cursor: "pointer" }}>
          <StepLabel
            StepIconComponent={ColorlibStepIcon}
            onClick={() => handleStepChange(index)}
            role="button"
            tabIndex={0}
          />
        </Step>
      ))}
    </Stepper>
  );
};

const backgroundImages = [
  bannerBg1.src,
  bannerBg2.src,
  bannerBg2.src,
  bannerBg2.src,
  bannerBg2.src,
  bannerBg2.src,
];

const MainPage = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);

    // Smooth scroll to the corresponding section
    const sectionId = [
      "home",
      "skill",
      "about",
      "resume",
      "contact",
      "project",
    ][step];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box>
      <AppHeader setActiveStep={setActiveStep} />
      <Box
        sx={{
          ...centerItemFlex,
          backgroundImage: `url(${backgroundImages[activeStep]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "auto",
          color: "white",
          [theme.breakpoints.down("lg")]: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "auto",
          },
          [theme.breakpoints.down("sm")]: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "auto",
          },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={"column"}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "100px 0px",
              [theme.breakpoints.down("lg")]: {
                margin: "0px",
              },
              [theme.breakpoints.down("md")]: {
                marginTop: 10,
              },
            }}
          >
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems="center"
              spacing={isDesktop ? 6 : 0}
              width="100%"
            >
              {isDesktop && <SocialIcons />}
              <TestimonialSection activeStep={activeStep} />
              <StepperComponent
                activeStep={activeStep}
                handleStepChange={handleStepChange}
              />
            </Stack>
            <Typography sx={{ color: "#FFFFFF", fontSize: "16px", padding: 4 }}>
              {`© Pyush Anand ${new Date().getFullYear()}.`}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default MainPage;
