import type { NextPage } from "next";
import { useEffect, useState, memo } from "react";
import {
  Box,
  Stack,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import bannerBg1 from "../assets/images/bannerBg.jpg";
import bannerBg2 from "../assets/images/bg2.jpg";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import behance from "../assets/icons/behance.png";
import AppHeader from "./components/shared/AppHeader/AppHeader";
import HomePage from "./components/Pages/HomePage";
import Skills from "./components/Pages/Skills";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import {
  centerItemFlex,
  defaultBoxShadow,
  primaryColor,
  theme,
} from "@/styles/styles";

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

const Home: NextPage = () => {
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
          backgroundColor: "#1D2551",
          backgroundImage: `url(${backgroundImages[activeStep]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          maxHeight: "100vh",
          overflow: isDesktop ? "hidden" : "scroll",
          padding: 3,
          [theme.breakpoints.down("md")]: {
            padding: 0,
            height: "100vh",
          },
        }}
      >
        <Stack
          direction={"column"}
          justifyContent="start"
          alignItems="center"
          spacing={6}
          width="100%"
        >
          <Stack
            direction={"row"}
            justifyContent="space-around"
            alignItems="center"
            spacing={isDesktop ? 6 : 0}
            width="100%"
            p={"30px"}
          >
            {isDesktop && <SocialIcons />}
            <TestimonialSection activeStep={activeStep} />
            <StepperComponent
              activeStep={activeStep}
              handleStepChange={handleStepChange}
            />
          </Stack>
          <Typography sx={{ color: "#FFFFFF", fontSize: "16px", padding: 2 }}>
            {`© Pyush Anand ${new Date().getFullYear()}.`}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
