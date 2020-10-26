function formatCocktail(data) {
  let ingredients = [];
  let i = 1;
  while (data[`strIngredient${i}`]) {
    ingredients.push({
      name : data[`strIngredient${i}`],
      measure : data[`strMeasure${i}`],
    })
  }
}