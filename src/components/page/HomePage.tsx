import { centerItemFlex, primaryColorOrange, theme } from "../../styles/styles";
import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { commonStyles } from "./Common.styles";

const HomePage = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        ...centerItemFlex,
        [theme.breakpoints.down("md")]: {
          height: "70vh",
        },
        [theme.breakpoints.up(1080)]: {
          height: "65vh",
        },
        [theme.breakpoints.up(742)]: {
          height: "50vh",
        },
        [theme.breakpoints.up(556)]: {
          height: "55vh",
        },
        [theme.breakpoints.between(1910, 1940)]: {
          height: "70vh",
        },
      }}
    >
      <Stack
        direction={"column"}
        spacing={isDesktop ? 6 : 3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography sx={classes.headingFont}>
          Hello there! I&apos;m{" "}
          <span
            style={{
              color: primaryColorOrange,
            }}
          >
            Pyush Anand,
          </span>
        </Typography>
        <Typography sx={classes.subHeading}>
          A UX Practitioner on a Mission to Craft <br /> Exceptional User
          Experiences.
        </Typography>
        <Button sx={classes.btnStyle}>Download Resume</Button>
      </Stack>
    </Container>
  );
};

export default HomePage;
