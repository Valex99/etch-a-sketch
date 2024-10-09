const container = document.querySelector('.container');
const childDiv = document.createElement('div');
const newSquare = document.createElement('div');


for (let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const childDiv = document.createElement('div');
        childDiv.classList.add('child-div');
        container.appendChild(childDiv);
    }
}


const allChildDivs = document.querySelectorAll('.child-div');


allChildDivs.forEach(childDiv => {
    childDiv.addEventListener('mouseenter', () => {
        childDiv.style.backgroundColor = "lightpink";
    })
});


const btn = document.querySelector('.customize-button');


btn.addEventListener('click', () => {
    let width;
    do {
        width = parseInt(prompt('Enter the number of squares on each side: '));
    }
    while (width <= 0 || width > 100 /*|| isNaN(width)*/);

    // Call function to delete entire grid
    deleteGrid();
    // Call function to create new grid
    createCustomGrid(width);
});


function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function createCustomGrid(squaresPerSide) {
    // Calculate border first to get the remining space (border is always 1px)
    let remainingSpace = 960 - (squaresPerSide * 2)
    let newWidth = remainingSpace / squaresPerSide;

    for(let i = 0; i < squaresPerSide; i++) {
        for(let j = 0; j < squaresPerSide; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('new-square');
            newSquare.style.width = newWidth + 'px';
            newSquare.style.height = newWidth + 'px';
            newSquare.style.border = '1px solid black';
            container.appendChild(newSquare);
        }
    }
}