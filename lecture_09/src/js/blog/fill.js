import { getAvg } from './helpers'; // вспомогательные функции 

// Выводим новости на главную страницу
export function fillPostsData(itemBlog, count) {
    let i = 0;
    while (i < count) {
        // ищем контейнер для отдельной статьи
        let item = document.querySelectorAll('.blog__item')[i];
    
        item.querySelector('.blog__title').innerHTML = itemBlog[i].title; // выполняем поиск элементов по классу в контейнере item и заполняем его
        itemBlog[i].topics.forEach(function (entry) {
            item.querySelector('.blog__tags').insertAdjacentHTML('beforeEnd', '<div class="blog-tags__item">' + entry + '</div>');
        });
        let rating = getAvg(itemBlog[i].rating).toFixed(2); // находим среднее арифметическое из массива рейтинга, округляем его до сотых, убираем лишние цифры после запятой. 
        item.querySelector('.blog__rating').innerHTML = '<progress max="100" value="' + rating + '" class="rating__progress"></progress><div class="rating__value" style="width:' + rating + '%" data-value="' + rating + '"></div>';
        i++;
    }
}