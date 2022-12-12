import React from 'react';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps): JSX.Element {
  const { sideBar } = classes;

  return <div className={sideBar}>{children}</div>;
}
