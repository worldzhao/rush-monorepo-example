import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { sum } from '@rush-monorepo/example-pkg-basic';

import { App } from './app';
import reportWebVitals from './report-web-vitals';

console.log('1 + 1 =', sum(1, 1));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
