
const body = document.querySelector('body');
const cont = document.querySelector('#container');
const input = document.querySelector('#input');
const start = document.querySelector('#start');

let pixelCount;
let row = document.createElement('div');

start.addEventListener('click', () => {
    drawRow();
})


function numCheck() {
    pixelCount = input.value;
    console.log(pixelCount);
     if (isNaN(pixelCount)) {
        wrong();
     } else if (pixelCount > 100 || pixelCount < 0) {
        wrong();
     } else {
        return(pixelCount);
     };
};

function wrong() {
    alert("Please enter a number between 1-100");
};

function drawPixel() {
    let pixelCell = document.createElement('div');
    pixelCell.id = 'pixelCell';
    pixelCell.style.flex = '1 1 0px';
    pixelCell.style.display = 'flex';
    pixelCell.style.justifyContent = 'center';
    pixelCell.style.alignItems = 'stretch';
    pixelCell.style.boxSizing = 'border-box';
    let pixel = document.createElement('div');
    pixel.id = 'pixel';
    pixel.style.display = 'flex';
    pixel.style.justifyContent = 'center';
    pixel.style.alignItems = 'center';
    pixel.style.width = '100%';
    pixel.style.paddingTop = '100%';
    pixel.style.minWidth = '10px';
    pixel.style.border = 'solid 2px';
    pixel.style.borderColor = 'black';
    pixel.style.boxSizing = 'border-box';
    pixelCell.appendChild(pixel);
    row.appendChild(pixelCell);
};

function drawRow() {
    numCheck();
    let i = pixelCount;
    console.log(i);
    row.style.display = 'flex';
    row.style.justifyContent = 'space-evenly';
    row.style.gap = '2px';
    cont.appendChild(row);
    while (i > 0) {
        drawPixel();
        console.log(i);
        i--;
    };
};