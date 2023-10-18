function sortArr(people){
  people.sort((a, b) => {//сортируем массив по возрасту, тут не подходит обычный sort(), так как мы проверяем числа
    if(a.age === b.age){
      return a.name.localeCompare(b.name);//если возрасты одинаковы, то мы его сравниваем по имени с помощью localeCompare
    }
    return a.age - b.age//если не одинаковы, то соритруем
  })
  return people;
}

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 40 },
  { name: "Bob", age: 40 },
  { name: "Ella", age: 22 },
  { name: "David", age: 40 },
  { name: "Grace", age: 28 },
  { name: "Michael", age: 45 },
  { name: "Olivia", age: 24 },
  { name: "William", age: 32 },
  { name: "Sophia", age: 29 }
];
sortArr(people)