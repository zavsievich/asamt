let showList = document.querySelector('.js-toggle');

showList.addEventListener('click', openList);
 function openList() {
     let navList = document.querySelector('.js-nav');
     showList.classList.toggle('is-open');
     navList.classList.toggle('is-on');
 }