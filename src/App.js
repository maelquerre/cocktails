import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { formatCocktail } from './utils';
import CocktailCard from './components/CocktailCard';

function App() {
  const TOTAL_DRINKS = 604;

  const [cocktail, setCocktail] = useState(null);
  const [likedCocktailsIds, setLikedCocktailsIds] = useState([]);
  const [skippedCocktailsIds, setSkippedCocktailsIds] = useState([]);

  const likeCocktail = cocktailId => {
    setLikedCocktailsIds(likedCocktailsIds => [...likedCocktailsIds, cocktailId]);
  };

  const skipCocktail = cocktailId => {
    setSkippedCocktailsIds(skippedCocktailsIds => [...skippedCocktailsIds, cocktailId]);
  };

  const viewedCocktails = useMemo(() => {
    return likedCocktailsIds.concat(skippedCocktailsIds);
  }, [likedCocktailsIds, skippedCocktailsIds]);

  const hasViewedAllCocktails = useMemo(() => {
    return viewedCocktails.length >= TOTAL_DRINKS;
  }, [viewedCocktails]);

  const fetchCocktail = useCallback(() => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        if (!hasViewedAllCocktails) {
          if (viewedCocktails.includes(data.drinks[0].idDrink)) {
            return fetchCocktail();
          } else {
            setCocktail(formatCocktail(data.drinks[0]));
          }
        }
      });
  }, [viewedCocktails]);

  useEffect(() => {
    fetchCocktail();
  }, [viewedCocktails]);

  return (
    <div>
      {cocktail &&
      <CocktailCard
        cocktail={cocktail}
        onLike={likeCocktail}
        onSkip={skipCocktail}
      />}
    </div>
  );

}

export default App;
