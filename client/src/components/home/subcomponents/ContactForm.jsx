import {
  Box,
  Button,
  Container,
  TextField,
  //InputAdornment,
} from "@mui/material";
import { useState } from "react";
import SubmitModal from "../modals/SubmitModal";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm" sx={{
    }} >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "20%",
          pb: 4,
        }}
      >
        <TextField
          variant="outlined"
          label="Your Name Here"
          sx={{
            pr: 1,
          }}
          //   InputProps={{
          //     startAdornment: <InputAdornment position="start" >name: </InputAdornment>,
          //   }}
          // InputProps={{
          //     endAdornment: <InputAdornment position="end" >name: </InputAdornment>,
          // }}
        />
        <TextField
          variant="outlined"
          label="Your Email Here"
          sx={{
            pl: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          height: "80%",
        }}
      >
        <TextField
          variant="outlined"
          label="enter your order info here"
          fullWidth
          multiline
          minRows={6}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleOpen}
            sx={{
              margin: 2,
            }}
            variant="contained"
          >
            SUBMIT
          </Button>
          <SubmitModal open={open} handleClose={handleClose} />
        </Box>
      </Box>
    </Container>
  );
}
