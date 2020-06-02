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

function tabWrap() {
  var tabNav = Array.prototype.slice.call(document.querySelectorAll('.js-tab'));
  var activeClass = 'is-active';
  tabNav.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab');
      var content = document.querySelector('.js-tab-content[data-tab="' + id + '"]');
      var activeTrigger = document.querySelector('.js-tab.' + activeClass);
      var activeContent = document.querySelector('.js-tab-content.' + activeClass);
      activeTrigger.classList.remove('is-active');
      trigger.classList.add('is-active');
      activeContent.classList.remove('is-active');
      content.classList.add('is-active');
    });
  });
}

tabWrap();

function activateItem() {
  var asideList = Array.prototype.slice.call(document.querySelectorAll('.js-aside'));
  var activeClass = 'is-active';
  asideList.forEach(function (item) {
    item.addEventListener('click', function activateBtn() {
      var activeBtn = document.querySelector('.js-aside.' + activeClass);
      activeBtn.classList.remove('is-active');
      item.classList.add('is-active');
    });
  });
}

activateItem();