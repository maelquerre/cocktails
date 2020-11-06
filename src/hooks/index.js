import { useReducer, useState } from 'react';
import { likeCocktail, skipCocktail } from '../domain/cocktails.actions';
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

  const store = cocktail => {
    if (typeof cocktail === 'function') {
      cocktail = cocktail(state.cocktail);
    }

    try {
      window.localStorage.setItem(key, JSON.stringify([
        ...state[key],
        cocktail
      ]));
      dispatch(action(cocktail));
    } catch (error) {
      console.log(error);
    }
  };

  return [state[key], store];
}
