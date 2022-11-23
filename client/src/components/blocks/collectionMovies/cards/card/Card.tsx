import React, { useContext, useState } from 'react';
import { HomePageContext } from '@context/home';
import { Tooltip, Prompt, Confirm, H3, H4 } from '@components/ui';
import { confirmMessage } from '@assets/data';
import { ICard } from './models';
import { getValueYearFrom } from '@helpers/getValueYearFrom';
import { scrollUp } from '@helpers/scrollUp';
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
  const { card, box, img, titleCard } = classes;
  const { title, subtitle, date, image, stateTooltip, id } = data;
  const { isShownTooltip, isShownListOptions } = stateTooltip;

  const [isShownPrompt, setIsShownPrompt] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);

  const setIsShownListOptions = (state: boolean): void => {
    onClickTooltip(id, state);
  };

  const handleClickPrompt = (state: boolean): void => {
    state && scrollUp();
    setIsShownPrompt(state);
    setIsShownListOptions(false);
  };

  const handleClickConfirm = (state: boolean): void => {
    state && scrollUp();
    setIsShownConfirm(state);
    setIsShownListOptions(false);
  };

  const HomePageCtx = useContext(HomePageContext);
  const handleClickImg = (): void => {
    HomePageCtx?.setSelectedMovie(data);
    scrollUp();
  };

  return (
    <>
      <div
        className={card}
        onMouseOver={() => onHover(id, true)}
        onMouseLeave={() => onHover(id, false)}>
        <img
          alt="preview"
          src={image}
          className={img}
          onClick={() => handleClickImg()}
        />
        <div className={box}>
          <H3
            stylesType="primary"
            onClick={() => handleClickImg()}
            parentClasses={titleCard}>
            {title}
          </H3>
          <H4 stylesType="rectangle">{getValueYearFrom(date)}</H4>
        </div>
        <H3 stylesType="small">{subtitle}</H3>
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
