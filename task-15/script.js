async function performAsyncTask() {//для использования асинхронной опрации с await нужно обязтаельно ставить async в функции
  try {//для async await нужно использовать try catch для отлова ошибки
    // Выполняем асинхронную операцию, например, асинхронный запрос к серверу.
    const result = await asyncOperation();//ждем ответ
    // Далее можно выполнять дополнительные операции с полученным результатом.
    return result; // Возвращаем результат выполнения асинхронной операции.
  } catch (error) {
    console.error('An error occurred:', error);
    throw error; // Можно пробросить ошибку для обработки вверх по стеку.
  }
}
function asyncOperation() {//выполняются вычисления
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
        resolve(`Success: ${randomValue}`);
      } else {
        reject(`Error: ${randomValue}`);
      }
    }, 1000);
  });
}
performAsyncTask().then(result => {return result})