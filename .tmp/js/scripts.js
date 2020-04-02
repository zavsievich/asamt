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
  var tabNav = document.querySelectorAll('.js-tab');
  var tabContents = document.querySelectorAll('.js-tab-content');
  var isActive = document.querySelector('is-active');
  tabNav.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab');
      var content = document.querySelector('.js-tab-content[data-tab="' + id + '"]');
      var activeTrigger = document.querySelector('.js-tab.is-active');
      var activeContent = document.querySelector('.js-tab-content.is-active');
      activeTrigger.classList.remove('is-active');
      trigger.classList.add('is-active');
      activeContent.classList.remove('is-active');
      content.classList.add('is-active');
    });
  });
}

tabWrap();