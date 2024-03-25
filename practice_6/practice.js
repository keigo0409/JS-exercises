function btnClick5() {
    let wordValue = document.getElementById("wordInput").value;
    let result = document.getElementById("result");
    result.textContent = wordValue;
}

function btnClick1(){
    result.classList.add("a")
}

function btnClick2(){
    result.classList.add("b")
}

function btnClick3(){
    result.classList.add("c")
}

function btnClick4(){
    result.classList.add("d")
}

function btnClick6(){
    result.classList.remove("a","b","c","d")
}