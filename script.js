// Board dimensions
let board = document.querySelector("#board");
let boardWidth = parseInt(board.offsetWidth);

// Slider values
let points = document.querySelector("#points");
let slider = document.querySelector("#slider");
points.textContent = slider.value;
let numCells = slider.value;


function deleteBoard() {
    document.querySelectorAll(".row").forEach(e => {e.remove()});
}

let bgColor = document.querySelector("#bg").value;

function drawBoard(grid, bgColor) {
    deleteBoard();
    numCells = slider.value;
    for (let j = 0; j < numCells; j++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.boxSizing = "border-box";
        let cellWidth = `${boardWidth / grid}px`;
        board.appendChild(row);

        for (let i = 0; i < numCells; i++) {
            let cell = document.createElement("div");
            cell.style.width = cellWidth;
            cell.style.height = cellWidth;
            cell.style.border = "0.5px solid rgb(10,10,10)";
            cell.style.boxSizing = "border-box";
            cell.style.backgroundColor = bgColor;
            cell.className = "cell";
            
            row.appendChild(cell);
        }
    }
}

drawBoard(numCells, bgColor);

slider.addEventListener('input', () => {
    points.textContent = slider.value;
    numCells = slider.value;
    bgColor = document.querySelector("#bg").value;

    drawBoard(numCells, bgColor);
});

// Remove grid
let gridToggle = document.querySelector("#gridtoggle");


gridToggle.addEventListener('click', () => {
    if (gridToggle.value == 0) {
        gridToggle.value = 1;
        gridToggle.style.color = "rgb(7, 3, 46)";
        gridToggle.style.border = "2px solid rgb(7, 3, 46)";
        gridToggle.style.backgroundColor = "rgb(17, 236, 17)";
        document.querySelectorAll(".cell").forEach((c) => {
            c.style.border = "0.5px solid rgb(10,10,10)";
        })  
    } else if (gridToggle.value == 1) {
        gridToggle.value = 0;
        gridToggle.style.color = "rgb(17, 236, 17)";
        gridToggle.style.border = "2px solid rgb(17, 236, 17)";
        gridToggle.style.backgroundColor = "rgb(7, 3, 46)";
        document.querySelectorAll(".cell").forEach((c) => {
            c.style.border = "none";
        })
    }
});


// Rainbow

let rainbow = document.querySelector("#rainbow");
rainbow.value = 0;

rainbow.addEventListener('click', () => {
    if (rainbow.value == 0) {
        rainbow.value = 1;
        rainbow.style.color = "rgb(7, 3, 46)";
        rainbow.style.border = "2px solid rgb(7, 3, 46)";
        rainbow.style.backgroundColor = "rgb(17, 236, 17)";   
    } else if (rainbow.value == 1) {
        rainbow.value = 0;
        rainbow.style.color = "rgb(17, 236, 17)";
        rainbow.style.border = "2px solid rgb(17, 236, 17)";
        rainbow.style.backgroundColor = "rgb(7, 3, 46)";
    }
});



// Pen
board.addEventListener('mouseover', event => {
    let square = event.target;
    if (rainbow.value == 1) {
        square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    } else {
        if (eraser.value == 1) {
            square.style.backgroundColor = document.querySelector("#bg").value;    
        } else if (eraser.value == 0) {
            square.style.backgroundColor = document.querySelector("#pen").value;
        }
    }
});


// Clear the entire board
let clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    document.querySelectorAll(".cell").forEach((item) => {
        item.style.backgroundColor = document.querySelector("#bg").value;
    });
});

// Eraser
let eraser = document.querySelector("#eraser");

eraser.addEventListener('click', () => {
    if (eraser.value == 0) {
        eraser.value = 1;
        eraser.style.color = "rgb(7, 3, 46)";
        eraser.style.border = "2px solid rgb(7, 3, 46)";
        eraser.style.backgroundColor = "rgb(17, 236, 17)";
        
    } else if (eraser.value == 1) {
        eraser.value = 0;
        eraser.style.color = "rgb(17, 236, 17)";
        eraser.style.border = "2px solid rgb(17, 236, 17)";
        eraser.style.backgroundColor = "rgb(7, 3, 46)";
       
    }
});

// Change background
let bgToggle = document.querySelector("#bg");
bgToggle.addEventListener("change", () => {
    document.querySelectorAll(".cell").forEach((c) => {
        c.style.backgroundColor = document.querySelector("#bg").value;
    })
    
});

// Eraser 




