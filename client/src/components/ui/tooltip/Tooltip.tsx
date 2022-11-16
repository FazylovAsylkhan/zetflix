import React from 'react';
import { Modal, ButtonClose } from 'components/ui';
import classes from './Tooltip.module.scss';

interface TooltipsProps {
  isShownListOptions: boolean;
  setIsShownListOptions: (state: boolean) => void;
  onClickButtonEdit: (state: boolean) => void;
  onClickButtonDelete: (state: boolean) => void;
}

export function Tooltip({
  setIsShownListOptions,
  isShownListOptions,
  onClickButtonEdit,
  onClickButtonDelete,
}: TooltipsProps): JSX.Element {
  const { tooltips, button, modal, buttonClose } = classes;

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
