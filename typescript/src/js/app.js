'use strict';

import 'bootstrap';
import '../sass/styles.scss';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../userfiles/', true, /\.(png|jpe?g|svg)$/));

import Blog from './blog/main';
import Request from './api-service/request';
const AMOUNT_FEED = 3; // кол-во статей отображаемых в ленте новостей

let BlogData = new Request();

BlogData.connect('https://my-json-server.typicode.com/haanastasia/EPM-FE2019/posts')
    .then(response => {
        let news = new Blog(JSON.parse(response));
        return news;
    })
    .then(news => {
        return news.render('.blog__col', AMOUNT_FEED);
    })
    .catch(error => {
        console.log(error);
    });