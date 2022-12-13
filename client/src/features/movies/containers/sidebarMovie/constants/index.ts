const menuGenres = [
  { isActive: true, value: 'all' },
  { isActive: false, value: 'Documentary' },
  { isActive: false, value: 'Comedy' },
  { isActive: false, value: 'Horror' },
  { isActive: false, value: 'crime' },
];

export enum SelectOptions {
  RELEASE_DATE = 'release date',
  POPULARITY = 'popularity',
  BUDGET = 'budget',
  VOTE_COUNT = 'vote count',
}
const selectOptions = [
  SelectOptions.RELEASE_DATE,
  SelectOptions.POPULARITY,
  SelectOptions.BUDGET,
  SelectOptions.VOTE_COUNT,
];

export const dataSidebarMovie = {
  menuGenres,
  select: {
    labelText: 'SORT BY',
    listOptions: selectOptions,
  },
};
