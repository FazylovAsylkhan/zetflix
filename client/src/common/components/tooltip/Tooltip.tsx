import React from 'react';
import { Modal, ButtonClose } from '@common/components';
import classes from './Tooltip.module.scss';

interface TooltipsProps {
  stateListOption: {
    isShownListOptions: boolean;
    setIsShownListOptions: (state: boolean) => void;
  };
  onClickButtonEdit: (state: boolean) => void;
  onClickButtonDelete: (state: boolean) => void;
}

export function Tooltip({
  stateListOption,
  onClickButtonEdit,
  onClickButtonDelete,
}: TooltipsProps): JSX.Element {
  const { tooltips, button, modal, buttonClose } = classes;
  const { setIsShownListOptions, isShownListOptions } = stateListOption;
  return (
    <div>
      <button
        className={tooltips}
        type="button"
        onClick={() => setIsShownListOptions(true)}>
        <span>...</span>
      </button>
      {isShownListOptions && (
        <Modal parentClasses={modal}>
          <ButtonClose
            parentClasses={buttonClose}
            onClick={() => setIsShownListOptions(false)}
          />
          <button
            type="button"
            className={button}
            onClick={() => onClickButtonEdit(true)}>
            Edit
          </button>
          <button
            type="button"
            className={button}
            onClick={() => onClickButtonDelete(true)}>
            Delete
          </button>
        </Modal>
      )}
    </div>
  );
}
