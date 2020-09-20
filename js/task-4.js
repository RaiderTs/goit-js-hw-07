// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// 1. Создаем переменную
let counterValue = 0;
// 2. Ссылка на Span
const spanEl = document.querySelector('#value');
// 3. Ссылка на ктнопу decrement
const buttonDecrement = document.querySelector('[data-action="decrement"]');
// 4. Ссылка на кнопку increment
const buttonIncrement = document.querySelector('[data-action="increment"]');
// 5. Cоздаем функцию decrement
const decrement = function () {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};
// 6. Создаем функцию increment
const increment = function () {
  counterValue += 1;
  spanEl.textContent = counterValue;
};
//  7. Вешаем слушателя событий
buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);
