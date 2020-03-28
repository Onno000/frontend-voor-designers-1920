// XMLHTTPRequest methode

var main = document.querySelector("main");

// Brouwersdam

let requestURLBrouwersdam =
  "http://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=51.766667,3.86";
let BrouwersdamData = new XMLHttpRequest();
BrouwersdamData.open("GET", requestURLBrouwersdam);
BrouwersdamData.responseType = "json";
BrouwersdamData.send();
BrouwersdamData.onload = function() {
  const weerBrouwersdam = BrouwersdamData.response;
  windB(weerBrouwersdam);
  console.log(weerBrouwersdam);
};

function windB(weerBrouwersdam) {
  if (weerBrouwersdam.liveweer[0].d0windr == "N") {
    var wareWindVandaag = 16;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "NNO") {
    var wareWindVandaag = 15;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "NO") {
    var wareWindVandaag = 14;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "ONO") {
    var wareWindVandaag = 13;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "O") {
    var wareWindVandaag = 12;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "OZO") {
    var wareWindVandaag = 11;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "ZO") {
    var wareWindVandaag = 10;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "ZZO") {
    var wareWindVandaag = 9;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "Z") {
    var wareWindVandaag = 8;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "ZZW") {
    var wareWindVandaag = 7;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "ZW") {
    var wareWindVandaag = 6;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "WZW") {
    var wareWindVandaag = 5;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "W") {
    var wareWindVandaag = 4;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "WNW") {
    var wareWindVandaag = 3;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "NW") {
    var wareWindVandaag = 2;
  } else if (weerBrouwersdam.liveweer[0].d0windr == "NNW") {
    var wareWindVandaag = 1;
  }

  var idealeWindBrouwersdam = 11;
  var afstandBrouwersdam = wareWindVandaag - idealeWindBrouwersdam;
  if (afstandBrouwersdam > 8) {
    var gradenBrouwersdam =
      (idealeWindBrouwersdam + 16 - wareWindVandaag) * -22.5;
  } else {
    var gradenBrouwersdam = afstandBrouwersdam * 22.5;
  }

  const sectionB = document.createElement("section");
  const h1B = document.createElement("h1");
  const windkrachtVandaagB = document.createElement("p");
  const windkrachtMorgenB = document.createElement("p");
  const windkrachtOvermorgenB = document.createElement("p");
  const windrichtingB = document.createElement("p");
  const windAfwijkingB = document.createElement("p");
  const neerslagB = document.createElement("p");
  const tempMaxB = document.createElement("p");

  h1B.textContent = weerBrouwersdam.liveweer[0].plaats;
  windkrachtVandaagB.textContent =
    "De windkracht vandaag: " + weerBrouwersdam.liveweer[0].d0windknp + " kt";
  windkrachtMorgenB.textContent =
    "De windkracht morgen: " + weerBrouwersdam.liveweer[0].d1windknp + " kt";
  windkrachtOvermorgenB.textContent =
    "De windkracht overmorgen: " +
    weerBrouwersdam.liveweer[0].d2windknp +
    " kt";
  windrichtingB.textContent =
    "De windrichting: " + weerBrouwersdam.liveweer[0].d0windr;
  windAfwijkingB.textContent =
    "Afwijking van ideale windrichting: " + gradenBrouwersdam + "º";
  neerslagB.textContent =
    "De kans op neerslag: " + weerBrouwersdam.liveweer[0].d0neerslag + "%";
  tempMaxB.textContent =
    "De temperatuur: min " +
    weerBrouwersdam.liveweer[0].d0tmin +
    "º max " +
    weerBrouwersdam.liveweer[0].d0tmax +
    "º";

  main.appendChild(sectionB);
  sectionB.appendChild(h1B);
  sectionB.appendChild(windkrachtVandaagB);
  sectionB.appendChild(windkrachtMorgenB);
  sectionB.appendChild(windkrachtOvermorgenB);
  sectionB.appendChild(windrichtingB);
  sectionB.appendChild(windAfwijkingB);
  sectionB.appendChild(neerslagB);
  sectionB.appendChild(tempMaxB);
}

// Strand Horst

let requestURLStrandHorst =
  "http://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=52.3102778,5.5591667";
let strandHorstData = new XMLHttpRequest();
strandHorstData.open("GET", requestURLStrandHorst);
strandHorstData.responseType = "json";
strandHorstData.send();
strandHorstData.onload = function() {
  const weerStrandHorst = strandHorstData.response;
  windS(weerStrandHorst);
  console.log(weerStrandHorst);
};

function windS(weerStrandHorst) {
  if (weerStrandHorst.liveweer[0].d0windr == "N") {
    var wareWindVandaag = 16;
  } else if (weerStrandHorst.liveweer[0].d0windr == "NNO") {
    var wareWindVandaag = 15;
  } else if (weerStrandHorst.liveweer[0].d0windr == "NO") {
    var wareWindVandaag = 14;
  } else if (weerStrandHorst.liveweer[0].d0windr == "ONO") {
    var wareWindVandaag = 13;
  } else if (weerStrandHorst.liveweer[0].d0windr == "O") {
    var wareWindVandaag = 12;
  } else if (weerStrandHorst.liveweer[0].d0windr == "OZO") {
    var wareWindVandaag = 11;
  } else if (weerStrandHorst.liveweer[0].d0windr == "ZO") {
    var wareWindVandaag = 10;
  } else if (weerStrandHorst.liveweer[0].d0windr == "ZZO") {
    var wareWindVandaag = 9;
  } else if (weerStrandHorst.liveweer[0].d0windr == "Z") {
    var wareWindVandaag = 8;
  } else if (weerStrandHorst.liveweer[0].d0windr == "ZZW") {
    var wareWindVandaag = 7;
  } else if (weerStrandHorst.liveweer[0].d0windr == "ZW") {
    var wareWindVandaag = 6;
  } else if (weerStrandHorst.liveweer[0].d0windr == "WZW") {
    var wareWindVandaag = 5;
  } else if (weerStrandHorst.liveweer[0].d0windr == "W") {
    var wareWindVandaag = 4;
  } else if (weerStrandHorst.liveweer[0].d0windr == "WNW") {
    var wareWindVandaag = 3;
  } else if (weerStrandHorst.liveweer[0].d0windr == "NW") {
    var wareWindVandaag = 2;
  } else if (weerStrandHorst.liveweer[0].d0windr == "NNW") {
    var wareWindVandaag = 1;
  }

  var idealeWindStrandHorst = 2;
  var afstandStrandHorst = wareWindVandaag - idealeWindStrandHorst;
  if (afstandStrandHorst > 8) {
    var gradenStrandHorst =
      (idealeWindStrandHorst + 16 - wareWindVandaag) * -22.5;
  } else {
    var gradenStrandHorst = afstandStrandHorst * 22.5;
  }

  const sectionS = document.createElement("section");
  const h1S = document.createElement("h1");
  const windkrachtVandaagS = document.createElement("p");
  const windkrachtMorgenS = document.createElement("p");
  const windkrachtOvermorgenS = document.createElement("p");
  const windrichtingS = document.createElement("p");
  const windAfwijkingS = document.createElement("p");
  const neerslagS = document.createElement("p");
  const tempMaxS = document.createElement("p");

  h1S.textContent = weerStrandHorst.liveweer[0].plaats;
  windkrachtVandaagS.textContent =
    "De windkracht vandaag: " + weerStrandHorst.liveweer[0].d0windknp + " kt";
  windkrachtMorgenS.textContent =
    "De windkracht morgen: " + weerStrandHorst.liveweer[0].d1windknp + " kt";
  windkrachtOvermorgenS.textContent =
    "De windkracht overmorgen: " +
    weerStrandHorst.liveweer[0].d2windknp +
    " kt";
  windrichtingS.textContent =
    "De windrichting: " + weerStrandHorst.liveweer[0].d0windr;
  windAfwijkingS.textContent =
    "Afwijking van ideale windrichting: " + gradenStrandHorst + "º";
  neerslagS.textContent =
    "De kans op neerslag: " + weerStrandHorst.liveweer[0].d0neerslag + "%";
  tempMaxS.textContent =
    "De temperatuur: min " +
    weerStrandHorst.liveweer[0].d0tmin +
    "º max " +
    weerStrandHorst.liveweer[0].d0tmax +
    "º";

  main.appendChild(sectionS);
  sectionS.appendChild(h1S);
  sectionS.appendChild(windkrachtVandaagS);
  sectionS.appendChild(windkrachtMorgenS);
  sectionS.appendChild(windkrachtOvermorgenS);
  sectionS.appendChild(windrichtingS);
  sectionS.appendChild(windAfwijkingS);
  sectionS.appendChild(neerslagS);
  sectionS.appendChild(tempMaxS);
}

// Vinkeveen

let requestURLVinkeveen =
  "http://weerlive.nl/api/json-data-10min.php?key=b469d45a6f&locatie=52.2150916,4.9348068";
let vinkeveenData = new XMLHttpRequest();
vinkeveenData.open("GET", requestURLVinkeveen);
vinkeveenData.responseType = "json";
vinkeveenData.send();
vinkeveenData.onload = function() {
  const weerVinkeveen = vinkeveenData.response;
  windV(weerVinkeveen);
  console.log(weerVinkeveen);
};

function windV(weerVinkeveen) {
  if (weerVinkeveen.liveweer[0].d0windr == "N") {
    var wareWindVandaag = 16;
  } else if (weerVinkeveen.liveweer[0].d0windr == "NNO") {
    var wareWindVandaag = 15;
  } else if (weerVinkeveen.liveweer[0].d0windr == "NO") {
    var wareWindVandaag = 14;
  } else if (weerVinkeveen.liveweer[0].d0windr == "ONO") {
    var wareWindVandaag = 13;
  } else if (weerVinkeveen.liveweer[0].d0windr == "O") {
    var wareWindVandaag = 12;
  } else if (weerVinkeveen.liveweer[0].d0windr == "OZO") {
    var wareWindVandaag = 11;
  } else if (weerVinkeveen.liveweer[0].d0windr == "ZO") {
    var wareWindVandaag = 10;
  } else if (weerVinkeveen.liveweer[0].d0windr == "ZZO") {
    var wareWindVandaag = 9;
  } else if (weerVinkeveen.liveweer[0].d0windr == "Z") {
    var wareWindVandaag = 8;
  } else if (weerVinkeveen.liveweer[0].d0windr == "ZZW") {
    var wareWindVandaag = 7;
  } else if (weerVinkeveen.liveweer[0].d0windr == "ZW") {
    var wareWindVandaag = 6;
  } else if (weerVinkeveen.liveweer[0].d0windr == "WZW") {
    var wareWindVandaag = 5;
  } else if (weerVinkeveen.liveweer[0].d0windr == "W") {
    var wareWindVandaag = 4;
  } else if (weerVinkeveen.liveweer[0].d0windr == "WNW") {
    var wareWindVandaag = 3;
  } else if (weerVinkeveen.liveweer[0].d0windr == "NW") {
    var wareWindVandaag = 2;
  } else if (weerVinkeveen.liveweer[0].d0windr == "NNW") {
    var wareWindVandaag = 1;
  }

  var idealeWindVinkeveen = 16;
  var afstandVinkeveen = wareWindVandaag - idealeWindVinkeveen;
  if (afstandVinkeveen > 8) {
    var gradenVinkeveen = (idealeWindVinkeveen + 16 - wareWindVandaag) * -22.5;
  } else {
    var gradenVinkeveen = afstandVinkeveen * 22.5;
  }

  const sectionV = document.createElement("section");
  const h1V = document.createElement("h1");
  const windkrachtVandaagV = document.createElement("p");
  const windkrachtMorgenV = document.createElement("p");
  const windkrachtOvermorgenV = document.createElement("p");
  const windrichtingV = document.createElement("p");
  const windAfwijkingV = document.createElement("p");
  const neerslagV = document.createElement("p");
  const tempMaxV = document.createElement("p");

  h1V.textContent = weerVinkeveen.liveweer[0].plaats;
  windkrachtVandaagV.textContent =
    "De windkracht vandaag: " + weerVinkeveen.liveweer[0].d0windknp + " kt";
  windkrachtMorgenV.textContent =
    "De windkracht morgen: " + weerVinkeveen.liveweer[0].d1windknp + " kt";
  windkrachtOvermorgenV.textContent =
    "De windkracht overmorgen: " + weerVinkeveen.liveweer[0].d2windknp + " kt";
  windrichtingV.textContent =
    "De windrichting: " + weerVinkeveen.liveweer[0].d0windr;
  windAfwijkingV.textContent =
    "Afwijking van ideale windrichting: " + gradenVinkeveen + "º";
  neerslagV.textContent =
    "De kans op neerslag: " + weerVinkeveen.liveweer[0].d0neerslag + "%";
  tempMaxV.textContent =
    "De temperatuur: min " +
    weerVinkeveen.liveweer[0].d0tmin +
    "º max " +
    weerVinkeveen.liveweer[0].d0tmax +
    "º";

  main.appendChild(sectionV);
  sectionV.appendChild(h1V);
  sectionV.appendChild(windkrachtVandaagV);
  sectionV.appendChild(windkrachtMorgenV);
  sectionV.appendChild(windkrachtOvermorgenV);
  sectionV.appendChild(windrichtingV);
  sectionV.appendChild(windAfwijkingV);
  sectionV.appendChild(neerslagV);
  sectionV.appendChild(tempMaxV);
}
