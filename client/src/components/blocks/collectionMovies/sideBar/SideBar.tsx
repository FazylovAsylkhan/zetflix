import React from 'react';
import { IMenuItem, Menu, Select } from '../../../ui';
import classes from './SideBar.module.scss';

interface SideBarProps {
  initialMenuItems: IMenuItem[];
  selectOptions: string[];
}

function SideBar({
  initialMenuItems,
  selectOptions,
}: SideBarProps): JSX.Element {
  const { sideBar, box, selectForms } = classes;

  return (
    <div className={sideBar}>
      <Menu menuItems={initialMenuItems} />
      <div className={box}>
        <span>Sort by</span>
        <Select arrOptions={selectOptions} parentClasses={selectForms} />
      </div>
    </div>
  );
}

export default SideBar;
