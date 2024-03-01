import { Modal, Box } from "@mui/material";
import { PropTypes } from "prop-types";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "75%",
  width: "75%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
  m: 0,
};

const imageStyle = {
  height: "100%",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
  padding: 0,
  margin: 0,
  objectFit: "contain",
};

export default function ImageModal({ imageNumber, handleClose, imageList }) {
  let open;
  if (imageNumber) {
    open = true;
  } else if (imageNumber === 0) {
    open = true;
  } else {
    imageNumber = 0;
    open = false;
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      keepMounted
    >
      <Box sx={modalStyle}>
        <img
          style={imageStyle}
          srcSet={`${imageList[imageNumber].img}`}
          src={`${imageList[imageNumber].img}`}
          alt={imageList[imageNumber].title}
        />
      </Box>
    </Modal>
  );
}

ImageModal.propTypes = {
  imageNumber: PropTypes.number,
  handleClose: PropTypes.func,
  imageList: PropTypes.array,
};
