import React from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";

import { tableStyles } from "../contact-list/styles";

export const MessageSentList = () => {
  const classes = tableStyles();
  let messageSentData = JSON.parse(window.localStorage.getItem("messageSentData")) || [];

  return (
    <Paper className={classes.table}>
      <MaterialTable
        title="Message Sent List"
        columns={[
          { title: "First Name", field: "firstName" },
          { title: "Last Name", field: "lastName" },
          { title: "Time", field: "time", defaultSort: "desc" },
          { title: "Otp", field: "otp" }
        ]}
        data={messageSentData}
        options={{
          pageSize: 5,
          sorting: true
        }}
      />
    </Paper>
  );
};
