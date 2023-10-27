function calculateLocalStorageSize() {
  let total = 0;//для подсчета размера 
  for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {//если есть ключ мы добавляем длину ключа и умножаем на 2
          total += localStorage[key].length * 2; // Множим на 2, так как один символ занимает 2 байта в UTF-16
      }
  }
  return total; // Возвращаем размер в байтах
}

function updateLocalStorageSize() {
  const sizeInBytes = calculateLocalStorageSize();//берем сколько хранится сейчас в локал сторадж
  const sizeInKiloBytes = sizeInBytes / 1024;//делим на 1024 чтобы узнать сколько будет в килобайтах
  const maxLocalStorageSize = 5 * 1024; //умножаем на 5 потому что local storage где-то 5 мб чтобы узнать сколько будет в килобайтах

  console.log(`Использовано: ${sizeInKiloBytes.toFixed(2)} KB от ${maxLocalStorageSize} KB`);
}

calculateLocalStorageSize()
updateLocalStorageSize()
//1 КБ = 1024 Байт 
//1 МБ = 1024 КБ