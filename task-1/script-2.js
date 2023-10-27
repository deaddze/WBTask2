function isPalindrome(str) {
  // Приводим строку к нижнему регистру, чтобы сделать проверку регистронезависимой.
  str = str.toLowerCase();
  
  // Удаляем все не-буквенные символы из строки, используя регулярное выражение.
  // Это нужно, чтобы игнорировать пробелы, знаки препинания и другие символы.
  const cleanedStr = str.replace(/[^a-zа-яё]/g, '');

  // Проверяем, равна ли очищенная строка ее обратной копии.
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Примеры использования функции:
console.log(isPalindrome("аргентина манит негра")); // true
console.log(isPalindrome("hello")); // false