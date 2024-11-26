//6d0e711d72d74daeb2b0bfd2a5cdfdba geocoding api
//0b5eac87736d4cab95709976b8c2e278 weatherbit api
// API KEY https://www.weatherbit.io/account/dashboard
//https://www.weatherbit.io/api/weather-current
//https://api.weatherbit.io/v2.0/current?city=Craiova&country=RO&key=0b5eac87736d4cab95709976b8c2e278 API CRAIOVA
//  /forecast/daily --> daily forecast
// /current --> current forecast
// accuweather.com
const weatherApiKey = "0b5eac87736d4cab95709976b8c2e278";

const weatherUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${weatherApiKey}`;

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.reset();
});

// Fetch weather data for Craiova when the page loads
// window.onload = function () {
//   fetchWeatherData(); // Fetch default weather for Craiova
// };
