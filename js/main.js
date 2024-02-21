import { btnNav } from './btn-nav.js';
import { slider } from './carousel.js';
import { formPhp } from './form-php.js';
import { formFS } from './form-FS.js';
import { header } from './header.js';
import { scroll } from './scroll.js';
import { nav } from './nav.js';
import { scrollSpy } from './scroll-spy.js';
import { carousel } from './glider.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    btnNav();
    slider();
    // formPhp();
    formFS();
    scroll();
    nav();
    scrollSpy();
    carousel();
})