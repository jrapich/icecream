import { Box, Typography, Container, Zoom } from "@mui/material";
import { PropTypes } from "prop-types";
import theme from "../../theme";

const content = (
  <Container
    maxWidth={"lg"}
    sx={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "whitesmoke",
      //flexWrap: "wrap",
      paddingY: 2,
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
    <Box
      sx={{
        height: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" sx={{ px: 2, pt: 1 }}>
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
        Salt Water Taffy
      </Typography>
      <Typography
        variant="h6"
        sx={{ px: 2, color: theme.palette.background.main }}
      >
        10+ Oregon Coast Locations
      </Typography>
    </Box>
  </Container>
);

export default function TopContent({showContent}) {
  return (
    <Box
      component={"section"}
      sx={{
        paddingY: 2,
      }}
    >
      <Zoom in={showContent} appear {...(showContent ? { timeout: 1000 } : { timeout: 500 })} >
        {content}
      </Zoom>
    </Box>
  );
}

TopContent.propTypes = {
  showContent: PropTypes.bool,
};
