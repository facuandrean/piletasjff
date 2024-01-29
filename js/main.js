import { btnNav } from './btn-nav.js';
import { slider } from './carousel.js';
import { form } from './form.js';
import { header } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    btnNav();
    slider();
    form();
})