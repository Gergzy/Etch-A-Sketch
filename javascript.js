const container = document.querySelector('.container');
const slider = document.getElementById('myRange');
const output = document.getElementById('demo');
const output2 = document.getElementById('demo2')
const eraser = document.querySelector('.eraser')
const bwMode = document.querySelector('.bwMode')
const colorMode = document.querySelector('.colorMode')



function createGrid(gridAmount=4) {
    let i = 0;
    while (i<gridAmount) {
        let j = 0;
        const rowColDiv = document.createElement('div');
        rowColDiv.classList.add('rowCol');
        while (j<gridAmount) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            rowColDiv.appendChild(gridItem);
            j++;
        }
        container.appendChild(rowColDiv);
        i++;
    }
}

function colorRandomizer() {
    const random = Math.floor(Math.random()*256)
    return random;
}

function cMode() {
    container.addEventListener('mouseover', function handleClick(event) {
        const r = colorRandomizer();
        const b = colorRandomizer();
        const g = colorRandomizer();
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        container.style.backgroundColor = 'aliceblue';
})
}

function blackWhiteMode() {
    container.addEventListener('mouseover', function handleClick(event) {
        event.target.style.backgroundColor = 'black'
        container.style.backgroundColor = 'aliceblue'
        
})
}

output.innerHTML = slider.value;
output2.innerHTML = slider.value;
slider.oninput = function () {
    output2.innerHTML = this.value;
    output.innerHTML = this.value;
    container.innerHTML = ''
    createGrid(this.value)
}

eraser.addEventListener('click', function myFunc() {
    container.innerHTML = ''
    createGrid(slider.value)
})

bwMode.addEventListener('click', blackWhiteMode)

colorMode.addEventListener('click', cMode)

createGrid()