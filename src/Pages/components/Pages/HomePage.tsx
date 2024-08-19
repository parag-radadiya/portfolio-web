import { centerItemFlex, primaryColorOrange, theme } from "@/styles/styles";
import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { commonStyles } from "../../../styles/Common.styles";

const HomePage = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        [theme.breakpoints.down("md")]: {
          height: "85vh",
          ...centerItemFlex,
        },
      }}
    >
      <Stack
        direction={"column"}
        spacing={isDesktop ? 5 : 3}
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
