import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationCity from "./LocationCity";

import locations from "../../utils/locations";


export default function Locations() {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Where To Find Us
        </AccordionSummary>
        <AccordionDetails>
          <LocationCity location={locations.home} />
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          margin: 2,
        }}
      ></Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Where To Find BJ&apos;s Icecream
        </AccordionSummary>
        <AccordionDetails>
          Coming Soon!
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
