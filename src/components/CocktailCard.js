import React from 'react';

export default function CoctailCard({ cocktail }) {
  return (
    <div>
      <div>
        <img src={thumbnail} alt=""/>
      </div>
      <div>
        <h2>{name}</h2>
        <div>
          {ingredients.map(ingredient => {
            return (
              <div>
                <div>{ingredient.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}