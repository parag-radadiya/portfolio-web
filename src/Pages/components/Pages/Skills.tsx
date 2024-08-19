import { primaryColorOrange, theme } from "@/styles/styles";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import productIcon from "../../../assets/icons/productIcon.png";
import uxIcon from "../../../assets/icons/uiIcon.png";
import uiIcon from "../../../assets/icons/uxIcon.png";
import aiIcon from "../../../assets/icons/aiIcon.png";
import psIcon from "../../../assets/icons/psIcon.png";
import figmaIcon from "../../../assets/icons/figmaIcon.png";
import axureIcon from "../../../assets/icons/axureIcon.png";
import xdIcon from "../../../assets/icons/xdIcon.png";
import { commonStyles } from "../../../styles/Common.styles";

const skillsData: any = [
  {
    icon: uiIcon.src,
    title: "UI Design",
    des: "With a strong foundation in user research, I excel in understanding and empathizing with users' needs. I have honed my skills in information architecture, ensuring that content is organized intuitively for easy navigation.",
    icons: [
      { icon: xdIcon.src },
      { icon: figmaIcon.src },
      { icon: aiIcon.src },
      { icon: psIcon.src },
    ],
  },
  {
    icon: uxIcon.src,
    title: "UX Design",
    des: "With a strong foundation in user research, I excel in understanding and empathizing with users' needs. I have honed my skills in information architecture, ensuring that content is organized intuitively for easy navigation.",
    icons: [
      { icon: xdIcon.src },
      { icon: figmaIcon.src },
      { icon: axureIcon.src },
    ],
  },
  {
    icon: productIcon.src,
    title: "Product Design",
    des: "With a strong foundation in user research, I excel in understanding and empathizing with users' needs. I have honed my skills in information architecture, ensuring that content is organized intuitively for easy navigation.",
    icons: [
      { icon: xdIcon.src },
      { icon: figmaIcon.src },
      { icon: axureIcon.src },
    ],
  },
];

const Skills = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="lg"
    >
      <Stack direction={"column"} spacing={1} alignItems={"self-start"}>
        <Typography sx={classes.headingFont}>
          Skills &{" "}
          <span
            style={{
              color: primaryColorOrange,
            }}
          >
            Specialization
          </span>
        </Typography>
        <Typography
          sx={{
            ...classes.subHeading,
            textAlign: "start",
            marginBottom: "20px !important",
          }}
        >
          13+ Years of Experience
        </Typography>
        <Stack direction={isDesktop ? "row" : "column"} spacing={4} mt={4}>
          {skillsData.map((skill: any, index: number) => (
            <Stack direction={"column"} spacing={1.5} key={index}>
              <img
                src={skill.icon}
                alt={skill.title}
                width="33px"
                height="32px"
              />
              <Typography textAlign={"start"} sx={classes.skillTitle}>{skill.title}</Typography>
              <Typography  textAlign={"start"}sx={classes.skillDes}>{skill.des}</Typography>
              <Stack direction={"row"} spacing={2}>
                {skill.icons.map((iconData: any, iconIndex: number) => (
                  <img
                    key={iconIndex}
                    src={iconData.icon}
                    alt={`Icon ${iconIndex}`}
                    width="20px"
                    height="100%"
                  />
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Skills;
