const MathX = (function () {
  // избавляет от необходимости повторно вычислять уже известные числа.
  const memo = {};//создаем хранилище для чисел фибоначчи

  function getFibonacci(n) {//используем рескурсию для получения числа фибоначчи
    if (n <= 1) return n;  // Если n равно 0 или 1, возвращаем n.
    if (memo[n]) return memo[n];// Если число уже было вычислено ранее, возвращаем его из хранилища.
    memo[n] = getFibonacci(n - 1) + getFibonacci(n - 2);// Рекурсивно вычисляем число Фибоначчи и сохраняем его в хранилище.
    return memo[n];
  }

  function isPrime(num) {
    if (num <= 1) return false;// Числа меньше 2 не являются простыми.
    if (num <= 3) return true;// 2 и 3 являются простыми числами.

    if (num % 2 === 0 || num % 3 === 0) return false;// Если число делится на 2 или 3 без остатка, то оно не является простым.

    // Проверяем делители, начиная с 5. 
    // Используется оптимизация, исключающая проверку чисел, которые являются кратными 2 и 3.
    // Это достигается за счет итерации через значения 5 и 7 (i и i + 2) с увеличением i на 6.
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; // Если предыдущие проверки не показали, что число составное, возвращаем true.
  }

  function getFibonacciArr(n) {
    const arr = []; // создание пустого массива для хранения чисел Фибоначчи
    for (let i = 0; i <= n; i++) { // цикл для генерации n первых чисел Фибоначчи
      arr.push(getFibonacci(i)); // вычисляем i-е число Фибоначчи и добавляем его в массив
    }
    return arr; // возвращаем массив чисел Фибоначчи
  }
  function getNthPrime(n) {
    let count = 0; // счетчик для отслеживания количества найденных простых чисел
    let num = 2;   // начинаем с первого простого числа - 2
    while (count < n) { // продолжаем поиск, пока не найдем n простых чисел
      if (isPrime(num)) { // если число простое
        count++;  // увеличиваем счетчик простых чисел
      }
      num++;  // переходим к следующему числу для проверки
    }
    return num - 1;  // возвращаем n-е простое число (вычитаем 1, так как после последней итерации num увеличивается)
  }

  function getPrimesUpToN(n) {
    const primes = []; // Массив для хранения простых чисел.
    for (let i = 2; i <= n; i++) {// Проходим через все числа от 2 до n.
      if (isPrime(i)) { // Если число простое, добавляем его в массив.
        primes.push(i);
      }
    }
    return primes;
  }
  return {
    getFibonacci,
    getFibonacciArr,
    getNthPrime,
    getPrimesUpToN,
  };
})();

// Примеры использования
// console.log(MathX.getFibonacci(6)); // Вычисление 10-го числа Фибоначчи
// console.log(MathX.getFibonacciArr(6)); // Вычисление всех чисел Фибоначчи до 10
// console.log(MathX.getNthPrime(6)); // Вычисление 5-го простого числа
// console.log(MathX.getPrimesUpToN(20)); // Вычисление всех простых чисел до 20`