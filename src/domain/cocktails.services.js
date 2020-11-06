import { fetchCocktailError, fetchCocktailPending, fetchCocktailSuccess } from './cocktails.actions';
import { formatCocktail } from '../utils';

const hasViewedAllCocktails = viewedCocktailsIds => {
  const TOTAL_DRINKS = 604;
  return viewedCocktailsIds.length >= TOTAL_DRINKS;
};

export function fetchCocktail(dispatch, viewedCocktailsIds) {
  dispatch(fetchCocktailPending());

  return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
      if (!hasViewedAllCocktails(viewedCocktailsIds)) {
        if (viewedCocktailsIds.includes(data.drinks[0].idDrink)) {
          return fetchCocktail(dispatch, viewedCocktailsIds);
        } else {
          dispatch(fetchCocktailSuccess(formatCocktail(data.drinks[0])));
        }
      }
    })
    .catch(error => dispatch(fetchCocktailError(error)));
}

export function fetchCocktailById(dispatch, viewedCocktailsIds, cocktailId) {
  dispatch(fetchCocktailPending());

  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchCocktailSuccess(formatCocktail(data.drinks[0])));
    })
    .catch(error => dispatch(fetchCocktailError(error)));
}


