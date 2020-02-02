import React from 'react';
import MessageIcon from '@material-ui/icons/Message';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

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
    icon: <ContactPhoneIcon />
  },
  {
    path: "/message-sent-list",
    component: MessageSentList,
    exact: true,
    title: 'Message Sent List',
    icon: <MessageIcon />
  },
  {
    path: "/contact-info/:id",
    component: ContactInfo,
    exact: true
  },
];
