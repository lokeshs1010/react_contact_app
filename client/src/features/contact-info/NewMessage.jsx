import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import LoopIcon from "@material-ui/icons/Loop";
import Tooltip from "@material-ui/core/Tooltip";

import { messageStyles } from "./styles";
import { genRandomNumber } from "../../utils/utils";

const DialogTitle = withStyles(messageStyles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

// const randomNumber = genRandomNumber();
export const NewMessage = ({ handleClose, open }) => {
  const classes = makeStyles(messageStyles)();
  const [randomNumber, setRandomNumber] = useState(genRandomNumber());
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={() => handleClose(0)}>
          Send Message
        </DialogTitle>
        <DialogContent dividers className={classes.content}>
          <Typography gutterBottom>Hi, Your Otp is {randomNumber}</Typography>
          <Tooltip title="Refresh token">
            <IconButton
              aria-label="refresh"
              className={classes.button}
              onClick={() => setRandomNumber(genRandomNumber())}
            >
              <LoopIcon />
            </IconButton>
          </Tooltip>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleClose(randomNumber)} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
