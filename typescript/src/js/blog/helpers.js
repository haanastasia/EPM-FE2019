// вычисляем среднее арифметическое в массиве
export function getAvg(grades) {
    let total = grades.reduce((acc, c) => acc + c, 0) / grades.length;
    return total / 10;
}