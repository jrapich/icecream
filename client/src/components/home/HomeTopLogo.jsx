import { Box, Typography, Container } from "@mui/material";

export default function HomeTopLogo() {
  return (
    <Container component={"section"} maxWidth={false} disableGutters>
      <Box
        sx={{
          backgroundImage: "url(/assets/shop.jpg)",
          backgroundSize: "cover",
          backgroundPositionX: "20%",
          backgroundPositionY: "30%",
          backgroundRepeat: "no-repeat",
          height: 400,
        }}
      ></Box>
      <Typography component="h1" variant="h5" align="center">
        <i>Old Fashioned Ice Cream</i>
      </Typography>
      <Typography variant="body2" align="center" paragraph>
        Family owned and operated since 1978!
      </Typography>
    </Container>
  );
}
