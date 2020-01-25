import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import i18n from '.';

storiesOf(
  'I18n usage for different modules usage',
  module
).add('String from common module', () => (
  <span>{i18n.t('common:app.learnReact')}</span>
));
