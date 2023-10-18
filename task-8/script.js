const arr = [
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

function getReturns(arr){
  return function(){//возвращаем внутреннюю фнукцию
    const newArr = [];//создаем пустой массив
    for(let func of arr){//перебираем по циклу элементы заданного массива
      newArr.push(func())//добавляем в массив результаты функций
    }
    return newArr;//возвращаем массив с результатами
  }()
}
getReturns(arr)