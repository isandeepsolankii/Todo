import { Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { Fragment } from "react";

function TodoDialogBox({
  setOpenDialog,
  todoDetails,
  openDialog,
  setTodoDetails,
}) {
  function handleOnClose() {
    setOpenDialog(false);
    setTodoDetails("Loading..");
  }
  return (
    <Fragment>
      <Dialog onClose={handleOnClose} open={openDialog}>
        <DialogTitle>
          <Typography>{todoDetails.todo}</Typography>
          <Typography>{todoDetails.UserId}</Typography>
        </DialogTitle>
        <Button onClick={handleOnClose}>Close</Button>
      </Dialog>
    </Fragment>
  );
}

export default TodoDialogBox;
