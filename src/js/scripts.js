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

function tabWrap() {
    const tabNav = document.querySelectorAll('.js-tab');
    const tabContents = document.querySelectorAll('.js-tab-content');
    const isActive = document.querySelector('is-active');

    tabNav.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const id = this.getAttribute('data-tab');
            const content = document.querySelector('.js-tab-content[data-tab="' + id + '"]');
            const activeTrigger = document.querySelector('.js-tab.is-active');
            const activeContent = document.querySelector('.js-tab-content.is-active');

            activeTrigger.classList.remove('is-active');
            trigger.classList.add('is-active');

            activeContent.classList.remove('is-active');
            content.classList.add('is-active');
        })
    })
}

tabWrap();
