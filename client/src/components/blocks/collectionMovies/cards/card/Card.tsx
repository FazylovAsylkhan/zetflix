import React, { useState } from 'react';
import { Tooltip, Prompt, Confirm, H3 } from 'components/ui';
import { confirmMessage } from 'assets/data';
import { ICard } from './models';
import { getYear } from '../model';
import classes from './Card.module.scss';

interface CardProps {
  data: ICard;
  onHover: (id: number, isShownTooltip: boolean) => void;
  onClickTooltip: (id: number, isOpenedModalSettings: boolean) => void;
}

export function Card({
  data,
  onHover,
  onClickTooltip,
}: CardProps): JSX.Element {
  const { card, box, img, digits, genre } = classes;
  const { title, subtitle, date, image, stateTooltip, id } = data;
  const { isShownTooltip, isShownListOptions } = stateTooltip;
  const [isShownPrompt, setIsShownPrompt] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);

  const setIsShownListOptions = (state: boolean): void => {
    onClickTooltip(id, state);
  };

  const handleClickPrompt = (state: boolean): void => {
    setIsShownPrompt(state);
    setIsShownListOptions(false);
  };

  const handleClickConfirm = (state: boolean): void => {
    setIsShownConfirm(state);
    setIsShownListOptions(false);
  };

  return (
    <>
      <div
        className={card}
        onMouseOver={() => onHover(id, true)}
        onMouseLeave={() => onHover(id, false)}>
        <img alt="preview" src={image} className={img} />
        <div className={box}>
          <H3 stylesType="primary">{title}</H3>
          <span className={digits}>{getYear(date)}</span>
        </div>
        <h3 className={genre}>{subtitle}</h3>
        {isShownTooltip && (
          <Tooltip
            isShownListOptions={isShownListOptions}
            setIsShownListOptions={setIsShownListOptions}
            onClickButtonEdit={handleClickPrompt}
            onClickButtonDelete={handleClickConfirm}
          />
        )}
      </div>

      {isShownPrompt && (
        <Prompt
          data={data}
          title="Edit movie"
          handlerButtonClose={() => handleClickPrompt(false)}
        />
      )}

      {isShownConfirm && (
        <Confirm
          message={confirmMessage}
          handlerButtonClose={() => handleClickConfirm(false)}
        />
      )}
    </>
  );
}
