import { escape, getRand, getAvg, rand } from './helpers'; // вспомогательные функции 
import { fillPostsData } from './fill'; // функция для вывода новостей

const MAX_TAGS = 20; // максимальное кол-во тегов в статье
const MAX_RATING = 10; // максимальное кол-во оценок в рейтинге
const MAX_ITEMS = 30; // максимальное кол-во статей в блоге
const AMOUNT_FEED = 3; // кол-во статей отображаемых в ленте новостей

// заполняем массив теги
let topics = ['design', 'seo', 'video', 'css', 'html', 'javascript', 'ecmascript', 'angular',
    'react', 'nodejs', 'photoshop', 'social', 'programming', 'marketing', 'business', 'humor',
    'promotion', 'art', 'creative', 'technology', 'style', 'photo', 'animation', 'brand'];

// заполняем массив новостей. 
// сначала мы заполняем вручную каждый элемент, чтобы протестировать экранирование символов.
let itemBlog = [
    {
        id: 1,
        rating: Array.from({ length: MAX_RATING }, () => getRand(1001, 0)), // заполняем массив, в котором 10 рандомных элементов от 0 до 1000
        topics: rand(topics, MAX_TAGS), // создаем массив из рандомных тегов в рандомном порядке, устанавливаем макс. длину массива
        title: escape('Headline $ 1') // экранирование для заголовков
    },
    {
        id: 2,
        rating: Array.from({ length: MAX_RATING }, () => getRand(1001, 0)),
        topics: rand(topics, MAX_TAGS),
        title: escape('Headline & headline')
    },
    {
        id: 3,
        rating: Array.from({ length: MAX_RATING }, () => getRand(1001, 0)),
        topics: rand(topics, MAX_TAGS),
        title: escape('Headline + "Headline"')
    }
];

// затем заполняем оставшиеся 27 элементов новостей через цикл
let j = itemBlog.length + 1;
while (j <= MAX_ITEMS) {
    itemBlog.push({
        id: j,
        rating: Array.from({ length: MAX_RATING }, () => getRand(1001, 0)),
        topics: rand(topics, MAX_TAGS),
        title: 'Headline ' + j
    });
    j++;
};

// сортируем массив по рейтингу по убыванию
itemBlog.sort((a, b) => getAvg(b.rating) - getAvg(a.rating));

// выводим массив в консоль для тестирования и проверки
console.log(itemBlog);

// передаем наш отсортированный массив и указываем кол-во выводимых материалов в ленте новостей
fillPostsData(itemBlog, AMOUNT_FEED);