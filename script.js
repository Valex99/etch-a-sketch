const sketchpad = document.querySelector(".sketchpad-section");
const createGridButton = document.querySelector(".custom-grid");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow");

// Create grid 16x16 function
function createDefaultGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const defaultSquare = document.createElement("div");
      defaultSquare.classList.add("default-square");
      sketchpad.appendChild(defaultSquare);
    }
  }
  // Select every element on 16x16 grid
  const allDefaultSquares = document.querySelectorAll(".default-square");
  allDefaultSquares.forEach((defaultSquare) => {
    defaultSquare.addEventListener("mouseenter", () => {
      defaultSquare.style.backgroundColor = "gray";
    });
  });
}
// Function call for default grid to be created
createDefaultGrid();

//  Get input from the user for custom grid
createGridButton.addEventListener("click", function () {
  let newGrid;
  do {
    newGrid = parseInt(prompt("Enter the number of squares per side: "));
  } while (newGrid <= 0 || newGrid > 100);
  deleteGrid();
  createCustomGrid(newGrid);
});

// Clear grid button
clear.addEventListener("click", function () {
  deleteGrid();
  // This will have to be modified (default grid or custom?)
  createDefaultGrid();
});

// Function for creating new custom grid
function createCustomGrid(newGrid) {
  let widthSingleElement = 1296 / newGrid;
  let heightSingleElement = 862 / newGrid;

  for (let i = 0; i < newGrid; i++) {
    for (let j = 0; j < newGrid; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("new-square");
      newSquare.style.width = widthSingleElement + "px";
      newSquare.style.height = heightSingleElement + "px";
      newSquare.style.border = "1px solid black";
      newSquare.style.backgroundColor = "lightgreen";
      sketchpad.appendChild(newSquare);
    }
  }
  stylingNewGrid();
}

function stylingNewGrid() {
  const allNewSquares = document.querySelectorAll(".new-square");
  allNewSquares.forEach((newSquare) => {
    newSquare.addEventListener("mouseenter", () => {
      // Create a variable here - user input
      newSquare.style.backgroundColor = "orange";
    });
  });
}


rainbow.addEventListener("click", function () {



});

function deleteGrid() {
  while (sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }
}
