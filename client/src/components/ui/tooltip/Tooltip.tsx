import React from 'react';
import { Modal } from '../modal';
import { ButtonClose } from '../button';
import classes from './Tooltip.module.scss';

interface TooltipsProps {
  valueStateListOptions: boolean;
  handlerStateTooltip: (state: boolean) => void;
  handlerStateListOptions: (state: boolean) => void;
  onClickButtonEdit: (state: boolean) => void;
  onClickButtonDelete: (state: boolean) => void;
}

export function Tooltip({
  handlerStateTooltip,
  handlerStateListOptions,
  valueStateListOptions,
  onClickButtonEdit,
  onClickButtonDelete,
}: TooltipsProps): JSX.Element {
  const { tooltips, button, modal, buttonClose } = classes;

  return (
    <div>
      <button
        className={tooltips}
        type="button"
        onMouseOver={() => handlerStateTooltip(true)}
        onClick={() => handlerStateListOptions(true)}>
        <span>...</span>
      </button>
      {valueStateListOptions && (
        <Modal
          onMouseOver={() => handlerStateTooltip(true)}
          parentClasses={modal}>
          <ButtonClose
            parentClasses={buttonClose}
            handlerClick={() => handlerStateListOptions(false)}
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
