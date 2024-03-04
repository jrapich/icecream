import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Slide,
  Fade,
} from "@mui/material";
import Marketing from "./subcomponents/Marketing";
import { PropTypes } from "prop-types";

const cards = [1, 2, 3];

export default function MiddleContent({ showContent }) {
  const { showMidHeader, showMidContent } = showContent;
  return (
    <Container
    component={"section"}
      sx={{
        paddingTop: 2,
        paddingBottom: 4,
      }}
      maxWidth="lg"
    >
      <Fade
      in={showMidHeader}
      appear
      >
        <Container maxWidth={"lg"}>
          <Marketing />
        </Container>
      </Fade>
      <Slide
        direction="left"
        in={showMidContent}
        unmountOnExit
        {...(showMidContent ? { timeout: 1000 } : { timeout: 500 })}
      >
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 10,
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
                    Product Name
                  </Typography>
                  <Typography>Product Description</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">$9.99</Button>
                  <Button size="small">Order Here</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Slide>
    </Container>
  );
}

MiddleContent.propTypes = {
  showContent: PropTypes.object,
};
