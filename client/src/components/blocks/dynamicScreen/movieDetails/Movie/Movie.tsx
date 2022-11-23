import React from 'react';
import { ICard } from '@components/blocks';
import { H2, H3, H4, P } from '@components/ui';
import { getValueYearFrom } from '@helpers/getValueYearFrom';
import { formateToHoursAndMinutes } from '@helpers/formateToHoursAndMinutes';
import classes from './Movie.module.scss';

interface MovieProps {
  data: ICard;
}

export function Movie({ data }: MovieProps): JSX.Element {
  const { movie, box, header, row, img, description, mr50, mr20 } = classes;
  const { image, title, subtitle, date, runtime, overview, rating } = data;
  const year = getValueYearFrom(date);
  const formattedRuntime = formateToHoursAndMinutes(runtime);

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
          <H4 stylesType="red">{formattedRuntime}</H4>
        </div>
        <P parentClasses={description}>{overview}</P>
      </div>
    </div>
  );
}
