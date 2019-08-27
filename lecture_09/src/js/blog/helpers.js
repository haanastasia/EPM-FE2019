// функция экранирования символов
export function escape(string) {
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return string.replace(/[&<>"']/g, function (match) {
        return htmlEscapes[match];
    });
}

// функция рандомного числа
export function getRand(max, min) {
    return Math.floor(Math.random() * max) + min;
}

// вычисляем среднее арифметическое в массиве
export function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0) / grades.length;
    return total / 10;
}

// перемешиваем массив
export function shuffle(array) {
    let i = array.length - 1;
    do {
        var num = Math.floor(Math.random() * (i + 1));
        var d = array[num];
        array[num] = array[i];
        array[i] = d;
        i--;
    } while (i > 0);
    return array;
}

// создаем массив из рандомных элементов другого массива
export function rand(array, max) {
    shuffle(array);
    var lengthRand = getRand(array.length, 1);
    if (lengthRand > max) {
        lengthRand = getRand(max, 1);
    }
    return Array.from({ length: lengthRand }, (а, b) => array[b]);
}