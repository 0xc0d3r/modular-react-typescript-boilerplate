import React, { lazy } from 'react'

import { TODOS_PAGE_PATH, TODOS_PAGE } from '../constants/NavigationConstants'

import { ReactRoute } from '../../Common/utils/RouteUtils'

const TodosPage = lazy(() => import('./TodosPage'))

const routes = [
  <ReactRoute path={TODOS_PAGE_PATH} key={TODOS_PAGE} component={TodosPage} />
]

export default routes
