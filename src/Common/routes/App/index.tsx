import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n';

import Routes from '../index';

interface Props {}

class App extends Component<Props> {
  state = { error: null };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return <h1>Send the error to Sentry or any other tool</h1>;
    }

    return (
      <Provider key={i18n.language}>
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </Provider>
    );
  }
}

export default App;
