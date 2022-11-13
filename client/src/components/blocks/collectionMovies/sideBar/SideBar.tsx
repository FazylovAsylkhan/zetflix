import React, { useState } from 'react';
import { IMenuItem, Menu, Select } from '../../../ui';
import classes from './SideBar.module.scss';

interface SideBarProps {
  initialMenuItems: IMenuItem[];
  selectOptions: string[];
}

export function SideBar({
  initialMenuItems,
  selectOptions,
}: SideBarProps): JSX.Element {
  const { sideBar, selectForms } = classes;

  const [valueSelectedSorting, setValueSelectedSorting] = useState(
    selectOptions[0]
  );
  const handleClickSorting = (valueSelectedOption: string): void => {
    setValueSelectedSorting(valueSelectedOption);
  };

  return (
    <div className={sideBar}>
      <Menu menuItems={initialMenuItems} />
      <Select
        label="Sort by"
        arrOptions={selectOptions}
        parentClasses={selectForms}
        value={valueSelectedSorting}
        handlerClick={handleClickSorting}
      />
    </div>
  );
}
