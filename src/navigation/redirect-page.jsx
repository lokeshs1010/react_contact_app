import * as React from 'react';
import { Redirect } from 'react-router-dom';

export const RedirectPage = () => {
  return <Redirect to={{ pathname: '/contact-list' }} />;
};