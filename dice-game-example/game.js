const button = document.querySelector("#rollButton");

button.addEventListener("click", e => {
    setDieImages("assets/die_rolling.gif");

    setTimeout(() => {

        const dice = document.querySelectorAll("#gameboard img");

        dice.forEach((die) => {
            const roll = Math.ceil(Math.random() * 6);
            die.src = `assets/white_dice_${roll}.gif`;
        });
    }, 1000);
});


function setDieImages(imagePath){
    const dice = document.querySelectorAll('#gameboard img')
    dice.forEach(element => {
        element.src = imagePath;
    });
}