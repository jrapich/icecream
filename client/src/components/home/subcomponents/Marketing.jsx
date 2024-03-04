import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import HikingIcon from "@mui/icons-material/Hiking";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";

import imageList from "../../../utils/imageList";

const image = (
  <img
    style={{
      objectFit: "contain",
      maxHeight: "100%",
      maxWidth: "100%",
    }}
    srcSet={`${imageList[8].img}`}
    src={`${imageList[8].img}`}
    alt={`${imageList[8].title}`}
    loading="lazy"
  />
);

export default function Marketing() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" paragraph>
          Introducing our freeze dried range of novelty snacks!
        </Typography>
        <Typography sx={{
            paddingY: 2,
        }} >
            Take your favorite Ice Cream flavors with you on the go, or store
            them for years to come!
        </Typography>
      </Box>
      {/* first list */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          my: 10
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            pl: 4,
          }}
        >
          <Box
            sx={{
              height: 200,
              width: 200,
              pr:2,
            }}
          >
            {image}
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="Ice Cream!" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Fudge!" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Salt Water Taffy!" />
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* second list */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          my:10
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            pr: 4,
          }}
        >
          <Box
            sx={{
              height: 200,
              width: 200,
              pr:2,
            }}
          >
            {image}
          </Box>
          <List>
            Perfect for:
            <ListItem disablePadding>
              <ListItemIcon>
                <FireplaceIcon />
              </ListItemIcon>
              <ListItemText primary="Camping" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <HikingIcon />
              </ListItemIcon>
              <ListItemText primary="Hiking" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <TableRestaurantIcon />
              </ListItemIcon>
              <ListItemText primary="Picnics" />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Typography variant="h6" paragraph>
        Feel free to stop by any of our locations(link) to give them a try, or
        use the form here(link) to place an order with us and we&apos;ll ship it
        to you, anywhere in the lower 48
      </Typography>
    </Box>
  );
}
