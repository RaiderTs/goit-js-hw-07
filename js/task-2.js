const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


let itemEl = ingredients.forEach((element) => {
  const ulEl = document.querySelector('#ingredients');
  const liEl = document.createElement('li');
  liEl.textContent = element;
  return console.log(ulEl.appendChild(liEl));
})


