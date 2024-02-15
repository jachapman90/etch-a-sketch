
const body = document.querySelector('body');
const cont = document.querySelector('.container');
const btn = document.querySelector('button');


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
        target.style.backgroundColor = "darkgrey";
}});


addEventListener("click", (event) => {

    let target = event.target;

    switch(target.id) {
        case 'resize':
            j = Number(window.prompt("Please enter a number between 1-100", ""));
            infanticide(cont);
            doIt();
            }});

function infanticide(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }   

}



