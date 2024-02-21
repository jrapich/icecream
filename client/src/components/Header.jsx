import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Container, Slide } from "@mui/material";

export default function Header() {
  const [grow, setGrow] = useState(false);
  useEffect(() => {
    setGrow(true);
  }, []);

  return (
    <>
      <Slide direction="down" in={grow} {...(grow ? { timeout: 1000 } : {})}>
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
    </>
  );
}
