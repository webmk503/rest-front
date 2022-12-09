import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginRoute } from './routes';
import { ErrorPage } from './routes/NotFound';

export const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginRoute />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
