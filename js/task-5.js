// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// 1. ссылка на импут

const inputEl = document.querySelector('#name-input');

// 2. ссылка на спан

const spanEl = document.querySelector('#name-output');

// 3. вешаем слушателя

inputEl.addEventListener('input', () => {
  spanEl.textContent = inputEl.value === '' ? 'незнакомец' : inputEl.value;
});
