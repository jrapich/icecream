import { Link, Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

function Copyright() {
  return (
    <Box>
      <Typography variant="body2" align="center">
        {"Copyright © "} BJ&apos;s Ice Cream {new Date().getFullYear()}
      </Typography>
      <Link
        color="inherit"
        variant="inherit"
        underline="none"
        href="https://mui.com/"
      >
        <Typography variant="subtitle2" align="center">
          powered by React + Material UI{" "}
        </Typography>
      </Link>{" "}
    </Box>
  );
}

export default function Footer() {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Divider />
      <Copyright />
    </Box>
  );
}
