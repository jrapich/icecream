import {
  Box,
  Button,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";

export default function ContactForm() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
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
            sx={{
              margin: 2,
            }}
            variant="contained"
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
