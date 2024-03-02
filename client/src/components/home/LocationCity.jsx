import {
  Container,
  List,
  IconButton,
  ListItem,
  ListItemText,
  Link,
  Tooltip,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { PropTypes } from "prop-types";

const sx = {
  display: "flex",
  justifyContent: "center",
};

export default function LocationCity({ location }) {
  return (
    <Container sx={sx}>
      <List>
        {location.map((item, index) => (
          <ListItem
            divider
            disableGutters
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Link
                  component={"a"}
                  href={`${item.google}`}
                  target="_blank"
                  color={"inherit"}
                >
                  <Tooltip title="view on google maps" arrow>
                    <MapIcon fontSize="large" />
                  </Tooltip>
                </Link>
              </IconButton>
            }
          >
            <ListItemText
              primary={`${item.city}`}
              secondary={`${item.address}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

LocationCity.propTypes = {
  location: PropTypes.array,
};
