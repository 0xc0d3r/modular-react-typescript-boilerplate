import React, { lazy } from 'react';

import {
  HOME_SCREEN_PATH,
  NOT_FOUND_PAGE_PATH
} from '../constants/NavigationConstants';

import { ReactRoute } from '../utils/RouteUtils/';

const HomePage = lazy(() => import('./HomePage'));

const PageNotFound404 = lazy(() => import('./PageNotFound404'));

const routes = [
  <ReactRoute
    exact
    path={HOME_SCREEN_PATH}
    key={'HOME_SCREEN'}
    component={HomePage}
  />,
  <ReactRoute path="*" key={NOT_FOUND_PAGE_PATH} component={PageNotFound404} />
];

export default routes;
