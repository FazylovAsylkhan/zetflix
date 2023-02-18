import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const Redirect = ({
  onPathEqual,
  to,
}: {
  onPathEqual: string;
  to: string;
}): JSX.Element | null => {
  const location = useLocation();

  return location.pathname === onPathEqual ? <Navigate to={to} /> : null;
};
