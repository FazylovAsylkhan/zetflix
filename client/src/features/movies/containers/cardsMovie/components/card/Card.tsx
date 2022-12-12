import React from 'react';
import { H3, H4 } from '@common/components';
import { getValueYearFrom } from '@features/movies/helpers';
import classes from './Card.module.scss';
import { IMovie } from '@features/movies/api';

interface CardProps {
  children: React.ReactNode;
  dataMovie: IMovie;
  handlerClickImgOrTitle: () => void;
  onHover: (isShownTooltip: boolean) => void;
}

export function Card({
  children,
  dataMovie,
  onHover,
  handlerClickImgOrTitle,
}: CardProps): JSX.Element {
  const { card, row, img, titleCard } = classes;
  const {
    title,
    genres,
    release_date: date,
    poster_path: imageUrl,
  } = dataMovie;

  return (
    <div
      className={card}
      onMouseOver={() => onHover(true)}
      onMouseLeave={() => onHover(false)}>
      <img
        alt="preview"
        src={imageUrl}
        className={img}
        onClick={handlerClickImgOrTitle}
      />
      <div className={row}>
        <H3
          stylesType="primary"
          onClick={handlerClickImgOrTitle}
          parentClasses={titleCard}>
          {title}
        </H3>
        <H4 stylesType="rectangle">{getValueYearFrom(date)}</H4>
      </div>
      <H3 stylesType="small">{genres.join(', ')}</H3>
      {children}
    </div>
  );
}
