import React from 'react';
import { H2, H3, H4, P } from '@common/components';
import { getValueYearFrom } from '@features/movies/helpers/getValueYearFrom';
import classes from './Movie.module.scss';
import { IMovie } from '@features/movies/api';
import { formateToHoursAndMinutes } from '@features/movies/helpers';
import { formateBudget } from '@features/movies/helpers/fomateBudget';

interface MovieProps {
  data: IMovie;
}

export function Movie({ data }: MovieProps): JSX.Element {
  const { movie, box, header, row, img, description, mr50, mr20 } = classes;
  const {
    poster_path: image,
    title,
    tagline: subtitle,
    release_date: date,
    runtime,
    overview,
    vote_average: rating,
    budget,
  } = data;

  const year = getValueYearFrom(date);
  const formattedRuntime = formateToHoursAndMinutes(runtime);
  const formattedBudget = formateBudget(budget);

  return (
    <div className={movie}>
      <img className={img} src={image} alt="movie preview" />
      <div className={box}>
        <div className={header}>
          <div className={row}>
            <H2 parentClasses={mr20}>{title}</H2>
            <H4 stylesType="circle">{rating}</H4>
          </div>
          <H3 stylesType="small">{subtitle}</H3>
        </div>
        <div className={row}>
          <H4 parentClasses={mr50} stylesType="red">
            {year}
          </H4>
          <H4 parentClasses={mr50} stylesType="red">
            {formattedRuntime}
          </H4>
          <H4 stylesType="red">{formattedBudget}</H4>
        </div>
        <P parentClasses={description}>{overview}</P>
      </div>
    </div>
  );
}
