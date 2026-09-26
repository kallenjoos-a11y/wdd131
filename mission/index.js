
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    let border = document.getElementById('content');
    let img = document.querySelector('img');
    let underline = document.querySelector('h3');

    if (current == 'dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        border.style.borderColor = "white";
        underline.style.borderBottom = "1px solid white";
        img.src = "byui-logo-white.png";
        document.querySelector("h3").style.color = "#4f9bff";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        border.style.borderColor = "black";
        underline.style.borderBottom = "1px solid black";
        img.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
        document.querySelector("h3").style.color = "#0000ff";
    }
}           
                    