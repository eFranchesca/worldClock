setInterval(function() {
  
let fortLauderdaleElement = document.querySelector("#fortLauderdale");
let fortLauderdaleDateElement = fortLauderdaleElement.querySelector(".date");
let fortLauderdaleTimeElement = fortLauderdaleElement.querySelector(".time");
let fortLauderdaleTime = moment().tz("America/New_York");

fortLauderdaleDateElement.innerHTML = moment().format("MMMM Do YYYY");
fortLauderdaleTimeElement.innerHTML = `${fortLauderdaleTime.format('h:mm:ss')}
<small>${fortLauderdaleTime.format("A")}</small>`;
}, 1000);

setInterval(function() {
let sanFranciscoElement = document.querySelector("#sanFrancisco");
let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
let sanFranciscoTime = moment().tz("America/Los_Angeles");

sanFranciscoDateElement.innerHTML = moment().format("MMMM Do YYYY");
sanFranciscoTimeElement.innerHTML = `${sanFranciscoTime.format('h:mm:ss')}
<small>${sanFranciscoTime.format("A")}</small>`;
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="time">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);