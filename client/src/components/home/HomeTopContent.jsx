import { Box, Typography, Container } from "@mui/material";
import theme from "../../theme";

export default function HomeTopContent() {
  return (
    <>
      
      <Box
        component={"section"}
        sx={{
          paddingY: 2,
        }}
      >
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
