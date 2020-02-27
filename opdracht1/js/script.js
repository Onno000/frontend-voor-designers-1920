/*  /jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
    / eslint - env browser /
    /eslint 'no-console':0/
*/

// ----- Declaraties

// Hier declareer ik alle plaatjes op base van hun class met een selectorAll.

var allePlaatjes = document.querySelectorAll("main>article>div");
var rodePlaatjes = document.querySelectorAll(".rood");
var gelePlaatjes = document.querySelectorAll(".geel");
var blauwePlaatjes = document.querySelectorAll(".blauw");
var zwartWitPlaatjes = document.querySelectorAll(".zwart_wit");

// Hier declareer ik alle buttons.

var buttonAlles = document.querySelector("main>header>button:nth-child(1)");
var buttonRood = document.querySelector("main>header>button:nth-child(2)");
var buttonGeel = document.querySelector("main>header>button:nth-child(3)");
var buttonBlauw = document.querySelector("main>header>button:nth-child(4)");
var buttonZwartWit = document.querySelector("main>header>button:nth-child(5)");

// Hier decalreer ik i voor in de loops.

var i;

// ----- Eventhandlers

// Hier schrijf ik functies om een classList toe te voegen, deze worden met een loop toegevoegd zodat zij allemaal worden getoond.

function herstel() {
  for (i = 0; i < rodePlaatjes.length; i++) {
    rodePlaatjes[i].classList.remove("verwijderen");
    buttonRood.classList.add("roodbutton");
  }
  for (i = 0; i < gelePlaatjes.length; i++) {
    gelePlaatjes[i].classList.remove("verwijderen");
    buttonGeel.classList.add("geelbutton");
  }
  for (i = 0; i < blauwePlaatjes.length; i++) {
    blauwePlaatjes[i].classList.remove("verwijderen");
    buttonBlauw.classList.add("blauwbutton");
  }
  for (i = 0; i < zwartWitPlaatjes.length; i++) {
    zwartWitPlaatjes[i].classList.remove("verwijderen");
    buttonZwartWit.classList.add("zwartwitbutton");
  }
}

// Hier kijk ik of het plaatje de class niet bevat. Dan voeg ik de class (op de button en plaatje) eraan toe en anders haal ik het er af. Een toggle als het ware, dat kon alleen niet omdat de herstel button dan niet kon werken.

function rood() {
  for (i = 0; i < rodePlaatjes.length; i++) {
    if (!rodePlaatjes[i].classList.contains("verwijderen")) {
      rodePlaatjes[i].classList.add("verwijderen");
      buttonRood.classList.remove("roodbutton");
    } else {
      rodePlaatjes[i].classList.remove("verwijderen");
      buttonRood.classList.add("roodbutton");
    }
  }
}

function geel() {
  for (i = 0; i < gelePlaatjes.length; i++) {
    if (!gelePlaatjes[i].classList.contains("verwijderen")) {
      gelePlaatjes[i].classList.add("verwijderen");
      buttonGeel.classList.remove("geelbutton");
    } else {
      gelePlaatjes[i].classList.remove("verwijderen");
      buttonGeel.classList.add("geelbutton");
    }
  }
}

function blauw() {
  for (i = 0; i < blauwePlaatjes.length; i++) {
    if (!blauwePlaatjes[i].classList.contains("verwijderen")) {
      blauwePlaatjes[i].classList.add("verwijderen");
      buttonBlauw.classList.remove("blauwbutton");
    } else {
      blauwePlaatjes[i].classList.remove("verwijderen");
      buttonBlauw.classList.add("blauwbutton");
    }
  }
}

function zwartWit() {
  for (i = 0; i < zwartWitPlaatjes.length; i++) {
    if (!zwartWitPlaatjes[i].classList.contains("verwijderen")) {
      zwartWitPlaatjes[i].classList.add("verwijderen");
      buttonZwartWit.classList.remove("zwartwitbutton");
    } else {
      zwartWitPlaatjes[i].classList.remove("verwijderen");
      buttonZwartWit.classList.add("zwartwitbutton");
    }
  }
}

// ----- Eventlisteners

// Hier zet ik eventlisteners op de buttons zodat de functies uitgevoerd kunnen worden.

buttonAlles.addEventListener("click", herstel);
buttonRood.addEventListener("click", rood);
buttonGeel.addEventListener("click", geel);
buttonBlauw.addEventListener("click", blauw);
buttonZwartWit.addEventListener("click", zwartWit);
