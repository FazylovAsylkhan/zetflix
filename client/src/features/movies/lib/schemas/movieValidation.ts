import * as yup from 'yup';
import { NamesFields } from '@features/movies/containers/shared/formMovie/models';

const REGEX_TITLE_RULES = /^[A-Z]\w*$/;
const REGEX_DATE_RULES = /\d{4}-\d{2}-\d{2}/;
const REGEX_RATING_RULES = /^((10|\d)(\.\d)?)$/;
const REGEX_RUNTIME_RULES = /^(\d{1,3})$/;

export const movieValidation = yup.object().shape({
  [NamesFields.TITLE_MOVIE]: yup
    .string()
    .max(15, "Count of symbols shouldn't be more 15")
    .matches(REGEX_TITLE_RULES, 'The first letter must be in upper case')
    .required('Please enter a title of movie'),
  [NamesFields.RELEASE_DATE]: yup
    .string()
    .matches(REGEX_DATE_RULES, 'Should be in iso format')
    .required('Please select a date'),
  [NamesFields.URL_IMAGE]: yup
    .string()
    .url('Not valid url')
    .required('Please enter a url of image'),
  [NamesFields.RATING]: yup
    .string()
    .matches(REGEX_RATING_RULES, 'Rating should be in range 0-10'),
  [NamesFields.GENRE]: yup.string().required('Please select a genre'),
  [NamesFields.RUNTIME]: yup
    .string()
    .matches(REGEX_RUNTIME_RULES, 'Runtime should be in range 0-999'),
  [NamesFields.OVERVIEW]: yup
    .string()
    .max(500, "Overview shouldn't be more 500 symbols"),
});
