// Globale declaraties

// ----- Header

var surfTitel = document.querySelector("header>h1:first-of-type");
var filmTitel = document.querySelector("header>h1:last-of-type");

// ----- Main

var main = document.querySelector("main");
var artikelEen = document.querySelector("article:nth-of-type(1)");
var artikelTwee = document.querySelector("article:nth-of-type(2)");

// ----- Nav

var surfNav = document.querySelector("button:first-of-type");
var filmNav = document.querySelector("button:last-of-type");

var surfHeaderNav = document.querySelector("header>a:first-of-type");
var filmHeaderNav = document.querySelector("header>a:last-of-type");

// Weer

function setupWindData(weerData) {
  var sectionWind = document.createElement("section");
  var plaatsP = document.createElement("p");
  var windkrachtH = document.createElement("h3");

  plaatsP.textContent = weerData.liveweer[0].plaats;
  windkrachtH.textContent = weerData.liveweer[0].windk + " kt";

  artikelEen.appendChild(sectionWind);
  sectionWind.appendChild(plaatsP);
  sectionWind.appendChild(windkrachtH);

  // Geen idee of dit werkt
  //
  //
  //
  //

  console.log(Math.max(weerData.liveweer[0].windk));

  windAfwijking(weerData.liveweer[0].plaats, weerData.liveweer[0].windr);
}

// Windafwijking

function windAfwijking(plaats, windrichting) {
  if (windrichting == "Noord") {
    var omgerekendeWindrichting = 16;
  } else if (windrichting == "NNO") {
    var omgerekendeWindrichting = 15;
  } else if (windrichting == "NO") {
    var omgerekendeWindrichting = 14;
  } else if (windrichting == "ONO") {
    var omgerekendeWindrichting = 13;
  } else if (windrichting == "Oost") {
    var omgerekendeWindrichting = 12;
  } else if (windrichting == "OZO") {
    var omgerekendeWindrichting = 11;
  } else if (windrichting == "ZO") {
    var omgerekendeWindrichting = 10;
  } else if (windrichting == "ZZO") {
    var omgerekendeWindrichting = 9;
  } else if (windrichting == "Zuid") {
    var omgerekendeWindrichting = 8;
  } else if (windrichting == "ZZW") {
    var omgerekendeWindrichting = 7;
  } else if (windrichting == "ZW") {
    var omgerekendeWindrichting = 6;
  } else if (windrichting == "WZW") {
    var omgerekendeWindrichting = 5;
  } else if (windrichting == "West") {
    var omgerekendeWindrichting = 4;
  } else if (windrichting == "WNW") {
    var omgerekendeWindrichting = 3;
  } else if (windrichting == "NW") {
    var omgerekendeWindrichting = 2;
  } else if (windrichting == "NNW") {
    var omgerekendeWindrichting = 1;
  }

  if (plaats == "Vinkeveen") {
    var idealeWind = 16;
  } else if (plaats == "Scharendijke") {
    var idealeWind = 3;
  } else if (plaats == "Horst") {
    var idealeWind = 10;
  }

  var afstand = omgerekendeWindrichting - idealeWind;

  if (afstand > 8) {
    var graden = (idealeWind + 16 - omgerekendeWindrichting) * -22.5;
  } else {
    var graden = afstand * 22.5;
  }

  var afwijking = document.createElement("p");

  afwijking.textContent = graden;

  artikelEen.appendChild(afwijking);
}

// Weergegevens ophalen

function weerData(lat, ln) {
  var requestWeer = new XMLHttpRequest();
  requestWeer.onload = function () {
    var weerData = requestWeer.response;
    //setupWindData(weerData);
    //console.log(weerData);
  };
  requestWeer.open(
    "GET",
    `https://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=${lat},${ln}`
  );
  requestWeer.responseType = "json";
  requestWeer.send();
}

// ----- Scharendijke

function scharendijke() {
  var latwaarde = "51.766667";
  var lnwaarde = "3.86";
  weerData(latwaarde, lnwaarde);
}

// ----- Vinkveen

function vinkeveen() {
  var latwaarde = "52.2150916";
  var lnwaarde = "4.9348068";
  weerData(latwaarde, lnwaarde);
}

// ----- Horst

function horst() {
  var latwaarde = "52.3102778";
  var lnwaarde = "5.5591667";
  weerData(latwaarde, lnwaarde);
}

// Filmdata ophalen

function setupFilmData(filmData) {
  var min = 0;
  var max = 4;
  var i = Math.floor(Math.random() * (max - min + 1)) + min;

  var sectionFilm = document.createElement("section");
  var filmTitel = document.createElement("h3");
  var video = document.createElement("iframe");
  video.setAttribute("src", filmData[i].trailer);
  video.setAttribute("allowautoplay", false);

  // video.setAttribute("nocontrol");

  var plot = document.createElement("p");

  video.src = filmData[i].trailer;
  filmTitel.textContent = filmData[i].title;
  plot.textContent = filmData[i].simple_plot;

  artikelTwee.appendChild(sectionFilm);
  sectionFilm.appendChild(video);
  sectionFilm.appendChild(filmTitel);
  sectionFilm.appendChild(plot);
}

function filmData() {
  var requestFilms = new XMLHttpRequest();
  requestFilms.onload = function () {
    var filmData = requestFilms.response;
    setupFilmData(filmData);
  };
  requestFilms.open(
    "GET",
    "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json"
  );
  requestFilms.responseType = "json";
  requestFilms.send();
}

// Alle data ophalen

function paginaLaden() {
  scharendijke();
  vinkeveen();
  horst();
  filmData();
}

// Navigatie

function transitie() {
  surfNav.classList.toggle("geselecteerd");
  surfTitel.classList.toggle("vervagen");
  filmNav.classList.toggle("geselecteerd");
  filmTitel.classList.toggle("vervagen");
  artikelEen.classList.toggle("vervagen");
  artikelTwee.classList.toggle("vervagen");
  main.classList.toggle("verschuiven");
}

// Bij het laden van de pagina alle functies oproepen

window.addEventListener("load", paginaLaden);

surfNav.addEventListener("click", transitie);
filmNav.addEventListener("click", transitie);

document.addEventListener("keydown", function () {
  if (event.keyCode == 39) {
    transitie();
  } else if (event.keyCode == 37) {
    transitie();
  }
});
