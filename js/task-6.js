// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

//  1. Получаем ссылку на инпут.
const inputEl = document.querySelector('#validation-input');
// 2.  Получаем переменную для ограничения введенных символов.invalid
const maxLength = Number(inputEl.dataset.length);
// 3. Создаем функцию
const constraintСheck = inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === maxLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
