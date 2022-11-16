import { useEffect } from 'react';

export function useCatchingEventOutsideElement(
  typeEvent: 'mousedown',
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect(() => {
    function handleCatchingEventOutside(event: MouseEvent): void {
      const target = event.target as HTMLElement;
      if (ref.current !== null && !ref.current.contains(target)) {
        callback();
      }
    }

    document.body.addEventListener(typeEvent, handleCatchingEventOutside);
    return () => {
      document.body.removeEventListener(typeEvent, handleCatchingEventOutside);
    };
  }, [ref, callback, typeEvent]);
}
