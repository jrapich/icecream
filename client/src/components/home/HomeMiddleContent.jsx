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
} from "@mui/material";
import { PropTypes } from "prop-types";
import theme from "../../theme";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomeMiddleContent({ showContent }) {
  return (
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
        maxWidth="lg"
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
  );
}

HomeMiddleContent.propTypes = {
  showContent: PropTypes.bool,
};
