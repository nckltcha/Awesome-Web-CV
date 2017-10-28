import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';

import '../scss/awesome.scss';

import App from './components/app';

ReactDOM.render(
  <IntlProvider locale="en">
    <App/>
  </IntlProvider>,
  document.querySelector('.wrap')
);

