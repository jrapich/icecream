import { Modal, Typography, Box } from "@mui/material";
import { PropTypes } from "prop-types";
import theme from "../../../theme";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: `${theme.palette.secondary.main}`,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SubmitModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <i>Coming Soon</i>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Coming soon!
        </Typography>
      </Box>
    </Modal>
  );
}

SubmitModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
