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
var huidigeFotoNr = 0;
var vorigeFotoNr;

fotoImg.src = "img/" + fotos[huidigeFotoNr];

var buttonTerug = document.querySelector("#terug");
var buttonVooruit = document.querySelector("#vooruit");

// Toestand

laatsteFotoNrSpan.textContent = fotos.length;
huidigeFotoNrSpan.textContent = huidigeFotoNr + 1;

// EventHandlers

function terug() {
  if (huidigeFotoNr == 0) {
    huidigeFotoNr = fotos.length - 1;
  } else {
    huidigeFotoNr -= 1;
  }
  verversFoto();
}

function vooruit() {
  if (huidigeFotoNr == fotos.length - 1) {
    huidigeFotoNr = 0;
  } else {
    huidigeFotoNr += 1;
  }
  verversFoto();
}

function verversFoto() {
  fotoImg.classList.add("volgendefoto");

  fotoImg.addEventListener("transitionend", function() {
    console.log("transitionend");
    fotoImg.src = "img/" + fotos[huidigeFotoNr];
    fotoImg.classList.remove("volgendefoto");
  });

  huidigeFotoNrSpan.textContent = huidigeFotoNr + 1;
}

function groot() {
  fotoImg.classList.toggle("grotefoto");
}

// Eventlisteners

buttonTerug.addEventListener("click", terug);
buttonVooruit.addEventListener("click", vooruit);

fotoImg.addEventListener("click", groot);

// Pijltjestoetsen

document.addEventListener("keydown", function() {
  if (event.keyCode == 39) {
    vooruit();
  } else if (event.keyCode == 37) {
    terug();
  }
});

// venster helemaal fullscreen
