function parseJSON(str){
  try {
    return JSON.parse(str);
  } catch (e) {
    throw new Error('Invalid JSON string');
  }
}
parseJSON('{"name":"Bob","age": "27"}')