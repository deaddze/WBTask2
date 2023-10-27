function getImg(url){
  return new Promise(function(resolve, reject){
    const img = new Image();//создаем новое изображение
    img.onload = () => resolve({width: img.width, height: img.height})//при окончании загрузки вычисляем ширину и высоту
    img.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`))//при ошибке создаем new Error
    img.src = url;//при любом варианте событий в изображение кладем src
  })
}
getImg('https://www.imgonline.com.ua/examples/bee-on-daisy.jpg')
.then(
  (img) => {return img},
  (error) => {error.message}
)//используем then для просмотра promise
