import { RedirectPage } from './redirect-page';
import { ContactInfo } from "../features/contact-info/ContactInfo";
import { ContactList } from "../features/contact-list/ContactList";
import { CreateContact } from "../features/create-contact/CreateContact";
import { MessageSentList } from "../features/message-sent-list/MessageSentList";
import { NewMessage } from "../features/new-message/NewMessage";

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
    title: 'Contact List'
  },
  {
    path: "/create-contact",
    component: CreateContact,
    exact: true,
    title: 'Create Contact'
  },
  {
    path: "/message-sent-list",
    component: MessageSentList,
    exact: true,
    title: 'Message Sent List'
  },
  {
    path: "/contact-info/:id",
    component: ContactInfo,
    exact: true,
    title: 'Contact Info'
  },
  {
    path: "/new-message/:id",
    component: NewMessage,
    exact: true,
    title: 'New Message'
  }
];
