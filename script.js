const container = document.querySelector('.container');
const childDiv = document.createElement('div');
//const childDiv = document.querySelector('div');

for (let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {

        const childDiv = document.createElement('div');
        childDiv.classList.add('child-div');
        childDiv.textContent = j;
        container.appendChild(childDiv);
    }
}

// Set the hover effect when mouse enters a div
// use event listeners

// Add event listener to each child element



