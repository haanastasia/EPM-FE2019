import { getRand, getAvg, rand } from './helpers'; // вспомогательные функции 
import { fillPostsData } from './fill'; // функция для вывода новостей

const MAX_TAGS = 20; // максимальное кол-во тегов в статье
const MAX_RATING = 10; // максимальное кол-во оценок в рейтинге
const MAX_ITEMS = 30; // максимальное кол-во статей в блоге
const AMOUNT_FEED = 3; // кол-во статей отображаемых в ленте новостей

// заполняем массив новостей. 
function CreateMassive(length) { //конструктор создания массива
    // заполняем массив теги
    this.topics = ['design', 'seo', 'video', 'css', 'html', 'javascript', 'ecmascript', 'angular',
        'react', 'nodejs', 'photoshop', 'social', 'programming', 'marketing', 'business', 'humor',
        'promotion', 'art', 'creative', 'technology', 'style', 'photo', 'animation', 'brand'];

    this.itemBlog = [];

    let i = 1;
    while (i <= length) {
        this.itemBlog.push({
            id: i,
            rating: Array.from({ length: MAX_RATING }, () => getRand(1001, 0)),
            topics: rand(this.topics, MAX_TAGS),
            title: 'Headline ' + i
        });
        i++;
    };

    // сортируем массив по рейтингу по убыванию
    this.itemBlog.sort((a, b) => getAvg(b.rating) - getAvg(a.rating));
}

let item = new CreateMassive(MAX_ITEMS);
// выводим массив в консоль для тестирования и проверки
console.log(item.itemBlog);

// передаем наш отсортированный массив и указываем кол-во выводимых материалов в ленте новостей
fillPostsData(item.itemBlog, AMOUNT_FEED);