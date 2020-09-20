// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Первое решение

// const elementsImg = images.forEach(({ url, alt }) => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('list_element');
//   const imgEl = document.createElement('img');
//   imgEl.setAttribute('src', url);
//   imgEl.setAttribute('alt', alt);
//   liEl.appendChild(imgEl);
//   document.getElementById('gallery').appendChild(liEl);
// });


// Второе решение

// const elementsImg = images.map(({ url, alt }) => {
//   const ulEl = document.querySelector('ul');
//   ulEl.insertAdjacentHTML(
//     'beforeend',
//     `<li class="list_element"><img src = ${url} alt = ${alt}></li>`,
//   );
// });


//  Третье решение

const elementsImg = images.reduce(
  (acc, { url, alt }) =>
    acc + `<li class="list_element"><img src = ${url} alt = ${alt}></li>`,
  '',
);
document.querySelector('ul').insertAdjacentHTML('beforeend', elementsImg);
