// Code in SANDBOX
const sketchpad = document.querySelector(".sketchpad-section");
const createGridButton = document.querySelector(".custom-grid");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const opacity = document.querySelector(".opacity");
const clear = document.querySelector(".clear");

// Starting / default grid size
let gridSize = 50;

// Function for creating new custom grid
function createCustomGrid(newGrid) {
  let widthSingleElement = 1295 / newGrid;
  let heightSingleElement = 865 / newGrid; //866

  for (let i = 0; i < newGrid; i++) {
    for (let j = 0; j < newGrid; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("new-square");
      newSquare.style.width = widthSingleElement + "px";
      newSquare.style.height = heightSingleElement + "px";
      //newSquare.style.border = "1px solid black";
      sketchpad.appendChild(newSquare);
    }
  }
  stylingNewGrid();
}

// Default mode
function stylingNewGrid() {
  const allNewSquares = document.querySelectorAll(".new-square");
  allNewSquares.forEach((newSquare) => {
    newSquare.addEventListener("mouseenter", () => {
      // Create a variable here - user input
      newSquare.style.backgroundColor = "black";
    });
  });
}

createCustomGrid(gridSize);

// CUSTOM GRID BUTTON
createGridButton.addEventListener("click", function () {
  do {
    gridSize = parseInt(prompt("Enter the number of squares per side: "));
  } while (gridSize <= 0 || gridSize > 100);
  userInput = gridSize;
  console.log(userInput);
  deleteGrid();
  createCustomGrid(gridSize);
});

// RAINBOW BUTTON - Maybe add option to clear grid before implementing this
rainbow.addEventListener("click", function () {
  deleteGrid();
  createCustomGrid(gridSize);
  const allNewSquares = document.querySelectorAll(".new-square");
  allNewSquares.forEach((newSquare) => {
    newSquare.addEventListener("mouseenter", () => {
      // Generate random RGB values
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`;

      newSquare.style.backgroundColor = randomColor;
      // If other button is clicked - reset color
    });
  });
});

// ERASER BUTTON
eraser.addEventListener("click", function () {
  const allNewSquares = document.querySelectorAll(".new-square");
  allNewSquares.forEach((newSquare) => {
    newSquare.addEventListener("mouseenter", () => {
      newSquare.style.backgroundColor = "white";
    });
  });
});

// OPACITY BUTTON
opacity.addEventListener("click", function () {
  deleteGrid();
  createCustomGrid(gridSize);
  const allNewSquares = document.querySelectorAll(".new-square");

  allNewSquares.forEach((newSquare) => {
    let startingOpacity = 0.0;
    newSquare.addEventListener("mouseenter", () => {
      startingOpacity += 0.1;

      newSquare.style.backgroundColor = `rgb(${0}, ${0}, ${0}, ${startingOpacity})`;
    });
  });
});

// CLEAR BUTTON
clear.addEventListener("click", function () {
  deleteGrid();
  createCustomGrid(gridSize);
});

// Delete Grid Function
function deleteGrid() {
  while (sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }
}
