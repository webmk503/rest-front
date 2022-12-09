import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginRoute } from './routes';
import { ErrorPage } from './routes/NotFound';
import { TablesView } from '../tables/TablesView';
import { StatisticsView } from '../statistics/StatisticsView';

export const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginRoute />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/tables',
      element: <TablesView />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/statistics',
      element: <StatisticsView />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
