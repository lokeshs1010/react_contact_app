import React from 'react';
import ListIcon from '@material-ui/icons/List';

import { RedirectPage } from './redirect-page';
import { ContactInfo } from "../features/contact-info/ContactInfo";
import { ContactList } from "../features/contact-list/ContactList";
import { MessageSentList } from "../features/message-sent-list/MessageSentList";

export const routes = [
  {
    path: "/",
    component: RedirectPage,
    exact: true
  },
  {
    path: "/contact-list",
    component: ContactList,
    exact: true,
    title: 'Contact List',
    icon: <ListIcon />
  },
  {
    path: "/message-sent-list",
    component: MessageSentList,
    exact: true,
    title: 'Message Sent List',
    icon: <ListIcon />
  },
  {
    path: "/contact-info/:id",
    component: ContactInfo,
    exact: true
  },
];
