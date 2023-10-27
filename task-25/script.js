function createElement(elem){
  const element = document.createElement(elem);

  // Устанавливаем стили с помощью CSS
  element.style.width = '100px';
  element.style.height = '100px';
  element.style.backgroundColor = 'blue';
  element.style.color = 'white';
  element.style.fontSize = '20px';
  element.textContent = 'Блок';

  // Добавляем элемент в DOM (например, в тело документа)
  document.body.appendChild(element);
}
createElement('div')