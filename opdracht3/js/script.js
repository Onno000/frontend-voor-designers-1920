// Afwijking van wind tov ideale windrichting berekenen

function gradenBerekenen(wareWindVandaag) {
  var idealeWindVinkeveen = 16;
  var afstandVinkeveen = wareWindVandaag - idealeWindVinkeveen;

  if (afstandVinkeveen > 8) {
    var gradenVinkeveen = (idealeWindVinkeveen + 16 - wareWindVandaag) * -22.5;
  } else {
    var gradenVinkeveen = afstandVinkeveen * 22.5;
  }

  console.log(gradenVinkeveen);
}

// Windrichting omrekenen van N O Z W naar 1 t/m 16. Hiermee valt te rekenen

function wind(windrichting) {
  if (windrichting == "Noord") {
    var wareWindVandaag = 16;
  } else if (windrichting == "NNO") {
    var wareWindVandaag = 15;
  } else if (windrichting == "NO") {
    var wareWindVandaag = 14;
  } else if (windrichting == "ONO") {
    var wareWindVandaag = 13;
  } else if (windrichting == "Oost") {
    var wareWindVandaag = 12;
  } else if (windrichting == "OZO") {
    var wareWindVandaag = 11;
  } else if (windrichting == "ZO") {
    var wareWindVandaag = 10;
  } else if (windrichting == "ZZO") {
    var wareWindVandaag = 9;
  } else if (windrichting == "Zuid") {
    var wareWindVandaag = 8;
  } else if (windrichting == "ZZW") {
    var wareWindVandaag = 7;
  } else if (windrichting == "ZW") {
    var wareWindVandaag = 6;
  } else if (windrichting == "WZW") {
    var wareWindVandaag = 5;
  } else if (windrichting == "West") {
    var wareWindVandaag = 4;
  } else if (windrichting == "WNW") {
    var wareWindVandaag = 3;
  } else if (windrichting == "NW") {
    var wareWindVandaag = 2;
  } else if (windrichting == "NNW") {
    var wareWindVandaag = 1;
  }
  gradenBerekenen(wareWindVandaag);
}

// Weerdata

function setupWindData(data) {
  wind(data.liveweer[0].windr);

  elementenAanmaken(
    data.liveweer[0].plaats,
    data.liveweer[0].windk,
    data.liveweer[0].windr,
    data.liveweer[0].d0windknp,
    data.liveweer[0].d0windr,
    data.liveweer[0].d1windknp,
    data.liveweer[0].d1windr
  );
}

// Weerdata inladen

function getWeerData(requesturl) {
  var request = new XMLHttpRequest();
  request.onload = function () {
    let data = request.response;
    setupWindData(data);
    console.log(data);
  };
  request.open("GET", requesturl);
  request.responseType = "json";
  request.send();
}

// Weer ophalen

getWeerData(
  "https://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=51.766667,3.86"
);

// URL van Strand Horst

// "https://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=52.3102778,5.5591667";

// URL van Vinkveen

// "https://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=52.2150916,4.9348068";

const main = document.querySelector("main");

// Elementen aanmaken

function elementenAanmaken(
  plaats,
  windkrachtVandaag,
  windrichtingVandaag,
  windkrachtMorgen,
  windrichtingMorgen,
  windkrachtOvermorgen,
  windrichtingOvermorgen
) {
  const artikel = document.createElement("article");
  const titel = document.createElement("h1");

  const sectionEen = document.createElement("section");
  const vandaagDag = document.createElement("p");
  const vandaagWind = document.createElement("h2");
  const vandaagAfwijking = document.createElement("p");

  const sectionTwee = document.createElement("section");
  const morgenDag = document.createElement("p");
  const morgenWind = document.createElement("h2");
  const morgenAfwijking = document.createElement("p");

  const sectionDrie = document.createElement("section");
  const overmorgenDag = document.createElement("p");
  const overmorgenWind = document.createElement("h2");
  const overmorgenAfwijking = document.createElement("p");

  titel.textContent = plaats;

  vandaagDag.textContent = "Vandaag";
  vandaagWind.textContent = windkrachtVandaag;
  vandaagAfwijking.textContent = windrichtingVandaag;

  morgenDag.textContent = "Morgen";
  morgenWind.textContent = windkrachtMorgen;
  morgenAfwijking.textContent = windrichtingMorgen;

  overmorgenDag.textContent = "Overmorgen";
  overmorgenWind.textContent = windkrachtOvermorgen;
  overmorgenAfwijking.textContent = windrichtingOvermorgen;

  main.appendChild(artikel);
  artikel.appendChild(titel);

  artikel.appendChild(sectionEen);
  sectionEen.appendChild(vandaagDag);
  sectionEen.appendChild(vandaagWind);
  sectionEen.appendChild(vandaagAfwijking);

  artikel.appendChild(sectionTwee);
  sectionTwee.appendChild(morgenDag);
  sectionTwee.appendChild(morgenWind);
  sectionTwee.appendChild(morgenAfwijking);

  artikel.appendChild(sectionDrie);
  sectionDrie.appendChild(overmorgenDag);
  sectionDrie.appendChild(overmorgenWind);
  sectionDrie.appendChild(overmorgenAfwijking);
}

// Navigeren

var buttonEen = document.querySelector("button:nth-of-type(1)");
var buttonTwee = document.querySelector("button:nth-of-type(2)");
var buttonDrie = document.querySelector("button:nth-of-type(3)");

var articleEen = document.querySelector("article:nth-of-type(1)");
var articleTwee = document.querySelector("article:nth-of-type(2)");
var articleDrie = document.querySelector("article:nth-of-type(3)");

function deselecteren() {
  buttonEen.classList.remove("geselecteerd");
  buttonTwee.classList.remove("geselecteerd");
  buttonDrie.classList.remove("geselecteerd");
  articleEen.classList.remove("beneden");
  articleTwee.classList.remove("beneden");
  articleDrie.classList.remove("beneden");
  articleEen.classList.remove("boven");
  articleTwee.classList.remove("boven");
  articleDrie.classList.remove("boven");
}

function selecterenEen() {
  deselecteren();
  buttonEen.classList.toggle("geselecteerd");
  articleTwee.classList.add("beneden");
  articleDrie.classList.add("beneden");
}

function selecterenTwee() {
  deselecteren();
  buttonTwee.classList.toggle("geselecteerd");
  articleEen.classList.add("boven");
  articleDrie.classList.add("beneden");
}

function selecterenDrie() {
  deselecteren();
  buttonDrie.classList.toggle("geselecteerd");
  articleEen.classList.add("boven");
  articleTwee.classList.add("boven");
}

buttonEen.addEventListener("click", selecterenEen);
buttonTwee.addEventListener("click", selecterenTwee);
buttonDrie.addEventListener("click", selecterenDrie);
