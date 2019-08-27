import { getAvg } from './helpers'; // вспомогательные функции 

// Выводим новости на главную страницу
export function fillPostsData(itemBlog, count) {
    let i = 0;
    let content = document.querySelector('.blog__col'); // находим общий контейнер для блога
    while (i < count) {
        // создаем контейнер для каждой отдельной новости
        let item = document.createElement('div');
        item.className = "col-xs-12 col-md-6 col-xl-4 blog__item";  
        item.tabIndex = 0;

        // создаем элемент для названия
        let contentTitle = document.createElement('div');
        contentTitle.className = "blog__title";
        contentTitle.innerHTML = itemBlog[i].title;

        // создаем элемент для тегов и заполняем его
        let contentTags = document.createElement('div');
        contentTags.className = "blog__tags blog-tags";
        itemBlog[i].topics.forEach(function (entry) {
            contentTags.insertAdjacentHTML('beforeEnd', '<div class="blog-tags__item">' + entry + '</div>');
        });

        // создаем элемент для рейтинга
        let contentRating = document.createElement('div');
        contentRating.className = "blog__rating rating";
        let rating = getAvg(itemBlog[i].rating).toFixed(2); // находим среднее арифметическое из массива рейтинга, округляем его до сотых, убираем лишние цифры после запятой. 
        contentRating.innerHTML = '<progress max="100" value="' + rating + '" class="rating__progress"></progress><div class="rating__value" style="width:' + rating + '%" data-value="' + rating + '"></div>';


        // дальше идут элементы с фиксированными значениями
        // создаем элемент для кнопки
        let contentBtn = document.createElement('div');
        contentBtn.className = "btn btn--middle blog__btn";
        contentBtn.innerHTML = "read more";

        // создаем элемент для даты
        let contentDate = document.createElement('div');
        contentDate.className = "blog__date";
        contentDate.innerHTML = "15 Jan, 2015";

        // создаем элемент для описания
        let contentText = document.createElement('p');
        contentText.className = "blog__text";
        contentText.innerHTML = "Lorem ipsum dolor sit amet, con&shy;sectetur adipiscing elit. Pellen&shy;tesque vel odio vel felis placerat pharetra ut vitae felis.";

        // создаем элемент для изображения
        let contentPreview = document.createElement('img');
        contentPreview.className = "blog__preview";
        contentPreview.src = "img/blog1.png";
        contentPreview.alt = "Blog";

        // заполняем нашими элементами контейнер статьи
        item.append(contentPreview, contentTitle, contentRating, contentDate, contentText, contentTags, contentBtn);

        content.append(item); 

        i++;
    }
}