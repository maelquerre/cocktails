import React, { useEffect, useMemo, useReducer } from 'react';
import { useCocktailsStorage } from '../hooks';
import { fetchCocktail } from '../domain/cocktails.services';
import { likeCocktail, skipCocktail } from '../domain/cocktails.actions';
import { default as CocktailReducer, initialState } from '../domain/cocktails.reducer';

import CocktailCard from './CocktailCard';

const likeCocktailAction = likeCocktail;
const skipCocktailAction = skipCocktail;

const LIKED_COCKTAILS_IDS_KEY = 'likedCocktailsIds';
const SKIPPED_COCKTAILS_IDS_KEY = 'skippedCocktailsIds';

function App() {
  const [state, dispatch] = useReducer(CocktailReducer, initialState);

  const [likedCocktailsIds, likeCocktail] = useCocktailsStorage({
    key: LIKED_COCKTAILS_IDS_KEY,
    action: likeCocktailAction
  }, []);

  const [skippedCocktailsIds, skipCocktail] = useCocktailsStorage({
    key: SKIPPED_COCKTAILS_IDS_KEY,
    action: skipCocktailAction
  }, []);

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
