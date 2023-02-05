import { Fab, IconButton, Modal, Tooltip, Typography,styled } from "@mui/material";
import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
})

const Add = () => {
    const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick ={() =>setOpen(true) }
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={2}>
          <Typography textAlign="center" variant="h6" color="gray" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
