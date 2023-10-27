const postsDiv = document.querySelector('.posts')
const postsList = document.querySelector('.posts__list');

// count2 - это смещение от начала, чтобы загружать следующую партию постов.
let count = 10;
let count2 = 0;

// Загрузка кэшированных данных из localStorage. Если данных нет, то будет пустой массив.
const cachedData = JSON.parse(localStorage.getItem('cachedData')) || [];

// Функция для загрузки данных с VK API.
function getData() {
    // Если count превышает 100, сбрасываем его до 10 и сбрасываем count2 до 0.
    if(count > 100) {
        count = 10;
        count2 = 0;
    }

    // Создание нового тега SCRIPT для JSONP запроса к VK API.
    let script = document.createElement('SCRIPT');
    script.src = `https://api.vk.com/method/wall.get?...&count=${count}...&callback=callbackFunc`;
    document.head.appendChild(script);
}

// Callback функция для обработки данных, полученных от VK API.
function callbackFunc(result) {
    let posts = result.response.items;

    if(posts) {
        postsList.innerHTML = ""; // очищаем текущий список
        posts.splice(0, count2); // удаляем первые "count2" постов из полученного списка

        // Загрузка кэшированных данных из localStorage.
        let cachedData = JSON.parse(localStorage.getItem('cachedData')) || [];

        // Если размер кэшированных данных достигает 100, удаляем первые 10 записей.
        if(cachedData.length >= 100) {
            cachedData = cachedData.slice(10);
        }
        
        // Добавляем новые посты к кэшированным данным.
        cachedData = cachedData.concat(posts);

        // Сохраняем обновленные данные в localStorage.
        localStorage.setItem('cachedData', JSON.stringify(cachedData));
        localStorage.setItem('count', JSON.stringify(count));
        localStorage.setItem('count2', JSON.stringify(count2));
        
        // Отображаем посты на странице.
        displayPosts(cachedData);
        count += 10;
        count2 += 10;
    }
}

// Функция для отображения списка постов.
function displayPosts(posts) {
    posts.forEach(post => {
        // Если у поста есть вложения и это фотография, то добавляем его в список.
        if(post.attachments && post.attachments[0].photo) {
            const photoSizes = post.attachments[0].photo?.sizes;
            postsList.insertAdjacentHTML('beforeend', `
                <li class="posts__item">
                    <p>${post.text}</p>
                    <img src=${photoSizes[photoSizes.length - 1].url} alt="Post Image">
                </li>
            `);
        }
    });
}

// Функция для проверки, достиг ли пользователь конца блока с постами.
function isScroll() {
    return postsDiv.scrollTop + postsDiv.clientHeight >= postsDiv.scrollHeight;
}

// Обработчик события скролла для блока с постами. Если пользователь достигает конца, загружаем еще посты.
postsDiv.addEventListener('scroll', () => {
    if (isScroll()) {
        getData();
    }
});

// Отображаем кэшированные данные, если они есть.
displayPosts(cachedData);

// Если кэшированных данных нет, загружаем первые посты.
if (!cachedData.length) {
    getData();
}