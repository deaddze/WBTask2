const form = document.getElementById('form');
function getFormData(e){
  e.preventDefault();//используем preventDefault() для того чтобы остановить процесс перезагрузки сайта
  const formData = new FormData(form);//используем new FormData чтобы получить данные
  const name = formData.get('name'); //используем метод get чтобы взять по id input
  const email = formData.get('email'); 
  alert(`Имя: ${name} Email: ${email}`)
}
form.addEventListener('submit', getFormData)