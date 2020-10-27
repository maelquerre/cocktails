import React from 'react';

export default function CocktailCard({ cocktail, isLoading, onLike, onSkip }) {
  return (
    <>
      {isLoading ?
        <div>
          Loading...
        </div>
        : !cocktail ?
          <div>No cocktail</div>
          :
          <div>
            <div>
              <img src={cocktail.thumbnail} alt="" />
            </div>
            <div>
              <div>
                <h2>{cocktail.name} {cocktail.alcoholic && <small>(ALCOHOLIC)</small>}</h2>
                <button onClick={() => onLike(cocktail.id)}>LIKE</button>
                <button onClick={() => onSkip(cocktail.id)}>SKIP</button>
              </div>

              <div>
                Ingredients:
                {cocktail.ingredients.map((ingredient, index) => {
                  return (
                    <div key={index}>
                      <div>{ingredient.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>}
    </>
  );
}
