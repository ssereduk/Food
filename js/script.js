require('es6-promise').polyfill();

import  tabs from './modules/tabs';
import  modal from './modules/modal';
import  timer from './modules/timer';
import  slider from './modules/slider';
import  forms from './modules/forms';
import  cards from './modules/cards';
import  calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
     
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId ), 5000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active' );
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-04-11');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    forms('form',modalTimerId);
    cards();
    calc();

 });

