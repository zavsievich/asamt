function navWrap() {
    const btnNav = document.querySelector('.js-toggle');
    const navList = document.querySelector('.js-nav');

    btnNav.addEventListener('click', toggleNav);

    function toggleNav() {
        btnNav.classList.toggle('is-open');
        navList.classList.toggle('is-on');
    }
}

navWrap();