import { useReducer } from 'react';
import { default as CocktailReducer, initialState } from '../domain/cocktails.reducer';

export function useCocktailsStorage({ key, action }, initialValue) {
  const [state, dispatch] = useReducer(CocktailReducer, {
    ...initialState,
    [key]: (() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    })()
  });

  const store = cocktailId => {
    if (typeof cocktailId === 'function') {
      cocktailId = cocktailId(state.cocktail);
    }

    try {
      window.localStorage.setItem(key, JSON.stringify([
        ...state[key],
        cocktailId
      ]));
      dispatch(action(cocktailId));
    } catch (error) {
      console.log(error);
    }
  };

  return [state[key], store];
}
