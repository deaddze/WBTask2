function calculateStackSize() {
  let count = 0;
  function recurse() {//считаем count пока не произойдет ошибка
      count++;
      recurse();
  }
  
  try {//через try catch мы узнаем сколько будет вызываться функция
      recurse();
  } catch (e) {
      console.log("Stack size:", count);//если ошибка происходит, то выводим count
  }
}

calculateStackSize();