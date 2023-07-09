import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Toaster } from 'react-hot-toast';
import App from './App.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </React.StrictMode>,
);
