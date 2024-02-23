import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Slide,
} from "@mui/material";
import theme from "../theme";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleScroll = () => setScrollTop(window.scrollY);
  

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const actualHeight = pageHeight - windowHeight;
    const scrollProgress = 100 * (scrollTop / actualHeight);
    console.log("scrolltop:", scrollTop);
    console.log("window height:", windowHeight, "page height:", pageHeight);
    console.log("actual height:", actualHeight);
    console.log("percent scrolled:", scrollProgress);
    window.addEventListener("scroll", handleScroll);
    
    if (scrollProgress > 30) {
      setShowContent(true);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop]);
  return (
    <>
      <section style={{
        height: 4000,
      }} >
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
        <Slide
          direction="left"
          in={showContent}
          mountOnEnter
          unmountOnExit
          {...(showContent ? { timeout: 1000 } : { timeout: 500 })}
        >
          <Container
            sx={{
              paddingTop: 2,
              paddingBottom: 4,
            }}
            maxWidth="md"
          >
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: 0.5,
                      borderRadius: 10,
                      borderColor: theme.palette.tertiary.main,
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                        backgroundSize: "cover",
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Card Name
                      </Typography>
                      <Typography>Card Description</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">view</Button>
                      <Button size="small">edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Slide>
      </section>
    </>
  );
}
