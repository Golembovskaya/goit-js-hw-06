const navCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${navCategories.length}`);

navCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
