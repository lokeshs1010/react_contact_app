import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";

import { useStyles } from "./styles";
import { generateFakeContactData } from "../contact-list/contacts";
import { NewMessage } from "./NewMessage";

class ContactInfoView extends React.Component {
  state = {
    user: null,
    isModalOpen: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id.toString()) {
      this.getContactInfo(id);
    }
  }

  getContactInfo(id) {
    let contactData = JSON.parse(window.localStorage.getItem("contactData"));

    if (!contactData) {
      contactData = generateFakeContactData();
    }

    this.setState({ user: contactData[id] });
  }

  handleClickOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleClose = otp => {
    this.setState({ isModalOpen: false });
    if (otp) {
      this.saveMessageSent(otp);
      this.props.history.push("/message-sent-list");
    }
  };

  saveMessageSent = otp => {
    let messageSentData =
      JSON.parse(window.localStorage.getItem("messageSentData")) || "";

    if (!messageSentData) {
      messageSentData = [];
    }

    messageSentData.push({
      ...this.state.user,
      time: new Date().toLocaleString(),
      otp
    });

    localStorage.setItem("messageSentData", JSON.stringify(messageSentData));
  };

  render() {
    const { classes } = this.props;
    const { user, isModalOpen } = this.state;

    if (!user) {
      return (
        <Paper className={classes.paper}>
          <CircularProgress />
        </Paper>
      );
    }

    return (
      <>
        <Paper className={classes.paper}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={user.avatar}
                title={user.firstName}
                style={{ height: "250px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  First Name: {user.firstName}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5">
                  Last Name: {user.lastName}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5">
                  Mobile: {user.phoneNumber}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={this.handleClickOpen}
              >
                Send Message
              </Button>
            </CardActions>
          </Card>
        </Paper>
        <NewMessage open={isModalOpen} handleClose={this.handleClose} />
      </>
    );
  }
}

export const ContactInfo = withRouter(withStyles(useStyles)(ContactInfoView));
