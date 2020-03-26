"use strict";

var navList = document.querySelector('.header__nav-list');
var navToggle = document.querySelector('.header__nav-toggle');
var navToggleBtn = navToggle;
navToggle.addEventListener('click', function () {
  if (navList.classList.contains('header__nav-list--closed')) {
    navList.classList.remove('header__nav-list--closed');
    navList.classList.add('header__nav-list--opened');
    navToggleBtn.classList.remove('header__nav-toggle--on');
    navToggleBtn.classList.add('header__nav-toggle--off');
  } else {
    navList.classList.add('header__nav-list--closed');
    navList.classList.remove('header__nav-list--opened');
    navToggleBtn.classList.remove('header__nav-toggle--off');
    navToggleBtn.classList.add('header__nav-toggle--on');
  }
});