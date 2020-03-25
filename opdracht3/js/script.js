/*const lat = 52.3102778;
const lng = 5.5591667;
const params = "windSpeed";

fetch(
  `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
  {
    headers: {
      Authorization:
        "7622bbdc-6eb0-11ea-b679-0242ac130002-7622bd58-6eb0-11ea-b679-0242ac130002"
    }
  }
)
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);
  });
*/

// Deze (2) hieronder werken niet...helaas

/*
fetch("https://api.windy.com/api/point-forecast/v2", {
  lat: 52.31,
  lon: 5.559,
  model: "IconEU",
  parameters: ["wind", "windGust"],
  levels: ["surface", "800h", "300h"],
  key: "q6OYBVRfBt4Dyv0OobLIED1yq0iV5hdu"
})
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);
  });
*/


// het verzoek om de data te laden

let requestURL = "https://api.windy.com/api/point-forecast/v2";
let request = new XMLHttpRequest();

// het verzoek openen

request.open("GET", requestURL);

// type op json zetten

request.responseType = "json";

// verzoek verzenden

request.send({
  lat: 52.31,
  lon: 5.559,
  model: "IconEU",
  parameters: ["wind", "windGust"],
  levels: ["surface", "800h", "300h"],
  key: "q6OYBVRfBt4Dyv0OobLIED1yq0iV5hdu"
});

// wanneer het is geladen wordt het getoond

request.onload = function() {
  const windGegevens = request.response;
  console.log(windGegevens);
};

