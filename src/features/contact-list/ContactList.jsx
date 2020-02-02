import React from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
import { useHistory } from 'react-router-dom'

import { tableStyles } from "./styles";
import { generateFakeContactData } from "./contacts";

const contactData = generateFakeContactData();
export const ContactList = () => {
  const classes = tableStyles();
  const browserhistory = useHistory();
  
  return (
    <Paper className={classes.table}>
      <MaterialTable
        title="Contact List"
        columns={[
          {
            title: 'Avatar',
            field: 'avatar',
            render: rowData => (
              <img
                style={{ height: 36, borderRadius: '50%' }}
                src={rowData.avatar}
                alt={rowData.firstName}
              />
            ),
          },
          { title: "First Name", field: "firstName" },
          { title: "Last Name", field: "lastName" },
          { title: "Phone Number", field: "phoneNumber" }
        ]}
        data={contactData}
        options={{
          pageSize: 10,
          actionsColumnIndex: 4
        }}
        actions={[
          {
            icon: "info",
            tooltip: "Show Info",
            onClick: (event, rowData) => browserhistory.push(`/contact-info/${rowData.id}`)
          }
        ]}
      />
    </Paper>
  );
};
