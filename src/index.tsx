import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Loader from './Common/components/Loader';
import './Common/i18n';
import App from './Common/routes/App';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <Suspense
    fallback={
      <div className="suspense-loading-view">
        <Loader />
      </div>
    }
  >
    <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
