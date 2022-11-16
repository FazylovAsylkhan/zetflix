import {
  DROPDOWN,
  INPUT_DATE,
  INPUT_TEXT,
  TEXTAREA,
} from '../../components/blocks/shared/movieForm/fields/field/models';
import img1 from '../images/previewMovies/1.jpg';
import img2 from '../images/previewMovies/2.jpg';
import img3 from '../images/previewMovies/3.jpg';
import img4 from '../images/previewMovies/4.jpg';
import img5 from '../images/previewMovies/5.jpg';
import img6 from '../images/previewMovies/6.jpg';

const cards = [
  {
    id: 1,
    title: 'Pulp Fiction',
    subtitle: 'Crime, Drama',
    overview:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
    rating: '8.9',
    date: '10/14/1994',
    runtime: '154',
    image: img1 as string,
    stateTooltip: {
      isShownListOptions: false,
      isShownTooltip: false,
    },
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    subtitle: 'Drama, Biography, Music',
    overview:
      'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    rating: '7.9',
    date: '10/24/2018',
    runtime: '134',
    image: img2 as string,
    stateTooltip: {
      isShownListOptions: false,
      isShownTooltip: false,
    },
  },
  {
    id: 3,
    title: 'Kill Bill: Vol 2',
    subtitle: 'Action, Crime, Thriller',
    overview:
      "The murderous Bride is back and she is still continuing her vengeance quest against her ex-boss, Bill, and taking aim at Bill's younger brother Budd and Elle Driver, the only survivors from the squad of assassins who betrayed her four years earlier. It's all leading up to the ultimate confrontation with Bill, the Bride's former master and the man who ordered her execution!",
    rating: '8.0',
    date: '06/18/2004',
    runtime: '137',
    image: img3 as string,
    stateTooltip: {
      isShownListOptions: false,
      isShownTooltip: false,
    },
  },
  {
    id: 4,
    title: 'Avengers: War of Infinity',
    subtitle: 'Action, Adventure, Sci-Fi',
    overview:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.',
    rating: '8.4',
    date: '04/27/2018',
    runtime: '149',
    image: img4 as string,
    stateTooltip: {
      isShownListOptions: false,
      isShownTooltip: false,
    },
  },
  {
    id: 5,
    title: 'Inception',
    subtitle: 'Action, Adventure, Sci-Fi',
    overview:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    rating: '8.8',
    date: '07/16/2010',
    runtime: '148',
    image: img5 as string,
    stateTooltip: {
      isShownListOptions: false,
      isShownTooltip: false,
    },
  },
  {
    id: 6,
    title: 'Reservoir dogs',
    subtitle: 'Crime, Thriller',
    overview:
      "Six thugs, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop.",
    rating: '8.3',
    date: '10/8/1992',
    runtime: '99',
    image: img6 as string,
    stateTooltip: {
      isShownListOptions: false,
      isShownTooltip: false,
    },
  },
];

const menuItems = [
  { isActive: true, value: 'all' },
  { isActive: false, value: 'Documentary' },
  { isActive: false, value: 'Comedy' },
  { isActive: false, value: 'Horror' },
  { isActive: false, value: 'crime' },
];

const selectOptions = ['release date', 'popularity', 'random', 'alphabetical'];

export const dataCollectionMovies = {
  selectSorting: { labelText: 'Sort by', listOptions: selectOptions },
  menu: menuItems,
  cards,
};

const defaultGenres = [
  { isChecked: false, value: 'Crime' },
  { isChecked: false, value: 'Documentary' },
  { isChecked: false, value: 'Horror' },
  { isChecked: false, value: 'Comedy' },
  { isChecked: false, value: 'Action' },
  { isChecked: false, value: 'Adventure' },
  { isChecked: false, value: 'Drama' },
  { isChecked: false, value: 'Biography' },
  { isChecked: false, value: 'Music' },
  { isChecked: false, value: 'Thriller' },
  { isChecked: false, value: 'Sci-Fi' },
];

export const MovieFormFields = [
  {
    title: 'title',
    placeholder: 'Name',
    componentType: INPUT_TEXT as typeof INPUT_TEXT,
  },
  {
    title: 'RELEASE DATE',
    placeholder: 'Select Date',
    componentType: INPUT_DATE as typeof INPUT_DATE,
  },
  {
    title: 'movie url',
    placeholder: 'https://',
    componentType: INPUT_TEXT as typeof INPUT_TEXT,
  },
  {
    title: 'RATING',
    placeholder: '7.8',
    componentType: INPUT_TEXT as typeof INPUT_TEXT,
  },
  {
    title: 'GENRE',
    placeholder: 'Select Genre',
    defaultGenres,
    componentType: DROPDOWN as typeof DROPDOWN,
  },
  {
    title: 'RUNTIME',
    placeholder: 'minutes',
    componentType: INPUT_TEXT as typeof INPUT_TEXT,
  },
  {
    title: 'OVERVIEW',
    componentType: TEXTAREA as typeof TEXTAREA,
  },
];

export const confirmMessage = {
  title: 'Delete Movie',
  description: 'Are you sure you want to delete this movie?',
  textButton: 'confirm',
};

export const alertMessage = {
  title: 'congratulations !',
  description: 'The movie has been added to database successfully ',
};
