import { useState } from "react";
import { Modal, SpeedDial } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Chat from "./Chat";

const ChatMobile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal aria-labelledby="chat-modal" aria-describedby="chat" open={open}>
        <Chat />
      </Modal>
      <SpeedDial
        ariaLabel="Chat speed dial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          sx: {
            position: "fixed",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
          },
        }}
      ></SpeedDial>
    </>
  );
};

export default ChatMobile;
