import { Box, Typography, Container, Fade } from "@mui/material";

const logo = (
    <Box
      sx={{
        backgroundImage: "url(/assets/shop.jpg)",
        backgroundSize: "cover",
        backgroundPositionX: "20%",
        backgroundPositionY: "30%",
        backgroundRepeat: "no-repeat",
        height: 600,
      }}
    ></Box>
);

const logo2 = (
    <Typography component="h1" variant="h5" align="center">
      <i>Old Fashioned Ice Cream</i>
    </Typography>
    
);

const logo3 = (
    <Typography variant="body2" align="center" paragraph>
      Family owned and operated since 1978!
    </Typography>
);


export default function HomeTopLogo() {
  return (
    <Container component={"section"} maxWidth={false} disableGutters>
      <Fade in appear timeout={2000}>{logo}</Fade>
      <Fade in appear timeout={4000}>{logo2}</Fade>
      <Fade in appear timeout={8000}>{logo3}</Fade>
    </Container>
  );
}
