import React, { useEffect } from 'react';
import { joinClasses } from '@helpers/joinClasses';
import classes from './Loader.module.scss';

interface LoaderProps {
  parentClasses?: string;
  isWithBlockingWindow?: boolean;
}

export function Loader({
  parentClasses,
  isWithBlockingWindow = false,
}: LoaderProps): JSX.Element {
  const { loader, wrapper, title, dot1, dot2, dot3, spinner, disableScroll } =
    classes;

  useEffect(() => {
    let callback = (): void => {};
    if (isWithBlockingWindow) {
      window.scroll({ top: 0, left: 0 });
      const bodyClassList = document.body.classList;
      bodyClassList.add(disableScroll);
      callback = () => {
        bodyClassList.remove(disableScroll);
      };
    }

    return () => callback();
  });

  return (
    <div className={joinClasses(parentClasses, loader)}>
      <div className={wrapper}>
        <h3 className={title}>
          Loading <span className={dot1}>.</span>
          <span className={dot2}>.</span>
          <span className={dot3}>.</span>
        </h3>
        <div className={spinner} />
      </div>
    </div>
  );
}
