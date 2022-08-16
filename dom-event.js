console.log("Hello from DOM events")

// option : 2 how to add event in element

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option : 3 how to add event in element

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option : 3 ANOTHER // how to add event in element

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option : 4 how to add event in element

const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option : 4 ANOTHER // how to add event in element

const makeGoldenButton = document.getElementById('golden-rod');
makeGoldenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenRod';
});

// option : 4 FInal // We will use this // how to add event in element

document.getElementById('make-toamto').addEventListener('click', function () {
    document.body.style.backgroundColor = 'tomato';
})
