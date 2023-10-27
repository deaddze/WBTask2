function stringToJson(json) {
  return eval('(' + json + ')');//конвертируем json в объект, только это опасный метод, так злоумшленники могут легко запустить какой угодно код
}

const json= '{"name":"John","age":30,"isStudent":false,"hobbies":["Reading","Hiking"],"address":{"street":"123 Main St","city":"Exampleville"}}';
const jsonObject = stringToJson(json);
// console.log(jsonObject);