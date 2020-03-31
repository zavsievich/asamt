"use strict";

function navWrap() {
  var btnNav = document.querySelector('.js-toggle');
  var navList = document.querySelector('.js-nav');
  btnNav.addEventListener('click', toggleNav);

  function toggleNav() {
    btnNav.classList.toggle('is-open');
    navList.classList.toggle('is-on');
  }
}

navWrap();

function tab() {
  var tabNav = document.querySelectorAll('.js-tab'),
      tabContent = document.querySelectorAll('.js-tab-content'),
      tabName;
  tabNav.forEach(function (item) {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(function (item) {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(function (item) {
      item.classList.contains(tabName) ? item.classList.add('is-show') : item.classList.remove('is-show');
    });
  }
}

tab();