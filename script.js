const container = document.querySelector('#container');
container.setAttribute('class', 'grid');


for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'gridElement');
        div.addEventListener('mouseover', () => {
            div.setAttribute('class', 'gridElementChanged');
        })
        container.appendChild(div);
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

    for (let i = 1; i<=row; i++) {
        for (let j = 1; j<=column; j++){
            const div = document.createElement('div');
            div.setAttribute('class', 'gridElement');
            div.addEventListener('mouseover', () => {
            div.setAttribute('class', 'gridElementChanged');
            })
            container.appendChild(div);
    }}
})


