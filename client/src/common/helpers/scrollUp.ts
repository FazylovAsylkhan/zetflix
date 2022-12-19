let idTimeout: NodeJS.Timeout;

export function scrollUp(): boolean {
  const currentCoordinateYOfScroll = document.documentElement.scrollTop;
  const top = Math.max(0, currentCoordinateYOfScroll);

  if (top > 0) {
    window.scrollBy(0, -100);
    idTimeout = setTimeout(() => scrollUp(), 20);
  } else clearTimeout(idTimeout);

  return false;
}
