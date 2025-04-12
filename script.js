const container = document.querySelector('#container');
container.setAttribute('class', 'grid');

for (let i = 1; i <= 16; i++) {
    const rows = document.createElement('div');
    rows.setAttribute('class', 'boxRow');
    container.appendChild(rows);
    for (let j = 1; j <= 16; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'gridElement');
        cell.style.height = String(850 / 16) + "px";
        cell.style.width = String(850 / 16) + "px";
        rows.appendChild(cell);
        cell.addEventListener('mouseover', () => {
        cell.setAttribute('class', 'gridElementChanged')
        })
    }
    
}


const button = document.createElement('button');
button.textContent = 'Change Grid Dimensions';
button.setAttribute('class', 'button')
document.body.appendChild(button)

button.addEventListener('click', () => {
    let row = prompt('How many rows do you want to set?');
    let column = prompt('How many columns do you want to set?');
    container.innerHTML = '';

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
            cell.setAttribute('class', 'gridElementChanged')
            
        })
    }
}})
