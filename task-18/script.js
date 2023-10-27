function getMaxLocalStorageSize() {
  var total = "", key = "test";
  while (true) {//делаем цикл пока не произойдет ошибка при переполнении памяти
      try {
          localStorage.setItem(key, total);//устанавливаем ключ и значение
          total += '0';
      } catch (e) {//при ошибку удаляем из local storage ключ чтобы не приостановить браузер
          localStorage.removeItem(key);
          return total.length - 1;
      }
  }
}
// getMaxLocalStorageSize();