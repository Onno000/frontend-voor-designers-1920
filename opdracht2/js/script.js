/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// Data

var fotos = [
  "foto00.png",
  "foto01.jpg",
  "foto02.jpg",
  "foto03.jpg",
  "foto04.jpg",
  "foto05.jpg",
  "foto06.jpg"
];

// DOM elementen

var fotoImg = document.querySelector("img");

var huidigeFotoNrSpan = document.querySelector("#huidigeFotoNr");
var laatsteFotoNrSpan = document.querySelector("#laatsteFotoNr");
var huidigeFotoNr = 1;
fotoImg.src = "img/" + fotos[huidigeFotoNr];

var buttonTerug = document.querySelector("#terug");
var buttonVooruit = document.querySelector("#vooruit");

// Toestand

laatsteFotoNrSpan.textContent = fotos.length - 1;
huidigeFotoNrSpan.textContent = huidigeFotoNr;

// EventHandlers

function terug() {
  if (huidigeFotoNr == 0) {
    huidigeFotoNr = fotos.length - 1;
  } else {
    huidigeFotoNr = huidigeFotoNr - 1;
  }
  verversFoto();
}

function vooruit() {
  if (huidigeFotoNr == fotos.length - 1) {
    huidigeFotoNr = 1;
  } else {
    huidigeFotoNr = huidigeFotoNr + 1;
  }
  verversFoto();
}

function verversFoto() {
  fotoImg.src = "img/" + fotos[huidigeFotoNr];
  huidigeFotoNrSpan.textContent = huidigeFotoNr;
}

// Eventlisteners

buttonTerug.addEventListener("click", terug);
buttonVooruit.addEventListener("click", vooruit);

buttonVooruit.addEventListener("keypress", vooruit);
