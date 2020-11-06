export const types = {
  FETCH_COCKTAIL_ERROR: 'FETCH_COCKTAIL_ERROR',
  FETCH_COCKTAIL_PENDING: 'FETCH_COCKTAIL_PENDING',
  FETCH_COCKTAIL_SUCCESS: 'FETCH_COCKTAIL_SUCCESS',
  LIKE_COCKTAIL: 'LIKE_COCKTAIL',
  SKIP_COCKTAIL: 'SKIP_COCKTAIL',
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

export function likeCocktail(cocktail) {
  return {
    type: types.LIKE_COCKTAIL,
    payload: cocktail
  };
}


export function skipCocktail(cocktail) {
  return {
    type: types.SKIP_COCKTAIL,
    payload: cocktail
  };
}
