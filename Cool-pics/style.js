let gallerySection = document.querySelector('.img');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
let modalButton = modal.querySelector('button')
let menuButton = document.querySelector('.menu-btn');
let navMenu = document.querySelectorAll('nav a');

gallerySection.addEventListener('click', async (e) => {
    console.log(e.target.src);

    if(e.target.src !== undefined){
        modalImg.src = e.target.src.replace('wddimg.jpg', 'wddimghighres.jpg')
        modal.showModal();
    }
});

modalButton.addEventListener('click', (e) => {
    modal.close()
})

modal.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.close()
    }
})

menuButton.addEventListener('click', (e) => {
    menuButton.classList.toggle('change');
    navMenu.forEach((i) => {
        i.classList.toggle('shown');
    });
});

