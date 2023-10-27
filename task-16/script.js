export function formatDate(date, formatString) {//экспортируем функцию
  return moment(date).format(formatString);//используем библиотеку moment.js для форматирования даты
}


