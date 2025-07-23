/*--------------------    Functions    ----------------------- */
function getContentWidth (element) {
  var styles = getComputedStyle(element)

  return element.clientWidth
    - parseFloat(styles.paddingLeft)
    - parseFloat(styles.paddingRight)
}

/*-------------------- Events Handlers ----------------------- */


/*--------------------      Main      ----------------------- */
const mainContainer = document.querySelector(".main-container");

// Add all squares to the grid
for (let row = 0; row < 16; row++) {
    for (let column = 0; column < 16; column++) {
        let square = document.createElement("div");
        mainContainer.appendChild(square);
    }
}

const squares = document.querySelectorAll(".main-container div");

let containerSize = getContentWidth(mainContainer);
let squareSize = containerSize / 16;

squares.forEach(square => {
    square.classList.add("square");
    square.setAttribute("style", `height: ${squareSize}px; width: ${squareSize}px;`);
});