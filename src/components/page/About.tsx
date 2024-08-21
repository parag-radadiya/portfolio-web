import { centerItemFlex, getRelativeFontSize, theme } from "../../styles/styles";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import pyush_anand from "../../assets/images/pyush_anand.png";
import { commonStyles } from "./Common.styles";

const About = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="lg" sx={{
      [theme.breakpoints.up("md")]: {
        ...centerItemFlex,
      },
      [theme.breakpoints.up(1080)]: {
        height: "65vh",
      },
      [theme.breakpoints.up(742)]: {
        height: "50vh",
      },
      [theme.breakpoints.up(975)]: {
        height: "55vh",
      },
      [theme.breakpoints.between(1910,1940)]: {
        height: "70vh",
      },
    }}>
      <Stack direction={"column"} spacing={0} alignItems={"self-start"}>
        <Typography sx={classes.headingFont}>
          About{" "}
          <span
            style={{
              color: "#ff9710",
            }}
          >
            Me
          </span>
        </Typography>
        <Typography
          sx={{
            ...classes.subHeading,
            textAlign: "start",
            marginBottom: "20px !important",
          }}
        >
          Pyush Anand
        </Typography>

        <Stack direction={isDesktop ? "row" : "column"} spacing={isDesktop ? 14 :6}>
          <img
            src={pyush_anand.src}
            width={isDesktop ? "220px" : "200px"}
            height={isDesktop ? "220px" : "200px"}
          />
          <Box>
            <Typography
              gutterBottom
              sx={{
                ...classes.headingFont,
                textAlign: "start",
                marginBottom: 3,
                fontSize: getRelativeFontSize(3),
              }}
            >
              Hello, I&apos;m Pyush Anand, a seasoned UX practitioner with over
              8 years of diverse experience in the field. My journey in UX has
              been a fascinating exploration of user-centric design across
              various industries. I specialize in UI/UX and product design,
              where I&apos;ve honed my skills in creating seamless and visually
              captivating digital experiences.
            </Typography>
            <Typography
              sx={{
                ...classes.headingFont,
                textAlign: "start",

                fontSize: getRelativeFontSize(3),
              }}
            >
              My passion lies in understanding users needs, which has driven me
              to excel in crafting interfaces that not only look impressive but
              also prioritize usability. With a track record of transforming
              ideas into successful, user-focused products, I&apos;m dedicated
              to making technology more accessible and enjoyable for all.
              Let&apos;s collaborate to bring your next project to life!&quot;
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
