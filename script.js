const container = document.querySelector('#container');
container.setAttribute('class', 'grid');

const button = document.createElement('button');
button.textContent = 'Change Grid Dimensions';
button.setAttribute('class', 'button')
document.body.appendChild(button)

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
            cell.setAttribute('class', 'gridElementChanged');
            })
        }
    }
}

button.addEventListener('click', () => {
    let desiredRow = prompt('How many rows do you want to set?');
    let desiredColumn = prompt('How many columns do you want to set?');
    container.innerHTML = '';
    createGrid(desiredRow, desiredColumn);
})

createGrid(16, 16);