// @ts-nocheck

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n';

import Button from '.';

storiesOf('Component Guide', module)
  .addDecorator(story => (
    <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
  ))
  .add('Button Component', () => (
    <Button text="Click" onClick={action('clicked')} />
  ))
  .add('Button Component with disabled', () => (
    <Button text="Click" onClick={action('clicked')} disabled={true} />
  ));
