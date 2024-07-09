
import { Dashboard } from './pages/Dashboard';
import GlobalStyle from './styles/global';
import './utils/dayjs.js';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Dashboard />
  </React.StrictMode>,
)