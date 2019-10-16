import { getAvg } from './helpers'; // вспомогательные функции 
import FillPostsData from '../render/fill'; // функция для вывода новостей

// заполняем массив новостей. 
export default class Blog extends FillPostsData {

    constructor(items) {
        super();
        this.itemBlog = items;
        // сортируем массив по рейтингу по убыванию
        this.itemBlog.sort((a, b) => getAvg(b.rating) - getAvg(a.rating));
    }

    render(selector, count = 3) {
        let i = 0;
        let content = document.querySelector(selector); // находим общий контейнер для блога
        while (i < count) {
            // создаем контейнер для каждой отдельной новости
            let item = this.buildText('div', 'col-xs-12 col-md-6 col-xl-4 blog__item', '');
            item.tabIndex = 0;
            // создаем элемент для названия
            let contentTitle = this.buildText('div', 'blog__title', this.itemBlog[i].title);
            // создаем элемент для тегов и заполняем его
            let contentTags = this.buildText('div', 'blog__tags blog-tags', '');
            this.itemBlog[i].topics.forEach(function (entry) {
                contentTags.insertAdjacentHTML('beforeEnd', '<div class="blog-tags__item">' + entry + '</div>');
            });
            // создаем элемент для рейтинга
            let contentRating = this.buildText('div', 'blog__rating rating', '');
            let rating = getAvg(this.itemBlog[i].rating).toFixed(2); // находим среднее арифметическое из массива рейтинга, округляем его до сотых, убираем лишние цифры после запятой. 
            contentRating.innerHTML = '<progress max="100" value="' + rating + '" class="rating__progress"></progress><div class="rating__value" style="width:' + rating + '%" data-value="' + rating + '"></div>';
            // создаем элемент для кнопки
            let contentBtn = this.buildText('div', "btn btn--middle blog__btn", "read more");
            // создаем элемент для даты
            let contentDate = this.buildText('div', 'blog__date', this.itemBlog[i].date);
            // создаем элемент для описания
            let contentText = this.buildText('p', "blog__text", this.itemBlog[i].text);
            // создаем элемент для изображения
            let contentPreview = this.buildImg('blog__preview', this.itemBlog[i].photo, 'Blog');
            // заполняем нашими элементами контейнер статьи
            item.append(contentPreview, contentTitle, contentRating, contentDate, contentText, contentTags, contentBtn);

            content.append(item);

            i++;
        }
    }
}