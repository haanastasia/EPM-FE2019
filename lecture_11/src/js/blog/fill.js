// Для рендеринга
export function FillPostsData() {

    // создание текстовых элементов
    this.buildText = function(tag, name, html) {
        this.content = document.createElement(tag);
        this.content.className = name;
        this.content.innerHTML = html;
        return this.content;
    }

    // создание изображений
    this.buildImg = function(name, src, alt) {
        this.content = document.createElement('img');
        this.content.className = name;
        this.content.src = src;
        this.content.alt = alt;
        return this.content;
    }
}

FillPostsData.prototype.render = function (selector) {
    this.content = document.querySelector(selector);
}