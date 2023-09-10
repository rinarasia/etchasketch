document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    setColor();

    let btnPopup = document.querySelector("#popup");
    btnPopup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })
    console.log("hi");
})

function createBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
        
        div.addEventListener("mouseover", colorDiv);
        
    }
}

function getSize() {
    let input = prompt("How many squares?");
    let errorMsg = document.querySelector("#errorMsg");
    if(input == "" || input < 0 || input > 100){
        errorMsg.innerHTML = "Please provide a number between 0 and 100";
    } else {
        return input;
    }
}

function colorDiv() {
    if(color === "random"){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    } else {
        this.style.backgroundColor = "black";
    };
}

function setColor(colorChoice) {
    color = colorChoice;
}

function clearBoard() {
    let divs = document.querySelectorAll("div");

    divs.forEach((div) => div.style.backgroundColor = "white");
}