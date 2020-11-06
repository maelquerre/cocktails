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
          <div style={{ display: 'flex' }}>
            <div>
              <img
                alt=""
                src={cocktail.thumbnail}
                style={{ width: '16rem' }}
              />
            </div>
            <div>
              <div>
                <h2>{cocktail.name} {cocktail.alcoholic && <small>(ALCOHOLIC)</small>}</h2>
                <button onClick={() => onLike(cocktail.id)}>LIKE</button>
                <button onClick={() => onSkip(cocktail.id)}>SKIP</button>
              </div>

              <div>
                Ingredients:
                <ul>
                  {cocktail.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>
                        {ingredient.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>}
    </>
  );
}
