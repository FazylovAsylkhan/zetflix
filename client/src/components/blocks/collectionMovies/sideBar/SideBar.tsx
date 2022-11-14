import React, { useState } from 'react';
import { IMenuItem, Menu, Select, ISelect } from '../../../ui';
import classes from './SideBar.module.scss';

interface SideBarProps {
  menu: IMenuItem[];
  select: ISelect;
}

export function SideBar({ menu, select }: SideBarProps): JSX.Element {
  const { sideBar, selectForms } = classes;
  const initialValueSelectedSorting = select.listOptions[0];

  const [valueSelectedSorting, setValueSelectedSorting] = useState(
    initialValueSelectedSorting
  );

  const handleClickSorting = (valueSelectedOption: string): void => {
    setValueSelectedSorting(valueSelectedOption);
  };

  return (
    <div className={sideBar}>
      <Menu menuItems={menu} />
      <Select
        data={select}
        parentClasses={selectForms}
        value={valueSelectedSorting}
        onClick={handleClickSorting}
      />
    </div>
  );
}
