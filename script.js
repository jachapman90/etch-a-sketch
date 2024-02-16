
const body = document.querySelector('body');
const cont = document.querySelector('.container');
const btn = document.querySelector('button');
const rgb = document.querySelector('#rgb');
const grey = document.querySelector('#grey');


let j = 16;

function doIt() {
    for (let i = 0; i < j; i++) {
        for (let i = 0; i < j; i++) {
            let div = document.createElement('div');
            div.className = "pixel";
            cont.appendChild(div);
        }};
        const pixel = document.querySelectorAll('.pixel');
        let w = Math.floor(100 / j);
        console.log(w);
        for (let i = 0; i < pixel.length; i++){
            console.log(w);
            pixel[i].style.width = `${w}%`;
        };
};

doIt();

addEventListener("mouseover", (event) => {
    let target = event.target;

    switch(target.className) {
        case 'pixel':
            if (color === true) {
                let pixelColor = randomColor();
                console.log(pixelColor);
                target.style.backgroundColor = pixelColor;
            } else if (mono === true){
                target.style.backgroundColor = "black";
                target.style.opacity = 0.1;
            
            } else if (shade === true) {
                let op = target.style.opacity;
                console.log(op);
                op = darken(op);
                target.style.opacity = op;
                //target.style.opacity = ((target.style.opacity * 10) + 1) / 10;
                //darken(target);
                
            }
}});

function darken(target) {
    target = ((target * 10) + 1) / 10;
    console.log(target);
    return(target);
};

let color = false;
let mono = true;
let shade = false;

addEventListener("click", (event) => {

    let target = event.target;

    const shading = document.querySelector('#shade');

    switch(target.id) {
        case 'resize':
            j = Number(window.prompt("Please enter a number between 1-100", ""));
            infanticide(cont);
            doIt();
            break;


        case 'rgb':
            rgb.classList.toggle('active');
            grey.classList.remove('active');
            color = true;
            mono = false;
            shade = false;
            console.log(color);
            break;

        case 'grey':
            grey.classList.toggle('active');
            rgb.classList.remove('active');
            color = false;
            mono = true;
            shade = false;
            console.log(color);
            break;

        case 'shade':
            shading.classList.toggle('active');
            grey.classList.remove('active');
            rgb.classList.remove('active');
            mono = false;
            color = false;
            shade = !shade;   
            break; 
        }});

function infanticide(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }   

}

function randomColor() {
    let selection = Math.floor(Math.random() * 10) % 7;
    console.log(selection);
    let pixelColor;
    switch (selection) {
        case 0:
            pixelColor = "red";
            break;

        case 1:
            pixelColor = "orange";
            break;

        case 2:
            pixelColor = "yellow";
            break;

        case 3:
            pixelColor = "green";
            break;

        case 4:
            pixelColor = "blue";
            break;

        case 5:
            pixelColor = "indigo";
            break;

        case 6:
            pixelColor = "violet";
            break;
        };
    return pixelColor;
}

