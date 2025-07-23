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
function renderSquares(e) {
    addSquares(NUMBER_OF_SQUARES);

    const squares = document.querySelectorAll(".main-container div");

    let containerSize = getContentWidth(mainContainer);
    let squareSize = containerSize / 16;

    squares.forEach(square => {
        square.classList.add("square");
        square.setAttribute("style", `height: ${squareSize}px; width: ${squareSize}px;`);
    });
}

function hoverEffect(e) {
    let squareBackground = e.target.style.background;
    if (squareBackground === "") {
        e.target.style.background = `rgb(${randomColor()} ${randomColor()} ${randomColor()} / ${HOVER_DARK}%)`;
        if (HOVER_DARK !== 100)  HOVER_DARK += 10; 
    }
    
}

/*--------------------      Main      ----------------------- */
const mainContainer = document.querySelector(".main-container");

addEventListener("load", renderSquares);
mainContainer.addEventListener("mouseover", hoverEffect);
