const functionsArray = [
  () => {
    return 1;
  },
  () => {
    return 2;
  },
  () => {
    return 3;
  },
];

let index = 0;
function callFunc() {//используем рекурсию для вызова всех функций
  const f = functionsArray[index];//берем элемент индекса
  if (f) {
    const result = f();//вызываем
    index += 1;//добавляем индексу 1 
    callFunc();//вызываем эту же функцию чтобы вызфвать следующую функцию
  } else {
    return 'Все функции были выполнены';//если все закончилось, то выводим в консоль это
  }
};
callFunc();
