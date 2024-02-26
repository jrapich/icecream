import { Box, Typography } from "@mui/material";
import { Header } from "../components";
import theme from "../theme";

export default function Colors() {
  return (
    <Box>
      <Header />
      <Typography variant="h6" sx={{ px: 2 }}>
        main text color &quot;russian violet&quot;
      </Typography>
      <Typography
        variant="h6"
        sx={{ px: 2, color: theme.palette.primary.main }}
      >
        primary color &quot;french mauve&quot;
      </Typography>
      <Typography
        variant="h6"
        sx={{ px: 2, color: theme.palette.secondary.main }}
      >
        secondary color &quot;coral pink&quot;
      </Typography>
      <Typography
        variant="h6"
        sx={{ px: 2, color: theme.palette.tertiary.main }}
      >
        tertiary color &quot;plum&quot;
      </Typography>
      <Typography
        variant="h6"
        sx={{ px: 2, color: theme.palette.background.main }}
      >
        background color &quot;persian pink&quot;
      </Typography>
      <Typography variant="h6" sx={{ px: 2, color: theme.palette.accent.main }}>
        accent color &quot;russian violet&quot;
      </Typography>
    </Box>
  );
}
