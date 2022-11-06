/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Heading } from '../../../../ui';
import { CLASSNAME_H3 } from '../../../../ui/heading/consts';
import classes from './Card.module.scss';
import { ICard } from './models';

interface CardProps {
  data: ICard;
}

function Card({ data }: CardProps): JSX.Element {
  const { card, box, img, digits, genre } = classes;
  const { title, subtitle, date, image } = data;
  return (
    <div className={card}>
      <img alt="preview" src={image} className={img} />
      <div className={box}>
        <Heading stylesType={CLASSNAME_H3}>{title}</Heading>
        <span className={digits}>{date}</span>
      </div>
      <h3 className={genre}>{subtitle}</h3>
    </div>
  );
}

export default Card;
