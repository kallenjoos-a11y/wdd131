let heading = document.querySelector('h1');

console.log(heading);

heading.style.color = 'red';
heading.style.fontSize = '3em';
heading.textContent = "Hehe I hacked this"

document.querySelector('p').style.border = 'dotted black';

let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");

topicsClassList.toggle("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                