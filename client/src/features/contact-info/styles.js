// import { makeStyles } from "@material-ui/core/styles";

export const useStyles = {
  card: {
    maxWidth: 345,
    width: '100%',
    height: 'fit-content'
  },
  media: {
    height: 140
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    height: "80vh",
    width: "100%",
    alignItems: 'center'
  }
};

export const messageStyles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  button: {
    margin: theme.spacing(1),
    padding: '0 !important'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
});
