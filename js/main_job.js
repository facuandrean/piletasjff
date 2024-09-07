import { btnNav } from './btn-nav.js';
import { carousel } from './glider.js';
import { header } from './header.js';
import { loader } from './img.js';
import { nav } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    btnNav();
    nav();
    carousel();
    loader();
})