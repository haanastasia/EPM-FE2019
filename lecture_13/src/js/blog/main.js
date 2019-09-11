import { getRand, getAvg, rand } from './helpers'; // вспомогательные функции 
import { FillPostsData } from './fill'; // функция для вывода новостей

const MAX_TAGS = 20; // максимальное кол-во тегов в статье
const MAX_RATING = 10; // максимальное кол-во оценок в рейтинге
const MAX_ITEMS = 30; // максимальное кол-во статей в блоге
const AMOUNT_FEED = 3; // кол-во статей отображаемых в ленте новостей


// заполняем массив новостей. 
function Blog(items, length) { 

    FillPostsData.call(this);

    this.itemBlog = items;

    // сортируем массив по рейтингу по убыванию
    this.itemBlog.sort((a, b) => getAvg(b.rating) - getAvg(a.rating));
}
 
Blog.prototype = Object.create(FillPostsData.prototype);
Blog.prototype.constructor = Blog;

Blog.prototype.render = function(selector, count) {
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
        // дальше идут элементы с фиксированными значениями
        // создаем элемент для кнопки
        let contentBtn = this.buildText('div', "btn btn--middle blog__btn", "read more");
        // создаем элемент для даты
        let contentDate = this.buildText('div', 'blog__date', '15 Jan, 2015'); 
        // создаем элемент для описания
        let contentText = this.buildText('p', "blog__text", "Lorem ipsum dolor sit amet, con&shy;sectetur adipiscing elit. Pellen&shy;tesque vel odio vel felis placerat pharetra ut vitae felis.");
        // создаем элемент для изображения
        let contentPreview = this.buildImg('blog__preview', 'img/blog1.png', 'Blog');
        // заполняем нашими элементами контейнер статьи
        item.append(contentPreview, contentTitle, contentRating, contentDate, contentText, contentTags, contentBtn);
        
        content.append(item); 

        i++;
    }
};


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://my-json-server.typicode.com/haanastasia/EPM-FE2019/posts', true);
xhr.send(); // (1)
xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
  } else {
    console.log(xhr.responseText);

    let news = new Blog(xhr.responseText, MAX_ITEMS);
    // выводим массив в консоль для тестирования и проверки
    console.log(news.itemBlog);

    news.render('.blog__col', AMOUNT_FEED);
    news.render('.blog__col-2', AMOUNT_FEED);
  }
}