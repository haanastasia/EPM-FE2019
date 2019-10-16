// Для рендеринга
export default class FillPostsData {

    constructor(selector) {
        this.content = document.querySelector(selector);
    }

    // создание текстовых элементов
    buildText(tag, name, html) {
        this.content = document.createElement(tag);
        this.content.className = name;
        this.content.innerHTML = html;
        return this.content;
    }

    // создание изображений
    buildImg(name, src, alt) {
        this.content = document.createElement('img');
        this.content.className = name;
        this.content.src = src;
        this.content.alt = alt;
        return this.content;
    }
}