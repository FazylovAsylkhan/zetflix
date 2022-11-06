import React from 'react';
import { Heading, CLASSNAME_H3 } from '../../../../ui';
import { ICard } from './models';
import classes from './Card.module.scss';

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
