import React, { useState, useEffect } from 'react';
import './styles/main.css';

function App() {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        setCocktail(data.drinks[0]);
        console.log(cocktail);
      });
  }, []);
  return (
    <div>
      {cocktail.strDrink}
    </div>
  );

}

export default App;
