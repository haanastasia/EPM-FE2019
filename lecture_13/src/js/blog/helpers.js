// функция экранирования символов
export function escape(string) {
    let htmlEscapes = {
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
    let total = grades.reduce((acc, c) => acc + c, 0) / grades.length;
    return total / 10;
}

// создаем массив из рандомных элементов другого массива
export function rand(array, max) {
    // перемешиваем массив
    array.sort(function () {
        return Math.random() - 0.5;
    });

    let lengthRand = getRand(array.length, 1); // вычисляем длину массива
    if (lengthRand > max) {
        lengthRand = getRand(max, 1);
    }
    return Array.from({ length: lengthRand }, (а, b) => array[b]);
}