/*--------------------  Global Variables  ----------------------- */
let NUMBER_OF_SQUARES = 16;
let HOVER_DARK = 0;

/*--------------------    Functions    ----------------------- */
function getContentWidth(element) {
    var styles = getComputedStyle(element)

    return element.clientWidth
        - parseFloat(styles.paddingLeft)
        - parseFloat(styles.paddingRight)
}

function removeSquares() {
    const squares = document.querySelectorAll(".main-container div");
    squares.forEach(square => square.remove());
}

function addSquares(numSquares) {
    for (let row = 0; row < numSquares; row++) {
        for (let column = 0; column < numSquares; column++) {
            let square = document.createElement("div");
            mainContainer.appendChild(square);
        }
    }
}

function randomColor() {
    return Math.floor(Math.random() * 255) + 1
}

/*-------------------- Events Handlers ----------------------- */
function renderSquares() {
    removeSquares();
    addSquares(NUMBER_OF_SQUARES);

    const squares = document.querySelectorAll(".main-container div");

    let containerSize = getContentWidth(mainContainer);
    let squareSize = containerSize / NUMBER_OF_SQUARES;

    squares.forEach(square => {
        square.classList.add("square");
        square.setAttribute("style", `height: ${squareSize}px; width: ${squareSize}px;`);
    });
}

function hoverEffect(e) {
    e.target.style.background = `rgb(${randomColor()} ${randomColor()} ${randomColor()} / ${HOVER_DARK}%)`;
    if (HOVER_DARK !== 100) HOVER_DARK += 10;
}

function changeGrid(e) {
    let numSquares = Number(prompt("Numbers of squares: ", 16));
    if (isNaN(numSquares)) return;

    if (numSquares < 1 || numSquares > 100) {
        if (numSquares < 1) alert("Select a number of square greater than 0");
        if (numSquares > 100) alert("Select a number of square less than 100");
        return;
    }

    NUMBER_OF_SQUARES = numSquares;
    renderSquares();
}

/*--------------------      Main      ----------------------- */
const mainContainer = document.querySelector(".main-container");
const btnChangeGrid = document.querySelector(".change-grid");

// Page Load Event Listener
addEventListener("load", renderSquares);

// Hover Effect Event Listener
mainContainer.addEventListener("mouseover", hoverEffect);

// Change Grid Event Listener
btnChangeGrid.addEventListener("click", changeGrid);