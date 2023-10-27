const geocodingInput = document.getElementById('geocodingInput')
const list = document.getElementById('list')

function debounce(func, delay) {//дебоунс - это функция которая начинает искать слово, только когда пользоваетль перестал печатать и ждет таймер
  let timeout;//создаем переменную
  return function () {//возвращаем функцию
    const context = this;//this будет ссылаться на объект, относительно которого вызывается функция, переданная в debounce.
    const args = arguments;
    clearTimeout(timeout);//очищаем таймер
    timeout = setTimeout(() => {
      func.apply(context, args);//используем apply для привязки контекста this и передаем аргументы
    }, delay);
  };
}

function throttle(func, limit) {//троттлинг - это функция которая начинает искать слово, после прохождения определнного времени, не зависит от печатания
  let inThrottle;//создаем переменную
  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

async function getAddress(address){//передаем значение input и находим по API адрес
  try{
    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=e8c42d45-b8e1-488e-85f6-492d0acecc92&geocode=${address}&format=json`)
    const data =  await response.json()//используем await для извлечения данных
    return data.response.GeoObjectCollection.featureMember;
  }catch(err){
    return new Error('Не получилось найти улицу', err)
  }
}

const debounceInput = debounce(async(e) => {//передаем в константу возвращенную функцию
  const inputValue = e.target.value.trim();//юерем значение input без лишних пробелов
  if (inputValue.length >= 3) {//если длина больше 3
    const results = await getAddress(inputValue);//получаем данные
    list.innerHTML = '';
    results.forEach((result) => {//тут мы перебираем результаты и выводим текст для показа подсказки
      const address = document.createElement('li');
      address.classList.add('list-item')
      address.textContent = result.GeoObject.name;
      list.appendChild(address);
      address.addEventListener('click', function(){//при клике на одну из подсказок то в input передается эта подсказка
        geocodingInput.value = address.textContent;
        list.innerHTML = '';//очищаем подсказки
      })
    });
  } else {
    list.innerHTML = '';
  }
}, 500)


geocodingInput.addEventListener('input', debounceInput)