// функция экранирования символов
export function escape(string) {
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

// функция рандомного числа
export function getRand(max) {
    return Math.floor(Math.random() * max)+1;
}

// вычисляем среднее арифметическое в массиве
export function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0) / grades.length;
    return total / 10;
}
