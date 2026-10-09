let gallerySection = document.querySelector('.img');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
let modalButton = modal.querySelector('button')

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

