import { Container, Typography } from "@mui/material";
import ContactForm from "./subcomponents/ContactForm";

export default function BottomContent() {
  return (
    <Container
      component={"section"}
      id={"contact"}
      sx={{
        mt: 4,
      }}
    >
      <Typography variant="body1" paragraph>
        Use the form below to send us order requests for the above items, or any
        other general inquiries you may have. Be sure to include your name,
        email, and shipping address.
      </Typography>
      <ContactForm />
    </Container>
  );
}
