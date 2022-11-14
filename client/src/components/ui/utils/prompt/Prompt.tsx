import React, { useState } from 'react';
import { MovieForm } from '../../../blocks';
import { ButtonClose } from '../../button';
import { Modal, Background } from '../../modal';
import { Alert } from '../alert';
import { H2 } from '../../typography/h2';
import { alertMessage } from '../../../../assets/data';
import classes from './Prompt.module.scss';

interface PromptProps {
  title: string;
  handlerButtonClose: () => void;
}

export function Prompt({
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
            <MovieForm handlerAlert={handleStateAlert} />
          </Modal>
        </div>
      )}
      {IsOpenedAlert && (
        <Alert message={alertMessage} handlerButtonClose={handlerButtonClose} />
      )}
    </>
  );
}
