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

function alles() {
  //   rood();
  //   geel();
  //   zwartWit();
  //   blauw();
  //   buttonAlles.classList.toggle("kleurbutton");

  clear();
}

function clear() {
  //rood
  for (i = 0; i < rodePlaatjes.length; i++) {
    rodePlaatjes[i].classList.add("toevoegen");
  }
  //rood
  for (i = 0; i < gelePlaatjes.length; i++) {
    gelePlaatjes[i].classList.add("toevoegen");
  }
  //rood
  for (i = 0; i < blauwePlaatjes.length; i++) {
    blauwePlaatjes[i].classList.add("toevoegen");
  }
  //rood
  for (i = 0; i < zwartWitPlaatjes.length; i++) {
    zwartWitPlaatjes[i].classList.add("toevoegen");
  }
}

function rood() {
  //   for (i = 0; i < rodePlaatjes.length; i++) {
  //     if (!rodePlaatjes[i].classList.contains("toevoegen")) {
  //       rodePlaatjes[i].classList.add("toevoegen");
  //       buttonRood.classList.add("kleurbutton");
  //     } else {
  //       rodePlaatjes[i].classList.remove("toevoegen");
  //       buttonRood.classList.remove("kleurbutton");
  //     }
  //   }
  for (i = 0; i < rodePlaatjes.length; i++) {
    rodePlaatjes[i].classList.toggle("toevoegen");
  }
}

function geel() {
  for (i = 0; i < gelePlaatjes.length; i++) {
    if (!gelePlaatjes[i].classList.contains("toevoegen")) {
      gelePlaatjes[i].classList.add("toevoegen");
      buttonGeel.classList.add("kleurbutton");
    } else {
      gelePlaatjes[i].classList.remove("toevoegen");
      buttonGeel.classList.remove("kleurbutton");
    }
  }
}

function blauw() {
  for (i = 0; i < blauwePlaatjes.length; i++) {
    if (!blauwePlaatjes[i].classList.contains("toevoegen")) {
      blauwePlaatjes[i].classList.add("toevoegen");
      buttonBlauw.classList.add("kleurbutton");
    } else {
      blauwePlaatjes[i].classList.remove("toevoegen");
      buttonBlauw.classList.remove("kleurbutton");
    }
  }
}

function zwartWit() {
  for (i = 0; i < zwartWitPlaatjes.length; i++) {
    if (!zwartWitPlaatjes[i].classList.contains("toevoegen")) {
      zwartWitPlaatjes[i].classList.add("toevoegen");
      buttonZwartWit.classList.add("kleurbutton");
    } else {
      zwartWitPlaatjes[i].classList.remove("toevoegen");
      buttonZwartWit.classList.remove("kleurbutton");
    }
  }
}

/*

function alles() {
  for (i = 0; i < allePlaatjes.length; i++) {
    if (!allePlaatjes[i].classList.contains("toevoegen")) {
      allePlaatjes[i].classList.add("toevoegen");
      buttonAlles.classList.add("kleurbutton");
    } else {
        allePlaatjes[i].classList.remove("toevoegen");
      buttonAlles.classList.remove("kleurbutton");
    }
  }
}

function alles () {
    allePlaatjes.forEach(function (plaatje) {
        if (plaatje.classList.contains("toevoegen")) {
            plaatje.classList.add("toevoegen");
            buttonAlles.classList.add("kleurbutton");
        } else {
            plaatje.classList.remove("toevoegen");
            buttonAlles.classList.toggle("kleurbutton");
        }
        plaatje.classList.add("toevoegen");
    });
}

*/

/*

function rood() {
  for (i = 0; i < rodePlaatjes.length; i++) {
    rodePlaatjes[i].classList.toggle("toevoegen");
  }
  buttonRood.classList.toggle("kleurbutton");
}

function geel() {
  for (i = 0; i < gelePlaatjes.length; i++) {
    gelePlaatjes[i].classList.toggle("toevoegen");
  }
  buttonGeel.classList.toggle("kleurbutton");
}

function blauw() {
  for (i = 0; i < blauwePlaatjes.length; i++) {
    blauwePlaatjes[i].classList.toggle("toevoegen");
  }
  buttonBlauw.classList.toggle("kleurbutton");
}

function zwartWit() {
  for (i = 0; i < zwartWitPlaatjes.length; i++) {
    zwartWitPlaatjes[i].classList.toggle("toevoegen");
  }
  buttonZwartWit.classList.toggle("kleurbutton");
}

*/

// ----- Eventlisteners

// Hier zet ik eventlisteners op de buttons zodat de functies uitgevoerd kunnen worden.

buttonAlles.addEventListener("click", alles);
buttonRood.addEventListener("click", rood);
buttonGeel.addEventListener("click", geel);
buttonBlauw.addEventListener("click", blauw);
buttonZwartWit.addEventListener("click", zwartWit);
