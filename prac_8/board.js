"use strict";

function butotnClick() {
    let name = document.getElementById("name");
    msg.innerText = name.value + ":" + reviewTextarea.value;
}
let reviewTextarea = document.getElementById('reviewTextarea');
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);

function value() {
    let value = document.getElementById("value").value;
    values.push(value);
}

