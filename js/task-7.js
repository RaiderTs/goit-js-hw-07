// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// получить доступ к спанc
const spanEl = document.querySelector('#text');
// получить доступ к инпуту
const inputEl = document.querySelector('#font-size-control');
// добавляем слушателя события на инпут
inputEl.addEventListener('input', () => {
  spanEl.style.fontSize = inputEl.value + 'px';
});
