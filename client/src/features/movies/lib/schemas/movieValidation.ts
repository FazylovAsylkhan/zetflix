import * as yup from 'yup';

enum NamesFields {
  TITLE_MOVIE = 'title',
  URL_IMAGE = 'poster_path',
  RUNTIME = 'runtime',
  RATING = 'vote_average',
  GENRE = 'genres',
  RELEASE_DATE = 'release_date',
  OVERVIEW = 'overview',
}

const REGEX_DATE_RULES = /\d{4}-\d{2}-\d{2}/;
const REGEX_RATING_RULES = /^((10|\d)(\.\d)?)$/;
const REGEX_RUNTIME_RULES = /^(\d{1,3})$/;

export const movieValidation = yup.object().shape({
  [NamesFields.TITLE_MOVIE]: yup
    .string()
    .required('Please enter a title of movie'),
  [NamesFields.RELEASE_DATE]: yup
    .string()
    .matches(REGEX_DATE_RULES, 'Should be in iso format')
    .required('Please select a date'),
  [NamesFields.URL_IMAGE]: yup
    .string()
    .url()
    .required('Please enter a url of image'),
  [NamesFields.RATING]: yup
    .string()
    .matches(REGEX_RATING_RULES, 'Rating should be in range 0-10'),
  [NamesFields.GENRE]: yup.string().required('Please select a genre'),
  [NamesFields.RUNTIME]: yup
    .string()
    .matches(REGEX_RUNTIME_RULES, 'Runtime should be in range 0-999'),
  [NamesFields.OVERVIEW]: yup.string(),
});
