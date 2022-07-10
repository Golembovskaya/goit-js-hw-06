const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);
console.log(ingredients);

const createElement = ingredients.map((el) => {
  const createEl = document.createElement("li");
  createEl.textContent = el;
  createEl.classList.add("item");
  return createEl;
});

ingredientsEl.append(...createElement);
