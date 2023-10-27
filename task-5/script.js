class List {//создаем класс чтобы сделать односвязный список
  constructor(data) {
    this.data = data;//объект сюда
    this.next = null;//тут следующий сосед
  }
}

function jsonRecursive(json) {//используем рекурсию чтобы добавлять в класс каждый объект
  if (json.length === 0) {//если длина 0 то заканчиваем
    return null;
  }

  const data = json.shift();//берем первый элемент из списка
  const list = new List(data);//создаем новый List и ложим туда первый элемент
  list.next = jsonRecursive(json);//связываем список

  return list;//возвращаем list
}

const jsonData = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
];
const linkedList = jsonRecursive(jsonData);