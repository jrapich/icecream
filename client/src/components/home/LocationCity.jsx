import {
  Container,
  List,
  IconButton,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
                  {/* input a map icon here for each map type, google/apple/openstreetmap */}
                  <Link component={"a"} href={`${item.google}`} target="_blank" color={"inherit"}>
                    <DeleteIcon />
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
