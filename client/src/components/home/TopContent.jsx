import {
  Box,
  Typography,
  Container,
  Zoom,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { PropTypes } from "prop-types";
//import theme from "../../theme";

import imageList from "../../utils/imageList";

const content = (
  <Container
    maxWidth={"lg"}
    sx={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      //flexWrap: "wrap",
      paddingY: 2,
    }}
  >
    <Box
      sx={{
        backgroundImage: "url(/assets/four-scoops.jpeg)",
        backgroundSize: "cover",
        backgroundPositionY: "40%",
        backgroundRepeat: "no-repeat",
        height: 600,
        width: "56.25%",
      }}
    ></Box>
    <Box
      sx={{
        height: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" sx={{ px: 2, pt: 1 }}>
        48+ Flavors
      </Typography>
      <Typography variant="h6" sx={{ px: 2 }}>
        Homemade Ice Cream
      </Typography>
      <Typography variant="h6" sx={{ px: 2 }}>
        Fresh Ingredients
      </Typography>
      <Typography variant="h6" sx={{ px: 2 }}>
        Salt Water Taffy
      </Typography>
      <Typography variant="h6" sx={{ px: 2 }}>
        10+ Oregon Coast Locations
      </Typography>
    </Box>
  </Container>
);

const wovenImageList = (
  <Container
    maxWidth={"lg"}
    sx={{
      paddingY: 2,
    }}
  >
    <ImageList
      sx={{ width: "100%", height: 800 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {imageList.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Container>
);

export default function TopContent({ showContent }) {
  return (
    <Box
      component={"section"}
      sx={{
        paddingY: 2,
        backgroundColor: "whitesmoke",
      }}
    >
      <Zoom
        in={showContent}
        appear
        {...(showContent ? { timeout: 1000 } : { timeout: 500 })}
      >
        {content}
      </Zoom>
      {wovenImageList}
    </Box>
  );
}

TopContent.propTypes = {
  showContent: PropTypes.bool,
};
