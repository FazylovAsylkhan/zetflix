import React from 'react';
import Menu, { IMenuItem } from './menu';
import RadioDropdown from './radioDropdown';
import classes from './SideBar.module.scss';

interface SideBarProps {
  initialMenuItems: IMenuItem[];
  initialDropdownItems: string[];
}

function SideBar({
  initialMenuItems,
  initialDropdownItems,
}: SideBarProps): JSX.Element {
  const { sideBar } = classes;

  return (
    <div className={sideBar}>
      <Menu menuItems={initialMenuItems} />
      <RadioDropdown radioDropdownItems={initialDropdownItems} />
    </div>
  );
}

export default SideBar;
