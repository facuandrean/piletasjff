import { btnNav } from './btn-nav.js';
import { carousel, carouselBefore, carouselAfter } from './glider.js';
import { header } from './header.js';
import { loader } from './img.js';
import { nav } from './nav.js';

const $gliderBefore = document.querySelector('#glider-before');
const $gliderAfter = document.querySelector('#glider-after');

document.addEventListener('DOMContentLoaded', () => {
    header();
    btnNav();
    nav();
    // carousel();
    if (!($gliderAfter === null || $gliderBefore === null)) {
        carouselAfter();
        carouselBefore();
    } else {
        carousel();
    }
    loader();
})