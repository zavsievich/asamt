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
    const tabNav = Array.prototype.slice.call(document.querySelectorAll('.js-tab'));
    const activeClass = 'is-active';

    tabNav.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const id = this.getAttribute('data-tab');
            const content = document.querySelector('.js-tab-content[data-tab="' + id + '"]');
            const activeTrigger = document.querySelector('.js-tab.' + activeClass);
            const activeContent = document.querySelector('.js-tab-content.' + activeClass);
            activeTrigger.classList.remove('is-active');
            trigger.classList.add('is-active');

            activeContent.classList.remove('is-active');
            content.classList.add('is-active');
        })
    })
}

tabWrap();

function activateItem() {
    const asideList = Array.prototype.slice.call(document.querySelectorAll('.js-aside'));
    const activeClass = 'is-active';

    asideList.forEach(function (item) {
        item.addEventListener('click', function activateBtn() {
            const activeBtn = document.querySelector('.js-aside.' + activeClass);

            activeBtn.classList.remove('is-active');
            item.classList.add('is-active');
        });
    });
}

activateItem();
