function getImg(url){
  return new Promise(function(resolve, reject){
    const img = new Image();
    img.src = url;
    img.onload = () => resolve({width: img.width, height: img.height})
    img.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`))
  })
}
getImg('https://www.imgonline.com.ua/examples/bee-on-daisy.jpg')
.then(
  (script) => {'Промис разрешается с данными об изображении', script},
  (error) => {error.message}
)