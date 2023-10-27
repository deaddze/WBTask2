const tList = document.querySelector('.t-list')
function createAndAddElement(text) {
  //template сам не показывается на странице
  const template = document.getElementById('myTemplate');//берем по id template
  const p = template.content.querySelector('p');
  p.textContent = text
  const li = template.content.cloneNode(true)//копирауем узел и если true, то клонируем глубоко, то есть и поддерево и включая текст
  tList.appendChild(li)//добавляем клонированный узел на страницу
}
//template - нужен для того, чтобы использовать его как схему чтобы добавлять элементы в body, не нужно каждый раз использовать createElement и тд, упрощает написание кода
//Элемент <template> предназначен для хранения «образца» разметки, невидимого и предназначенного для вставки куда-либо.
createAndAddElement('Алексей');
createAndAddElement('Dfzy')
