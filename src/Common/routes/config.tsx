import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import commonRoutes from './CommonRoutes';
// import other modules routes here

import Loader from '../components/Loader';

export const routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="suspense-loading-view">
          <Loader />
        </div>
      }
    >
      <Switch>{commonRoutes}</Switch>
    </Suspense>
  </Router>
);
