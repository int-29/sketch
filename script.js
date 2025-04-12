const container = document.querySelector('#container')
container.setAttribute('class', 'grid')


for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'gridElement')
    div.addEventListener('mouseover', () => {
        div.setAttribute('class', 'gridElementChanged')
    })
    container.appendChild(div)
}


