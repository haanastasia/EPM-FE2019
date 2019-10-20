import { Renderable } from "./render.interface";

export abstract class AbstractRenderer implements Renderable {

    render(selector: string, count: number): void {
        console.log("Not Implemented");
    }

    // создание текстовых элементов
    buildText(tag: string, name: string, html: string): any {
        let content = document.createElement(tag);
        content.className = name;
        content.innerHTML = html;
        return content;
    }

    // создание изображений
    buildImg(name: string, src: string, alt: string): any {
        let content = document.createElement('img');
        content.className = name;
        content.src = src;
        content.alt = alt;
        return content;
    }
}