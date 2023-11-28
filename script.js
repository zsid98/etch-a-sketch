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

function drawBoard(grid) {
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
            cell.style.backgroundColor = "black";
            cell.className = "cell";
            
            row.appendChild(cell);
        }
        console.log()   
    }
}



drawBoard(numCells);

slider.addEventListener('input', () => {
    points.textContent = slider.value;
    numCells = slider.value;
    drawBoard(numCells);
});






// Pen
board.addEventListener('mouseover', event => {
    if (event.target !== board) {
        let square = event.target;
        let penColor = document.querySelector("#colorpicker").value;
        square.style.backgroundColor = penColor;
    };
});

// Clear the entire board
let clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    document.querySelectorAll(".cell").forEach((item) => {
        item.style.backgroundColor = "black";
    })
    

})
