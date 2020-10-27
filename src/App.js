import React, { useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from './hooks';
import { fetchCocktail } from './domain/cocktails.services';
import { default as CocktailReducer, initialState } from './domain/cocktails.reducer';

import CocktailCard from './components/CocktailCard';

function App() {
  const [state, dispatch] = useReducer(CocktailReducer, initialState);
  const [likedCocktailsIds, setLikedCocktailsIds] = useLocalStorage('likedCocktailsIds', []);
  const [skippedCocktailsIds, setSkippedCocktailsIds] = useLocalStorage('skippedCocktailsIds', []);

  const likeCocktail = cocktailId => {
    setLikedCocktailsIds(likedCocktailsIds => [...likedCocktailsIds, cocktailId]);
  };

  const skipCocktail = cocktailId => {
    setSkippedCocktailsIds(skippedCocktailsIds => [...skippedCocktailsIds, cocktailId]);
  };

  const viewedCocktailsIds = useMemo(() => {
    return likedCocktailsIds.concat(skippedCocktailsIds);
  }, [likedCocktailsIds, skippedCocktailsIds]);

  useEffect(() => {
    fetchCocktail(dispatch, viewedCocktailsIds);
  }, [viewedCocktailsIds]);

  return (
    <div>
      <CocktailCard
        cocktail={state.cocktail}
        isLoading={state.pending}
        onLike={likeCocktail}
        onSkip={skipCocktail}
      />
    </div>
  );
}

export default App;
