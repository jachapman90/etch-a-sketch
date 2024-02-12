
const body = document.querySelector('body');
const cont = document.querySelector('.container');

function doIt() {
    for (let i = 0; i < 16; i++) {
        for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.className = "pixel";
        cont.appendChild(div);
        };
    };
};

addEventListener("mouseover", (event) => {
    let target = event.target;

    switch(target.className) {
        case 'pixel':
        target.style.backgroundColor = "darkgrey";
}});

doIt();