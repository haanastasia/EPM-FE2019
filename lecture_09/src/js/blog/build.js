// функция для создания текстовых элементов
export function buildText(tag, name, html) {
    let content = document.createElement(tag);
    content.className = name;
    content.innerHTML = html;
    return content;
}

// функция для создания изображений
export function buildImg(name, src, alt) {
    let content = document.createElement('img');
    content.className = name;
    content.src = src;
    content.alt = alt;
    return content;
}