import { makeStyles } from '@material-ui/core/styles';

export const tableStyles = makeStyles(theme => ({
  table: {
    margin: theme.spacing(1),
    overflowX: "scroll",
    width: "100%",
  }
}));
