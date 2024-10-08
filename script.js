const container = document.querySelector('.container');
const childDiv = document.createElement('div');

for (let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {

        const childDiv = document.createElement('div');
        childDiv.classList.add('child-div');
        //childDiv.textContent = j;
        container.appendChild(childDiv);
    }
}

const allChildDivs = document.querySelectorAll('.child-div');

allChildDivs.forEach(childDiv => {
    childDiv.addEventListener('mouseenter', () => {
        childDiv.style.backgroundColor = "lightpink";
    })
})