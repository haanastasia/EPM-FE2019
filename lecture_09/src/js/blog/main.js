import { escape, getRand, getAvg, shuffle } from './helpers'; // вспомогательные функции 

// создаем массив из рандомных элементов другого массива
Array.prototype.rand = function () {
    shuffle(this);
    var lengthRand = getRand(this.length);
    if (lengthRand > 20) {
        lengthRand = getRand(20);
    }
    return Array.from({ length: lengthRand }, (а, b) => this[b]);
}

// заполняем массив теги
var topics = ['design', 'seo', 'video', 'css', 'html', 'javascript', 'ecmascript', 'angular',
    'react', 'nodejs', 'photoshop', 'social', 'programming', 'marketing', 'business', 'humor',
    'promotion', 'art', 'creative', 'technology', 'style', 'photo', 'animation', 'brand'];

// заполняем массив новостей. 
// сначала мы заполняем вручную каждый элемент, чтобы протестировать экранирование символов.
var itemBlog = [
    {
        id: 1,
        rating: Array.from({ length: 10 }, () => getRand(1000)), // заполняем массив, в котором 10 рандомных элементов от 0 до 1000
        topics: topics.rand(),
        title: escape('Headline > 1')
    },
    {
        id: 2,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: escape('Headline & headline')
    },
    {
        id: 3,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: escape('Headline "Headline"')
    }
];

// затем заполняем оставшиеся 27 элементов новостей через цикл
let j = itemBlog.length + 1;
do {
    itemBlog.push({
        id: j,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: 'Headline ' + j
    });
    j++;
} while (j <= 30);

// сортируем массив по рейтингу по убыванию
itemBlog.sort((a, b) => getAvg(b.rating) - getAvg(a.rating));

// выводим массив в консоль для тестирования и проверки
console.log(itemBlog);

// выводим первые три элемента массива на экран
let i = 0;
while (i < 3) {
    // ищем контейнер для отдельной статьи
    var item = document.querySelectorAll('.blog__item')[i];

    item.querySelector('.blog__title').innerHTML = itemBlog[i].title; // выполняем поиск элементов по классу в контейнере item и заполняем его
    itemBlog[i].topics.forEach(function (entry) {
        item.querySelector('.blog__tags').insertAdjacentHTML('beforeEnd', '<div class="blog-tags__item">' + entry + '</div>');
    });
    var rating = getAvg(itemBlog[i].rating).toFixed(2);
    item.querySelector('.blog__rating').innerHTML = '<progress max="100" value="' + rating + '" class="rating__progress"></progress><div class="rating__value" style="width:' + rating + '%" data-value="' + rating + '"></div>';
    i++;
}
