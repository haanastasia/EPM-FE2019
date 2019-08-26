// функция экранирования символов
function escape(string) {
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return string.replace(/[&<>"']/g, function(match) {
        return htmlEscapes[match];
    });
};

function getRand(max) {
    return Math.floor(Math.random() * max)+1;
}

Array.prototype.shuffle = function(b){
    var i = this.length, j, t;
    while(i) {
        j = Math.floor( ( i-- ) * Math.random() );
        t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
};

Array.prototype.rand = function() {
    this.shuffle();
    var lengthRand = getRand(this.length);
    if (lengthRand > 20) {
        lengthRand = getRand(20);
    }
    return Array.from({ length: lengthRand }, (а, b) => this[b]);
}

var topics = ['design', 'seo', 'video', 'css', 'html', 'javascript', 'ecmascript', 'angular',
    'react', 'nodejs', 'photoshop', 'social', 'programming', 'marketing', 'business', 'humor',
    'promotion', 'art', 'creative', 'technology', 'style', 'photo', 'animation', 'brand'];

var itemBlog = [
    {
        id: 1,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: escape('Заголовок 1')
    },
    {
        id: 2,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: 'Заголовок 2'
    },
    {
        id: 3,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: 'Заголовок 3'
    },
    {
        id: 4,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: 'Заголовок 4'
    },
    {
        id: 5,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: 'Заголовок 5'
    },
    {
        id: 6,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: 'Заголовок 6'
    },
    {
        id: 7,
        rating: Array.from({ length: 10 }, () => getRand(1000)),
        topics: topics.rand(),
        title: 'Заголовок 7'
    }
];

function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0) / grades.length;
    return total / 10;
}
  
itemBlog.sort((a, b) => getAvg(b.rating) - getAvg(a.rating));

console.log(itemBlog);


let i = 0;
while (i < 3) { 
    document.querySelectorAll('.blog__title')[i].innerHTML = itemBlog[i].title;
    itemBlog[i].topics.forEach(function(entry) {
        document.querySelectorAll('.blog__tags')[i].insertAdjacentHTML('beforeEnd', '<div class="blog-tags__item">' + entry + '</div>');
    });
    var rating = getAvg(itemBlog[i].rating).toFixed(2);
    document.querySelectorAll('.blog__rating')[i].innerHTML = '<progress max="100" value="' + rating +'" class="rating__progress"></progress><div class="rating__value" style="width:' + rating +'%" data-value="' + rating +'"></div>';
    i++;
}

 