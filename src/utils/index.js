export function formatCocktail(data) {
  let ingredients = [];

  let i = 1;
  while (data[`strIngredient${i}`]) {
    ingredients.push({
      name: data[`strIngredient${i}`],
      measure: data[`strMeasure${i}`]
    });

    i++;
  }

  return {
    id: data['idDrink'],
    alcoholic: data['strAlcoholic'] === 'Alcoholic',
    ingredients,
    instructions: data['strInstructions'],
    name: data['strDrink'],
    thumbnail: data['strDrinkThumb']
  };
}
