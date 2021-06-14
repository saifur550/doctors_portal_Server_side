const hamBurger = document.getElementById('hamburger');
const navItem = document.getElementById('nav__ul');

// click function
hamBurger.addEventListener('click', () => {
    navItem.classList.toggle('show');
});