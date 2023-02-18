function getUrl(paramName: string, value: string | null | undefined): string {
  const PARAM_LIMITED_ITEMS = 'limit=9';
  const PARAM_SORT_ORDER_DESC = 'sortOrder=desc';
  const PARAM_SORT_BY_RELEASE_DATE = 'sortBy=release_date';
  const PARAM_SEARCH_BY_TITLE = 'searchBy=title';

  if (value === null || value === undefined) {
    return '';
  }

  switch (paramName) {
    case 'genre':
      return `filter=${value}`;
    case 'sorting':
      return `sortBy=${value}`;
    case 'search':
      return `${PARAM_SEARCH_BY_TITLE}&search=${value}`;
    case 'url':
      return `${value}&${PARAM_SORT_ORDER_DESC}&${PARAM_LIMITED_ITEMS}`;
    case 'default':
      return `${PARAM_SORT_BY_RELEASE_DATE}&${PARAM_SORT_ORDER_DESC}&${PARAM_LIMITED_ITEMS}`;
    default:
      throw new Error('Not found paramName');
  }
}

export const getNormalizedUrl = (params: {
  genre: string | null;
  sortBy: string | null;
  search: string | undefined;
}): string => {
  const { genre, sortBy, search } = params;

  const arrUrlParams = [
    getUrl('genre', genre),
    getUrl('search', search),
    getUrl('sorting', sortBy),
  ];

  const url = arrUrlParams.filter((p) => p !== '').join('&');

  if (url !== '' && sortBy === null) {
    return `${getUrl('sorting', 'release_date')}&${getUrl('url', url)}`;
  }

  if (url !== '') {
    return getUrl('url', url);
  }

  return getUrl('default', '');
};
