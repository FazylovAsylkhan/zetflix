import React, { useState } from 'react';
import { Modal, Background, ButtonClose, H2, Alert } from 'components/ui';
import { alertMessage } from 'assets/data';
import { MovieForm } from 'components/blocks';
import { ICard } from 'components/blocks/collectionMovies/cards/card';
import classes from './Prompt.module.scss';

interface PromptProps {
  data?: ICard;
  title: string;
  handlerButtonClose: () => void;
}

export function Prompt({
  data,
  handlerButtonClose,
  title,
}: PromptProps): JSX.Element {
  const { prompt, modal, h2 } = classes;
  const [IsOpenedAlert, setIsOpenedAlert] = useState(false);

  const handleStateAlert = (state: boolean): void => {
    setIsOpenedAlert(state);
  };

  return (
    <>
      {!IsOpenedAlert && (
        <div className={prompt}>
          <Background />
          <Modal parentClasses={modal}>
            <ButtonClose onClick={handlerButtonClose} />
            <H2 stylesType="primary" parentClasses={h2}>
              {title}
            </H2>
            <MovieForm data={data} handlerAlert={handleStateAlert} />
          </Modal>
        </div>
      )}
      {IsOpenedAlert && (
        <Alert message={alertMessage} handlerButtonClose={handlerButtonClose} />
      )}
    </>
  );
}
