import { btnNav } from './btn-nav.js';
import { slider } from './carousel.js';
import { formPhp } from './form-php.js';
import { formFS } from './form-FS.js';
import { header } from './header.js';
import { scroll } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    btnNav();
    slider();
    // formPhp();
    formFS();
    scroll();
})