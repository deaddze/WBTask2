function getStrangeNum(num){
  const arr = [];//создаем пустой массив
  for(let i = 0; i < num; i++){//проходим по циклу до числа num - 1
    if(num % i === 0){
      arr.push(i)//если число делится без остатка, то мы добавляем в ранее созданный массив
    }
  }
  const sum = arr.reduce((acc, item) => acc + item);//получаем сумму массива
  const answer = sum === num ? true : false;//сравниваем сумму массива с заданным числом
  return answer;//получаем boolean ответ
}
getStrangeNum(6)