import { centerItemFlex, theme } from "../../styles/styles";
import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import email from "../../assets/icons/mail.png";
import location from "../../assets/icons/location.png";
import phone from "../../assets/icons/phone.png";
import map from "../../assets/images/map.png";
import { commonStyles } from "./Common.styles";

const contactInfo: any = [
  {
    icon: email.src,
    title: "pyush.anand7@gmail.com",
  },
  {
    icon: phone.src,
    title: "+91 9643006703",
  },
  {
    icon: location.src,
    title: " 123 Main Street New Delhi, Delhi 110001 India",
  },
];

const Contact = () => {
  const classes = commonStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        [theme.breakpoints.down("sm")]: {
          height: "80vh",
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
        [theme.breakpoints.between(768, 780)]: {
          height: "85vh",
        },
        [theme.breakpoints.down("md")]: {
          ...centerItemFlex,
        },
        [theme.breakpoints.up("md")]: {
          paddingBottom: 60,

        },
        [theme.breakpoints.between(1024, 1245)]: {
          ...centerItemFlex,
          height: "80vh",
        },
      }}
    >
      <Stack direction={"column"} spacing={0}>
        <Typography sx={{ ...classes.headingFont, textAlign: "start" }}>
          Get in{" "}
          <span
            style={{
              color: "#ff9710",
            }}
          >
            Touch{" "}
          </span>
        </Typography>
        <Typography
          gutterBottom
          sx={{
            ...classes.subHeading,
            textAlign: "start",
            marginBottom: "20px !important",
          }}
        >
          Let&apos;s start a project together!
        </Typography>
        <Stack
          direction={isDesktop ? "row" : "column"}
          spacing={8}
          alignItems={isDesktop ? "center" : "start"}
        >
          <Stack direction={"column"} spacing={isDesktop ? 4 : 2}>
            {contactInfo.map((i: any, index: number) => {
              return (
                <Stack
                  direction={"row"}
                  spacing={3}
                  alignItems={"center"}
                  key={index}
                >
                  <img src={i.icon} width={"25px"} height={"auto"} />
                  <Typography textAlign="start" sx={classes.contactInfo}>
                    {i.title}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
          <img src={map.src} width={isDesktop ? "50%" : "100%"} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;
