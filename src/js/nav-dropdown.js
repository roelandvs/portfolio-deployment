const nav = document.querySelector('#main-nav');
const navIcon = document.querySelector('#nav-icon');
const navLinks = document.querySelector('#main-nav ul');
const root = document.documentElement;

navLinks.style.transition = 'transform .3s ease-in-out';

function openNav() {
    nav.classList.toggle('open');
};

navIcon.addEventListener('click', openNav);