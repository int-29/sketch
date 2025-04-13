const container = document.querySelector('#container');
container.setAttribute('class', 'grid');

const navbar = document.createElement('div');
document.body.appendChild(navbar);
navbar.setAttribute('class', 'navbar');

const button = document.createElement('button');
button.textContent = 'Change Grid Dimensions';
button.setAttribute('class', 'button');
navbar.appendChild(button);

const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.setAttribute('class', 'button');
navbar.appendChild(reset);

function createGrid(row, column) {
    for (let i = 1; i <= row; i++) {
        const rows = document.createElement('div');
        rows.setAttribute('class', 'boxRow');
        container.appendChild(rows);
        for (let j = 1; j <= column; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'gridElement');
            cell.style.height = String(850 / row) + "px";
            cell.style.width = String(850 / column) + "px";
            rows.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                let randomColor1 = Math.random() * 256;
                let randomColor2 = Math.random() * 256;
                let randomColor3 = Math.random() * 256;
                cell.style.backgroundColor = 'rgb(' + randomColor1 + ', ' + randomColor2 + ', ' + randomColor3 + ')';
            })
            reset.addEventListener('click', () => {
                cell.style.backgroundColor = 'rgb(255, 255, 255)';
            })
            
        }
    }
}

button.addEventListener('click', () => {
    let desiredRow = prompt('How many rows do you want to set?');
    let desiredColumn = prompt('How many columns do you want to set?');
    while (desiredRow > 100) {
        desiredRow = prompt('How many rows do you want to set? (<100)');
    }
    while (desiredColumn > 100) {
        desiredColumn = prompt('How many columns do you want to set? (<100)');
    }
    container.innerHTML = '';
    createGrid(desiredRow, desiredColumn);
})

createGrid(16, 16);