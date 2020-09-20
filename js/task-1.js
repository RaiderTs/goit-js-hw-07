const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);

document.querySelectorAll('.item').forEach(elem => {
  const amountEl = elem.getElementsByTagName('li');
  console.log(
    `Категория: ${elem.firstElementChild.textContent}\nКоличество элементов: ${amountEl.length}`,
  );
});
