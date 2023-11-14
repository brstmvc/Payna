const menuBtn = document.querySelector('.menuBtn');
const navlist2 = document.querySelector('.nav__list2');

menuBtn.addEventListener('click', function() {
    navlist2.classList.toggle('navbar__active');
})