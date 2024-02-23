import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { HomeMiddleContent } from "../components";
import theme from "../theme";

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [showContent, setShowContent] = useState(true);

  //set scrollTop state to the number of pixels the user has scrolled from the top
  const handleScroll = () => setScrollTop(window.scrollY);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const actualHeight = pageHeight - windowHeight;
    //percent of the page the user has currently scrolled based on above pixels
    const scrollProgress = 100 * (scrollTop / actualHeight);
    console.log("scrolled from the top:", scrollTop);
    console.log("window height:", windowHeight, "page height:", pageHeight);
    console.log("actual page height:", actualHeight);
    console.log("percent scrolled:", scrollProgress);
    //listener to store the amount scrolled
    window.addEventListener("scroll", handleScroll);
    //TODO: add variable for window width above, to help us detect if user is
    //mobile or not, and adjust the scroll percentage breakpoint as necessary
    //scroll percentage breakpoint
    if (scrollProgress > 30) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
    //useEffect executes every time scrollTop changes, i.e whenever the user scrolls
  }, [scrollTop]);

  return (
    <>
      <section
        style={{
          //arbitrary page height, might need tweaking for mobile/desktop
          height: 4000,
        }}
      >
        <Box
          sx={{
            pt: 4,
            pb: 4,
          }}
        >
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              <i>Welcome</i>
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              paragraph describing your app
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                backgroundColor: "whitesmoke",
                flexWrap: "wrap",
              }}
            >
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
              <Typography
                variant="h6"
                sx={{ px: 2, color: theme.palette.accent.main }}
              >
                accent color &quot;russian violet&quot;
              </Typography>
            </Box>
            <Typography variant="h6" align="center" sx={{ pt: 4 }} paragraph>
              checkout theme.js for customizing your colors!
            </Typography>
            <Stack
              sx={{ pb: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined">Click here</Button>
              <Button variant="outlined">Or Here</Button>
            </Stack>
          </Container>
        </Box>
        <Divider component="div" role="presentation">
          <Typography>fancy divider</Typography>
        </Divider>
        {/* content here will show in middle of the page, 
        will slide from right to left as the user scrolls*/}
        <HomeMiddleContent showContent={showContent} />
      </section>
    </>
  );
}
