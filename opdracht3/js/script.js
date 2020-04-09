/*

// Weerdata

function setupWindData(data) {
  wind(data.liveweer[0].d0windr);
}

// Weerdata inladen

function getWeerData(requesturl) {
  var request = new XMLHttpRequest();
  request.onload = function() {
    let data = request.response;
    setupWindData(data);
  };
  request.open("GET", requesturl);
  request.responseType = "json";
  request.send();
}

// Windrichting bepalen

function wind(windRichting) {
  if (windRichting == "N") {
    var wareWindVandaag = 16;
  } else if (windRichting == "NNO") {
    var wareWindVandaag = 15;
  } else if (windRichting == "NO") {
    var wareWindVandaag = 14;
  } else if (windRichting == "ONO") {
    var wareWindVandaag = 13;
  } else if (windRichting == "O") {
    var wareWindVandaag = 12;
  } else if (windRichting == "OZO") {
    var wareWindVandaag = 11;
  } else if (windRichting == "ZO") {
    var wareWindVandaag = 10;
  } else if (windRichting == "ZZO") {
    var wareWindVandaag = 9;
  } else if (windRichting == "Z") {
    var wareWindVandaag = 8;
  } else if (windRichting == "ZZW") {
    var wareWindVandaag = 7;
  } else if (windRichting == "ZW") {
    var wareWindVandaag = 6;
  } else if (windRichting == "WZW") {
    var wareWindVandaag = 5;
  } else if (windRichting == "W") {
    var wareWindVandaag = 4;
  } else if (windRichting == "WNW") {
    var wareWindVandaag = 3;
  } else if (windRichting == "NW") {
    var wareWindVandaag = 2;
  } else if (windRichting == "NNW") {
    var wareWindVandaag = 1;
  }

  console.log(wareWindVandaag);
}

// Windrichting

// Weer ophalen

getWeerData(
  "https://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=51.766667,3.86"
);

*/

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
