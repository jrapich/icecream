import { Box, Typography, Container } from "@mui/material";
import theme from "../../theme";

export default function HomeTopContent() {
  return (
    <>
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
      <Box
        component={"section"}
        sx={{
          paddingY: 2,
        }}
      >
        <Typography component="h1" variant="h5" align="center">
          <i>Old Fashioned Ice Cream</i>
        </Typography>
        <Typography variant="body2" align="center" paragraph>
          Family owned and operated since 1978!
        </Typography>
        <Container
          component={"div"}
          disableGutters
          maxWidth={"disabled"}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "whitesmoke",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url(/assets/four-scoops.jpeg)",
              backgroundSize: "cover",
              backgroundPositionY: "40%",
              backgroundRepeat: "no-repeat",
              height: 600,
              width: "56.25%",
            }}
          ></Box>
          <Box>
            <Typography variant="h6" sx={{ px: 2 }}>
              48+ Flavors
            </Typography>
            <Typography
              variant="h6"
              sx={{ px: 2, color: theme.palette.primary.main }}
            >
              Homemade Ice Cream
            </Typography>
            <Typography
              variant="h6"
              sx={{ px: 2, color: theme.palette.secondary.main }}
            >
              Fresh Ingredients
            </Typography>
            <Typography
              variant="h6"
              sx={{ px: 2, color: theme.palette.tertiary.main }}
            >
              Locally Owned
            </Typography>
            <Typography
              variant="h6"
              sx={{ px: 2, color: theme.palette.background.main }}
            >
              10+ Oregon Coast Locations
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
