import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import { RedirectPage } from './redirect-page';
import { HomePage } from '../features/home-page/HomePage';

export const RootNavigator = () => (
    <HomePage>
  <Switch>
    {routes.map((route) => {
      return <Route key={route.path} {...route} />;
    })}
    <RedirectPage />
  </Switch>
  </HomePage>
);