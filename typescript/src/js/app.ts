import 'bootstrap';
import '../sass/styles.scss';

const AMOUNT_FEED: number = 3; 

import { BlogRenderer } from "./blog/BlogRenderer"
 

const blogData = new BlogRenderer();
blogData.render('.blog__col', AMOUNT_FEED);