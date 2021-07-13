const nav = document.querySelector('#main-nav');
const navIcon = document.querySelector('#nav-icon');
const navLinks = document.querySelector('#main-nav ul');

root.style.setProperty('--nav-pos', 'sticky');
root.style.setProperty('--ul-pos', 'absolute');
root.style.setProperty('--ul-transform', 'translateY(-150px)');
root.style.setProperty('--icon-display', 'flex');

setTimeout(
    () => navLinks.style.transition = 'transform .3s ease-in-out',
    200
);

function openNav() {
    nav.classList.toggle('open');
};

navIcon.addEventListener('click', openNav);