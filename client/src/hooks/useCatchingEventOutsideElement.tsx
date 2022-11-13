import { useEffect } from 'react';

export function useCatchingOutsideElement(
  typeEvent: 'mousedown',
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      const target = event.target as HTMLElement;
      if (ref.current !== null && !ref.current.contains(target)) {
        callback();
      }
    }

    document.body.addEventListener(typeEvent, handleClickOutside);
    return () => {
      document.body.removeEventListener(typeEvent, handleClickOutside);
    };
  }, [ref, callback, typeEvent]);
}
