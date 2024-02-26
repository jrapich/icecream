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
      component={"header"}
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Slide direction="down" in={true} {...{ timeout: 1500 }}>
          <AppBar component={"div"} position="relative">
            <Toolbar>
              <Container>
                <Typography variant="h6" color="inherit" align="center" noWrap>
                  <i>BJ&apos;s Ice Cream</i>
                </Typography>
              </Container>
            </Toolbar>
          </AppBar>
        </Slide>
      </Box>
    </>
  );
}
