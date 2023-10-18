function palindrom(text){
  const reverseText = text.toLowerCase().split('').reverse().join(' ');//преобразуем заданный текст в массив и переворчаиваем, и обратно преобразуем в текст
  const textWithoutSpace = reverseText.replace(/ /g, '');//убираем все пробелы переворнутого текста
  const newText = text.toLowerCase().replace(/ /g, '');//убираем все пробелы заданного текста
  const isPalindrom = textWithoutSpace === newText ? true : false;//сравниваем перевернутый и заданный текст
  return isPalindrom;//получаем boolean ответ
}

palindrom("banab")