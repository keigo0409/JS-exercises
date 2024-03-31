"use strict";

const item = document.getElementById("addItem");
const list = document.getElementById("list");

function prepend() {

    let name = document.getElementById("name");
    const createElement = document.createElement("li");

    createElement.setAttribute("class", "blueText");

    createElement.textContent = name.value + ":" + item.value;

    list.prepend(createElement);
}

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);


