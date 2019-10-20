export interface Renderable {

    render(selector: string, count: number): void;
    buildText(tag: string, name: string, html: string): any;
    buildImg(name: string, src: string, alt: string): any;

}