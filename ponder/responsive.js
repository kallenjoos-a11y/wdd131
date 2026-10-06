let menuButton = document.querySelector('.menu-btn');
let navMenu = document.querySelectorAll('nav a');

menuButton.addEventListener('click', (e) => {
    menuButton.classList.toggle('change');
    navMenu.forEach((i) => {
        i.classList.toggle('shown');
    });
});
