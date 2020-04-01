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
  var wareWindVandaag;
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

// Weer ophalen

getWeerData(
  "https://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=51.766667,3.86"
);
