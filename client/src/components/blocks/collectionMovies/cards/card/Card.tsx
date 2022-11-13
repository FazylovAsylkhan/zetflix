import React, { useState } from 'react';
import { ICard } from './models';
import { Tooltip, Prompt, Confirm, H3 } from '../../../../ui';
import classes from './Card.module.scss';
import { confirmMessage } from '../../../../../assets/data';

interface CardProps {
  data: ICard;
  onChangeStateTooltips: (id: number, isShownTooltips: boolean) => void;
  onChangeStateModalSettings: (
    id: number,
    isOpenedModalSettings: boolean
  ) => void;
}

export function Card({
  data,
  onChangeStateTooltips,
  onChangeStateModalSettings,
}: CardProps): JSX.Element {
  const { card, box, img, digits, genre } = classes;
  const { title, subtitle, date, image, stateTooltip, id } = data;
  const { isShownTooltips, isOpenedModalSettings } = stateTooltip;
  const [isOpenedModalEdit, setIsOpenedModalEdit] = useState(false);
  const [isOpenedModalDelete, setIsOpenedModalDelete] = useState(false);

  const handleChangingStateTooltips = (stateTooltips: boolean): void => {
    onChangeStateTooltips(id, stateTooltips);
  };

  const handleChangingStateModalSettings = (
    stateModalSettings: boolean
  ): void => {
    onChangeStateModalSettings(id, stateModalSettings);
  };

  const handlerClickButtonEdit = (stateModalEdit: boolean): void => {
    setIsOpenedModalEdit(stateModalEdit);
    handleChangingStateModalSettings(false);
  };

  const handlerClickButtonDelete = (stateModalDelete: boolean): void => {
    setIsOpenedModalDelete(stateModalDelete);
    handleChangingStateModalSettings(false);
  };

  return (
    <>
      <div
        className={card}
        onMouseLeave={() => handleChangingStateTooltips(false)}>
        <img
          alt="preview"
          src={image}
          className={img}
          onMouseOver={() => handleChangingStateTooltips(true)}
          onMouseLeave={() => handleChangingStateTooltips(false)}
        />
        <div className={box}>
          <H3 stylesType="primary">{title}</H3>
          <span className={digits}>{date}</span>
        </div>
        <h3 className={genre}>{subtitle}</h3>
        {isShownTooltips && (
          <Tooltip
            valueStateListOptions={isOpenedModalSettings}
            onClickButtonEdit={handlerClickButtonEdit}
            onClickButtonDelete={handlerClickButtonDelete}
            handlerStateListOptions={handleChangingStateModalSettings}
            handlerStateTooltip={handleChangingStateTooltips}
          />
        )}
      </div>

      {isOpenedModalEdit && (
        <Prompt
          title="Edit movie"
          handlerButtonClose={() => handlerClickButtonEdit(false)}
        />
      )}

      {isOpenedModalDelete && (
        <Confirm
          message={confirmMessage}
          handlerButtonClose={() => handlerClickButtonDelete(false)}
        />
      )}
    </>
  );
}
