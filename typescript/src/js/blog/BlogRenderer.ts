import { AbstractRenderer } from "../render/AbstractRenderer"
import { BlogPostData } from "./blog.interface";
import { getAvg } from "./helpers";

export class BlogRenderer extends AbstractRenderer implements BlogPostData {

    url: string = "https://my-json-server.typicode.com/haanastasia/EPM-FE2019/posts";

    render(selector: string, count: number = 3): void {
        this.getData()
            .then(posts => {
                // сортируем массив по рейтингу по убыванию
                posts.sort((a: any, b: any) => getAvg(b.rating) - getAvg(a.rating));

                let content: any = document.querySelector(selector);
                let i: number = 0;
                while (i < count) {
                    let item: any = super.buildText('div', 'col-xs-12 col-md-6 col-xl-4 blog__item', '');
                    item.tabIndex = 0;
                    let contentTitle: any = super.buildText('div', 'blog__title', posts[i].title);
                    let contentTags: any = super.buildText('div', 'blog__tags blog-tags', '');
                    posts[i].topics.forEach(function (entry: any) {
                        contentTags.insertAdjacentHTML('beforeEnd', '<div class="blog-tags__item">' + entry + '</div>');
                    });
                    let contentRating: any = super.buildText('div', 'blog__rating rating', '');
                    let rating: any = getAvg(posts[i].rating).toFixed(2); 
                    contentRating.innerHTML = '<progress max="100" value="' + rating + '" class="rating__progress"></progress><div class="rating__value" style="width:' + rating + '%" data-value="' + rating + '"></div>';
                    let contentBtn: any = super.buildText('div', "btn btn--middle blog__btn", "read more");
                    let contentDate: any = super.buildText('div', 'blog__date', posts[i].date);
                    let contentText: any = super.buildText('p', "blog__text", posts[i].text);
                    let contentPreview: any = super.buildImg('blog__preview', posts[i].photo, 'Blog');
                    item.append(contentPreview, contentTitle, contentRating, contentDate, contentText, contentTags, contentBtn);
                    content.append(item);
                    i++;
                }

            });
    }

    getData() {
        return fetch(this.url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}