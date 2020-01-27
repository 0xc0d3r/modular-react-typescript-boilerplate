import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import todoAppRoutes from '../../TodoApp/routes'

import Loader from '../components/Loader'

import commonRoutes from './CommonRoutes'

export const routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className='suspense-loading-view'>
          <Loader />
        </div>
      }
    >
      <Switch>
        {todoAppRoutes}
        {commonRoutes}
      </Switch>
    </Suspense>
  </Router>
)
