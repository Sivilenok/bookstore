import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { GlobalStyles } from './ui';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </React.StrictMode>
);
