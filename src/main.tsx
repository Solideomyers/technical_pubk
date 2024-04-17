import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { NextuiProviders } from './providers/NextuiProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextuiProviders>
      <RouterProvider router={router} />
    </NextuiProviders>
  </React.StrictMode>
);
