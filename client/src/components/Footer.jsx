import { Link, Box, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      BJ&apos;s Ice Cream {new Date().getFullYear()}
      <Link color="inherit" variant="inherit" underline="none" href="https://mui.com/">
        <Typography variant="subtitle2" align="center">powered by React + Material UI </Typography>
      </Link>{" "}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <Box sx={{ p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </Box>
    </>
  );
}
