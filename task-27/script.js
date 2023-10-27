function animateElement(id, newStyles) {
  const element = document.getElementById(id);//находим по айди переданный аргумент
  if (!element) {//если не найден то останавливаем процесс и выводим консоль ошибку
      console.error("Элемент не найден!");
      return;
  }
  element.classList.add('animated-element');//если все таки он существует то добавляем класс
  for (let style in newStyles) {//так же вторым аргументом передаются стили и чтобы добавить стили мы перебираем их и назначаем элементу
      element.style[style] = newStyles[style];
  }
}
animateElement("myElement", {
  width: "200px",
  height: "200px",
  left: "100px",
  top: "50px"
});
//в добавленном классе есть анимация по плавному увеличению элемента