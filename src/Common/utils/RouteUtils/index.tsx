// @ts-nocheck
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { HOME_SCREEN_PATH } from '../../constants/NavigationConstants';

interface RouteParams {
  component: any;
  [x: string]: any;
}

function isLoggedIn(): boolean {
  // implement your logic here
  return false;
}

export const getQueryStringValue = (location: any, key: string) =>
  // NOTE: Kept eslint-disable as we are not sure if this code breaks
  decodeURIComponent(
    location.search.replace(
      new RegExp(
        `^(?:.*[&\\?]${encodeURIComponent(key).replace(
          /[\.\+\*]/g, // eslint-disable-line
          '\\$&'
        )}(?:\\=([^&]*))?)?.*$`,
        'i'
      ),
      '$1'
    )
  );

export const AuthCheckRoute = ({
  component: Component,
  ...other
}: RouteParams) => {
  const renderComponent = (props: { location: any }) => {
    if (isLoggedIn() === false) {
      return <Component {...props} {...other} />;
    }
    return (
      <Redirect
        to={{
          pathname: HOME_SCREEN_PATH,
          state: { from: props.location }
        }}
      />
    );
  };
  return <Route {...other} render={renderComponent} />;
};

export const ProtectedRoute = ({
  component: Component,
  ...other
}: RouteParams) => {
  const renderComponent = (props: { location: any }) => {
    if (isLoggedIn()) {
      return <Component {...props} {...other} />;
    }
    if (getQueryStringValue(props.location, 'token')) {
      return (
        <Redirect {...props} {...other}>
          <Component {...props} {...other} />
        </Redirect>
      );
    }
    return (
      <Redirect
        to={{
          pathname: HOME_SCREEN_PATH,
          state: { from: props.location }
        }}
      />
    );
  };
  return <Route {...other} render={renderComponent} />;
};

export const ReactRoute = ({ component: Component, ...other }: RouteParams) => {
  const renderComponent = props => {
    if (!isLoggedIn() && getQueryStringValue(props.location, 'token')) {
      return (
        <Redirect {...props} {...other}>
          <Component {...props} {...other} />
        </Redirect>
      );
    }
    return <Component {...props} {...other} />;
  };
  return <Route {...other} render={renderComponent} />;
};
