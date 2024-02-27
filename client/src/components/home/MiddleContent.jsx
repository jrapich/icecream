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
import { PropTypes } from "prop-types";

const cards = [1, 2, 3];

export default function MiddleContent({ showContent }) {
  const { showMidHeader, showMidContent } = showContent;
  return (
    <Container
    component={"section"}
      disableGutters
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
        <Typography
          paragraph
          variant="h6"
          sx={{
            paddingX: 2,
          }}
        >
          {/*TODO: this is pseudocode. convert this list to something with an MUI component, Icons, etc */}
          {/* can possibly move this to its own fade in component, and click a button to slide the cards below from the right */}
          Introducing a freeze dried range of novelty snacks!
          <div>
            Take your favorite Ice Cream flavors with you on the go, or store
            them for years to come!
          </div>
          <ul>
            Including:
            {/* possibly convert this list into the cards below with images attached */}
            <li>Ice Cream!</li>
            <li>Fudge!</li>
            <li>Salt Water Taffy!</li>
          </ul>
          <div>Perfect for:</div>
          <ul>
            <li>Camping</li>
            <li>Hiking</li>
            <li>Picnics</li>
          </ul>
          <div>
            {/* move this possibly to the bottom of the card images */}
            Feel free to stop by any of our locations(link) to give them a try,
            or use the form here(link) to place an order with us and we&apos;ll
            ship it to you, anywhere in the lower 48.
          </div>
        </Typography>
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
