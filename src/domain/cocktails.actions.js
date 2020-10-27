export const types = {
  FETCH_COCKTAIL_ERROR: 'FETCH_COCKTAIL_ERROR',
  FETCH_COCKTAIL_PENDING: 'FETCH_COCKTAIL_PENDING',
  FETCH_COCKTAIL_SUCCESS: 'FETCH_COCKTAIL_SUCCESS'
};

export function fetchCocktailError(error) {
  return {
    type: types.FETCH_COCKTAIL_ERROR,
    error
  };
}

export function fetchCocktailPending() {
  return {
    type: types.FETCH_COCKTAIL_PENDING
  };
}

export function fetchCocktailSuccess(cocktail) {
  return {
    type: types.FETCH_COCKTAIL_SUCCESS,
    payload: cocktail
  };
}
