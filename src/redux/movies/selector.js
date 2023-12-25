
// All function components in React are Javascript functions but all Javascript functions are not components.

import {createSelector} from 'reselect';

const moviesSelector = state => state.movies.results
export const getMovies = createSelector([moviesSelector], state => state)