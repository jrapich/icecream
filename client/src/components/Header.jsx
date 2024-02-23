import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Slide,
  Box,
} from "@mui/material";

export default function Header() {
  

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Slide direction="down" in={true} {...{ timeout: 1500 }}>
          <AppBar position="relative">
            <Toolbar>
              <Container>
                <Typography variant="h5" color="inherit" align="center" noWrap>
                  Header
                </Typography>
              </Container>
            </Toolbar>
          </AppBar>
        </Slide>
      </Box>
    </>
  );
}
