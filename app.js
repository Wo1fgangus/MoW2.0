const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

function scrollPackages(direction) {
            const container = document.getElementById('scroll-packages');
            const scrollAmount = 300; // pixels
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }