import { getAvg } from './helpers'; // вспомогательные функции 
import { buildText, buildImg } from './build'; // подключаем функции для отрисовки элементов

// Выводим новости на главную страницу
export function fillPostsData(itemBlog, count) {
    let i = 0;
    let content = document.querySelector('.blog__col'); // находим общий контейнер для блога
    while (i < count) {
        // создаем контейнер для каждой отдельной новости
        let item = buildText('div', 'col-xs-12 col-md-6 col-xl-4 blog__item', '');
        item.tabIndex = 0;
         
        // создаем элемент для названия
        let contentTitle = buildText('div', 'blog__title', itemBlog[i].title);

        // создаем элемент для тегов и заполняем его
        let contentTags = buildText('div', 'blog__tags blog-tags', '');
        itemBlog[i].topics.forEach(function (entry) {
            contentTags.insertAdjacentHTML('beforeEnd', '<div class="blog-tags__item">' + entry + '</div>');
        });
         
        // создаем элемент для рейтинга
        let contentRating = buildText('div', 'blog__rating rating', '');
        let rating = getAvg(itemBlog[i].rating).toFixed(2); // находим среднее арифметическое из массива рейтинга, округляем его до сотых, убираем лишние цифры после запятой. 
        contentRating.innerHTML = '<progress max="100" value="' + rating + '" class="rating__progress"></progress><div class="rating__value" style="width:' + rating + '%" data-value="' + rating + '"></div>';

        // дальше идут элементы с фиксированными значениями
        // создаем элемент для кнопки
        let contentBtn = buildText('div', "btn btn--middle blog__btn", "read more");
         
        // создаем элемент для даты
        let contentDate = buildText('div', 'blog__date', '15 Jan, 2015');
         
        // создаем элемент для описания
        let contentText = buildText('p', "blog__text", "Lorem ipsum dolor sit amet, con&shy;sectetur adipiscing elit. Pellen&shy;tesque vel odio vel felis placerat pharetra ut vitae felis.");

        // создаем элемент для изображения
        let contentPreview = buildImg('blog__preview', 'img/blog1.png', 'Blog');

        // заполняем нашими элементами контейнер статьи
        item.append(contentPreview, contentTitle, contentRating, contentDate, contentText, contentTags, contentBtn);

        content.append(item); 

        i++;
    }
}