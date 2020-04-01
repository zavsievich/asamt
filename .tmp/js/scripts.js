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
/*
function tabWrap() {
    const tabNav = document.querySelectorAll('.js-tab'),
        tabContent = document.querySelectorAll('.js-tab-content');

    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-show') :
                item.classList.remove('is-show');
        })
    }
}

tabWrap();*/

function tabWrap() {
  var tabNav = document.querySelectorAll('.js-tab');
  var tabContents = document.querySelectorAll('.js-tab-content');
  tabNav.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab');
      var content = document.querySelector('.js-tab-content[data-tab="' + id + '"]');
      var activeTrigger = document.querySelector('.js-tab.is-active');
      var activeContent = document.querySelector('.js-tab-content.is-show');
      activeTrigger.classList.remove('is-active');
      trigger.classList.add('is-active');
      activeContent.classList.remove('is-show');
      content.classList.add('is-show');
    });
  });
}

tabWrap();