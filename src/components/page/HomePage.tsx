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
        [theme.breakpoints.down("sm")]: {
          height: "80vh",
        },
        [theme.breakpoints.up(1080)]: {
          height: "60vh",
        },
        [theme.breakpoints.up(600)]: {
          height: "75vh",
        },
        [theme.breakpoints.between(1910, 1940)]: {
          height: "70vh",
        },
        [theme.breakpoints.between(768, 780)]: {
          height: "85vh",
        },
        [theme.breakpoints.between(1024, 1245)]: {
          height: "80vh",
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
