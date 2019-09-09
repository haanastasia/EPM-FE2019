'use strict';

import './blog/main';

import 'bootstrap';

import '../sass/styles.scss';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../userfiles/', true, /\.(png|jpe?g|svg)$/));
