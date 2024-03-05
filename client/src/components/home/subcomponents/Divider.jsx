import { Box, Divider, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const dividerSX = {
  py: 1,
  mt: 4,
};

export default function Divider1({ content }) {
  return (
    <Box sx={{ pt: 2 }}>
      <Divider component="div" role="presentation" sx={dividerSX}>
        <Typography component={"h2"} variant="h3">
          {`${content}`}
        </Typography>
      </Divider>
    </Box>
  );
}

Divider1.propTypes = {
  content: PropTypes.string,
};
