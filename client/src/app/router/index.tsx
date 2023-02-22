import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { NotFoundPage } from '@pages/notFound';
import { SearchPage } from '@pages/search';
import { Redirect } from './helpers';

export function AppRouter(): React.ReactElement | null {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Redirect onPathEqual="/" to="search" />} />
        <Route path="search/:searchQuery?" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
