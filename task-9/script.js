function jsonToString(json) {
  if (typeof json === 'number' || typeof json === 'boolean' || json === null) {//если это число или boolean или null то преобразуем в строку
    return json.toString();
  } else if (typeof json === 'string') {//если это строка то добавляем кавычки
    return `"${json}"`;
  } else if (Array.isArray(json)) {//если это массив
    const elements = json.map((element) => jsonToString(element)).join(',');//переираем каждый массив и проверяем элементы на типы данных и сделаем строкоц
    return `[${elements}]`;
  } else if (typeof json === 'object') {//если это объект то ключ делаем строкой и значение проверяем на тип данных
    const pairs = Object.keys(json)
      .map((key) => `"${key}":${jsonToString(json[key])}`)
      .join(',');
    return `{${pairs}}`;
  }
}
const jsonData1 = {
  name: 'John',
  age: 30,
  isStudent: false,
  hobbies: ['Reading', 'Hiking'],
  address: {
    street: '123 Main St',
    city: 'Exampleville',
  },
};

const jsonString = jsonToString(jsonData1);
