//6d0e711d72d74daeb2b0bfd2a5cdfdba geocoding api
//0b5eac87736d4cab95709976b8c2e278 weatherbit api
// API KEY https://www.weatherbit.io/account/dashboard
//https://www.weatherbit.io/api/weather-current
//https://api.weatherbit.io/v2.0/current?city=Craiova&country=RO&key=0b5eac87736d4cab95709976b8c2e278 API CRAIOVA
//  /forecast/daily --> daily forecast
// /current --> current forecast
// /forecast/hourly --> hourly forecast
// accuweather.com
const inputSearch = document.querySelector("input");
const form = document.querySelector("form");
const weatherContainer = document.querySelector(".weather");
const animatedWeatherIcons = {
  c01d: "images/all/clear-day.svg",
  c01n: "images/all/clear-night.svg",
  c02d: "images/all/partly-cloudy-day.svg",
  c02n: "images/all/partly-cloudy-night.svg",
  c03d: "images/all/overcast-day.svg",
  c03n: "images/all/overcast-night.svg",
  c04d: "images/all/overcast.svg",
  c04n: "images/all/overcast.svg",
  r01d: "images/all/partly-cloudy-day-drizzle.svg",
  r01n: "images/all/partly-cloudy-day-drizzle.svg",
  f01d: "images/all/hail.svg",
  f01n: "images/all/hail.svg",
  r02d: "images/all/rain.svg",
  r02n: "images/all/rain.svg",
  r03d: "images/all/rain.svg",
  r03n: "images/all/rain.svg",
  r04d: "images/all/partly-cloudy-day-drizzle.svg",
  r04n: "images/all/partly-cloudy-night-drizzle.svg",
  r05d: "images/all/rain.svg",
  r05n: "images/all/rain.svg",
  r06d: "images/all/rain.svg",
  r06n: "images/all/rain.svg",
  s01d: "images/all/partly-cloudy-day-snow.svg",
  s01n: "images/all/partly-cloudy-night-snow.svg",
  s02d: "images/all/snow.svg",
  s02n: "images/all/snow.svg",
  s03d: "images/all/snow.svg",
  s03n: "images/all/snow.svg",
  s04d: "images/all/partly-cloudy-day-sleet.svg",
  s04n: "images/all/partly-cloudy-night-sleet.svg",
  s05d: "images/all/sleet.svg",
  s05n: "images/all/sleet.svg",
  s06d: "images/all/partly-cloudy-day-snow.svg",
  s06n: "images/all/partly-cloudy-night-snow.svg",
  t01d: "images/all/thunderstorms-day.svg",
  t01n: "images/all/thunderstorms-night.svg",
  s01d: "images/all/snow.svg",
  s01n: "images/all/snow.svg",
  t01d: "images/all/thunderstorms-day-rain.svg",
  t01n: "images/all/thunderstorms-night-rain.svg",
  t02d: "images/all/thunderstorms-day-rain.svg",
  t02n: "images/all/thunderstorms-night-rain.svg",
  t03d: "images/all/thunderstorms-day-rain.svg",
  t03n: "images/all/thunderstorms-night-rain.svg",
  t04d: "images/all/thunderstorms-day.svg",
  t04n: "images/all/thunderstorms-night.svg",
  t05d: "images/all/thunderstorms-day.svg",
  t05n: "images/all/thunderstorms-night.svg",
  a01d: "images/all/mist.svg",
  a01n: "images/all/mist.svg",
  a02d: "images/all/partly-cloudy-day-smoke.svg",
  a02n: "images/all/partly-cloudy-night-smoke.svg",
  a03d: "images/all/partly-cloudy-day-haze.svg",
  a03n: "images/all/partly-cloudy-night-haze.svg",
  a04d: "images/all/dust.svg",
  a04n: "images/all/dust.svg",
  a05d: "images/all/fog.svg",
  a05n: "images/all/fog.svg",
  a06d: "images/all/drizzle.svg",
  a06n: "images/all/drizzle.svg",
  d01d: "images/all/drizzle.svg",
  d01n: "images/all/drizzle.svg",
  d02d: "images/all/drizzle.svg",
  d02n: "images/all/drizzle.svg",
  d03d: "images/all/drizzle.svg",
  d03n: "images/all/drizzle.svg",
  u00d: "images/all/not-available.svg",
  u00n: "images/all/not-available.svg",
};

const featuredCities = [
  { city: "New York", country: "US" },
  { city: "Tokyo", country: "JP" },
  { city: "London", country: "GB" },
  { city: "Paris", country: "FR" },
  { city: "Sydney", country: "AU" },
  { city: "Cape Town", country: "ZA" },
  { city: "Moscow", country: "RU" },
  { city: "Beijing", country: "CN" },
  { city: "Dubai", country: "AE" },
  { city: "Rio de Janeiro", country: "BR" },
  { city: "Mumbai", country: "IN" },
  { city: "Mexico City", country: "MX" },
  { city: "Bangkok", country: "TH" },
  { city: "Berlin", country: "DE" },
  { city: "Singapore", country: "SG" },
  { city: "Los Angeles", country: "US" },
  { city: "Buenos Aires", country: "AR" },
  { city: "Seoul", country: "KR" },
  { city: "Toronto", country: "CA" },
  { city: "Rome", country: "IT" },
  { city: "Istanbul", country: "TR" },
  { city: "Athens", country: "GR" },
  { city: "Nairobi", country: "KE" },
  { city: "Cairo", country: "EG" },
  { city: "Hong Kong", country: "HK" },
  { city: "San Francisco", country: "US" },
  { city: "Vancouver", country: "CA" },
  { city: "Jakarta", country: "ID" },
  { city: "Lagos", country: "NG" },
  { city: "Chicago", country: "US" },
  { city: "Santiago", country: "CL" },
  { city: "Lisbon", country: "PT" },
  { city: "Kuala Lumpur", country: "MY" },
  { city: "Stockholm", country: "SE" },
  { city: "Oslo", country: "NO" },
  { city: "Warsaw", country: "PL" },
  { city: "Vienna", country: "AT" },
  { city: "Helsinki", country: "FI" },
  { city: "Copenhagen", country: "DK" },
  { city: "Madrid", country: "ES" },
  { city: "Zürich", country: "CH" },
  { city: "Manila", country: "PH" },
  { city: "Bogotá", country: "CO" },
  { city: "Lima", country: "PE" },
  { city: "Tehran", country: "IR" },
  { city: "Baghdad", country: "IQ" },
  { city: "Karachi", country: "PK" },
  { city: "Addis Ababa", country: "ET" },
  { city: "Havana", country: "CU" },
  { city: "Amman", country: "JO" },
];

const roCities = [
  { name: "Bucharest" },
  { name: "Cluj-Napoca" },
  { name: "Timisoara" },
  { name: "Craiova" },
  { name: "Iasi" },
  { name: "Constanta" },
  { name: "Brasov" },
  { name: "Galati" },
  { name: "Ploiesti" },
  { name: "Oradea" },
  { name: "Braila" },
  { name: "Arad" },
  { name: "Pitesti" },
  { name: "Sibiu" },
  { name: "Bacau" },
  { name: "Targu Mures" },
  { name: "Buzau" },
  { name: "Botosani" },
  { name: "Satu Mare" },
  { name: "Suceava" },
];

const map = L.map("map", { attributionControl: false }).setView(
  [45.9432, 24.9668],
  6
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 13,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const apiKey = "fdb1a3699af130f0be901db0e1c63ef8";
const layers = {
  precipitation: L.tileLayer(
    `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`,
    { maxZoom: 13, opacity: 1, attribution: "Weather data by OpenWeatherMap" }
  ),
  clouds: L.tileLayer(
    `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apiKey}`,
    { maxZoom: 13, opacity: 1, attribution: "Weather data by OpenWeatherMap" }
  ),
  temperature: L.tileLayer(
    `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`,
    { maxZoom: 13, opacity: 1, attribution: "Weather data by OpenWeatherMap" }
  ),
  pressure: L.tileLayer(
    `https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${apiKey}`,
    { maxZoom: 13, opacity: 1, attribution: "Weather data by OpenWeatherMap" }
  ),
  wind: L.tileLayer(
    `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${apiKey}`,
    { maxZoom: 13, opacity: 1, attribution: "Weather data by OpenWeatherMap" }
  ),
};

const layerSelect = document.getElementById("layerSelect");
let activeLayer = null;

layerSelect.addEventListener("change", (event) => {
  const selectedLayer = event.target.value;

  if (activeLayer) {
    map.removeLayer(activeLayer);
  }

  if (selectedLayer !== "none" && layers[selectedLayer]) {
    activeLayer = layers[selectedLayer];
    activeLayer.addTo(map);
  }
  if (selectedLayer === "temperature") {
    temperatureLegend.addTo(map);
  } else {
    map.removeControl(temperatureLegend);
  }
});

function formatTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function getRandomCities(numberOfCities) {
  const shuffledCities = [...featuredCities];
  for (let i = shuffledCities.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCities[i], shuffledCities[j]] = [
      shuffledCities[j],
      shuffledCities[i],
    ];
  }
  return shuffledCities.slice(0, numberOfCities);
}
class WeatherCities {
  constructor(weatherData) {
    this.weatherData = weatherData;
  }
  renderCities() {
    const citiesContainer = document.querySelector("#cities-cont");
    const cityCard = document.createElement("div");
    cityCard.className = "rocity-card";
    cityCard.innerHTML = `
    <span class="rocity-name">${this.weatherData.city}</span>
    <span ><img class="rocity-icon" src="${this.weatherData.getWeatherIcon()}"></span>
    <span class="rocity-temp">${Math.floor(
      this.weatherData.temperature
    )}°C</span>`;
    return cityCard;
  }
}

const mapExpand = document.querySelector(".map-container");
const expandBtn = document.querySelector("#expand-btn");
const body = document.querySelector("body");

expandBtn.addEventListener("click", function () {
  if (mapExpand.classList.contains("full-map")) {
    mapExpand.classList.remove("full-map");
    expandBtn.classList.remove("full-map-btn");
    expandBtn.classList.add("expand-btn");
    body.classList.remove("hide-scroll");
    map.invalidateSize();
  } else {
    mapExpand.classList.add("full-map");
    expandBtn.classList.remove("expand-btn");
    expandBtn.classList.add("full-map-btn");
    body.classList.add("hide-scroll");
    map.invalidateSize();
  }
});

function resetMapView() {
  mapExpand.classList.remove("full-map");
  expandBtn.classList.remove("full-map-btn");
  expandBtn.classList.add("expand-btn");
  body.classList.remove("hide-scroll");
  map.invalidateSize();
  scrollTo(0, 0);
}

const temperatureLegend = L.control({ position: "bottomright" });

temperatureLegend.onAdd = function () {
  const div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<span class="legend-item">-30°C</span>';
  div.innerHTML += '<div class="gradient-bar"></div>';
  div.innerHTML += `<span class="legend-item">50°C</span>`;
  return div;
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    mapExpand.classList.remove("full-map");
    expandBtn.classList.remove("full-map-btn");
    expandBtn.classList.add("expand-btn");
    body.classList.remove("hide-scroll");
    map.invalidateSize();
  }
});
const hourlyCont = document.querySelector(".hourlyCont");
const btnList = document.querySelector(".btnList");
const contCities = document.querySelector(".cont-city");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchValue = inputSearch.value;
  localStorage.setItem("lastSearch", searchValue);
  btnList.classList.remove("removeBtnList");
  mapExpand.style.display = `flex`;
  resetMapView();
  const apiKey = "05857751833645b2bbeb8c3f5d79234f";
  const baseUrl = "https://api.weatherbit.io/v2.0/current";
  const forecastUrl = "https://api.weatherbit.io/v2.0/forecast/daily";
  const hourlyUrl = "https://api.weatherbit.io/v2.0/forecast/hourly";
  const inputVal = inputSearch.value;
  if (inputVal) {
    try {
      const res = await axios.get(`${baseUrl}?city=${inputVal}&key=${apiKey}`);
      const forecastRes = await axios.get(
        `${forecastUrl}?city=${inputVal}&key=${apiKey}`
      );
      const forecastHourly = await axios.get(
        `${hourlyUrl}?city=${inputVal}&key=${apiKey}`
      );
      const weatherData = new WeatherDataDaily(res.data);
      const weatherCard = new WeatherCardDaily(weatherData);
      const weatherForecast = new WeatherForecastDaily(forecastRes.data);
      weatherContainer1.innerHTML = "";
      weatherContainer1.append(weatherCard.renderCurrent());
      weatherContainer1.append(forecastCont);
      forecastCont.innerHTML = "<h5>Forecast for 16 days</h5>";
      forecastCont.append(weatherForecast.renderForecast());
      weatherContainer2.innerHTML = "<h5>Forecast for 48 hours</h5> ";
      const hourlyForecast = new WeatherForecastHourly(forecastHourly.data);
      weatherContainer2.append(hourlyCont);
      hourlyCont.append(hourlyForecast.renderForecastHourly());
      initializeScrollButtons();
      initializeScrollButtonsHourly();
      const { lat, lon } = res.data.data[0];
      const popupContent = `
        <b>${weatherData.city}</b><br>
        Temperature: <b>${weatherData.temperature}°C</b><br>
        Condition: <b>${weatherData.condition}</b>
      `;
      L.popup().setLatLng([lat, lon]).setContent(popupContent).openOn(map);
      map.setView([lat, lon], 10);
      setActiveButton(document.querySelector(".currentForecast"));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  form.reset();
});

const selectUnits = document.querySelector("#unitSelect");
selectUnits.addEventListener("change", function (e) {
  const units = e.target.value;
  const temperatures = document.querySelectorAll(".temperature");
  const realFeels = document.querySelectorAll(".real-feel");
  const celsius = document.querySelectorAll(".celsius");
  const tempCircles = document.querySelectorAll(".temp-circle");
  const weatherCardsCities = document.querySelectorAll(".rocity-card");
  const unitSymbol = units === "I" ? "F" : "C";
  const windSpeeds = document.querySelectorAll(".wind-speed");
  windSpeeds.forEach((wind) => {
    const currentWindSpeed = parseFloat(wind.textContent);
    wind.textContent =
      units === "I"
        ? (currentWindSpeed * 0.621371).toFixed(1)
        : (currentWindSpeed / 0.621371).toFixed(1);
    wind.textContent += units === "I" ? " mph" : " km/h";
  });
  celsius.forEach((cel) => {
    cel.textContent = unitSymbol;
  });
  const forecastTemps = document.querySelectorAll(".forecast-temp");
  forecastTemps.forEach((temp) => {
    const currentTemp = parseFloat(temp.textContent);
    temp.textContent =
      units === "I"
        ? Math.floor((currentTemp * 9) / 5 + 32)
        : Math.floor(((currentTemp - 32) * 5) / 9);
    temp.textContent += `°`;
  });
  const minTemps = document.querySelectorAll(".minTemp");
  minTemps.forEach((minTemp) => {
    const currentMinTemp = parseFloat(
      minTemp.textContent.replace(/[^\d.-]/g, "")
    );
    minTemp.textContent =
      units === "I"
        ? Math.floor((currentMinTemp * 9) / 5 + 32)
        : Math.floor(((currentMinTemp - 32) * 5) / 9);
    minTemp.textContent += `°${unitSymbol}`;
  });
  weatherCardsCities.forEach((card) => {
    const tempElement = card.querySelector(".rocity-temp");
    const currentTemp = parseFloat(tempElement.textContent);
    tempElement.textContent =
      units === "I"
        ? Math.floor((currentTemp * 9) / 5 + 32)
        : Math.floor(((currentTemp - 32) * 5) / 9);
    tempElement.textContent += `°${unitSymbol}`;
  });

  temperatures.forEach((temp) => {
    const currentTemp = parseFloat(temp.textContent);
    const newTempCircle = document.createElement("span");
    newTempCircle.className = "temp-circle";
    newTempCircle.textContent = "°";
    temp.textContent = `${
      units === "I"
        ? Math.floor((currentTemp * 9) / 5 + 32)
        : Math.floor(((currentTemp - 32) * 5) / 9)
    }`;
    temp.appendChild(newTempCircle);
  });

  realFeels.forEach((feel) => {
    const currentFeel = parseFloat(feel.textContent.replace("Real feel:", ""));
    feel.textContent = `Real feel: ${
      units === "I"
        ? Math.floor((currentFeel * 9) / 5 + 32)
        : Math.floor(((currentFeel - 32) * 5) / 9)
    }°`;
  });
});

async function runRoCities() {
  for (let cities of roCities) {
    const city = cities.name;
    const weatherContainerCities = document.querySelector("#cities-cont");
    if (!weatherContainerCities) {
      console.error("Element with ID 'cities-cont' not found in the DOM.");
      return;
    }
    try {
      const res = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${city}&country=RO&key=05857751833645b2bbeb8c3f5d79234f	&units=M`
      );
      const weatherDataCities = new WeatherDataDaily(res.data);
      const weatherCardCities = new WeatherCities(weatherDataCities);
      weatherContainerCities.append(weatherCardCities.renderCities());
    } catch (error) {
      console.error(`Error fetching weather data for ${city}:`, error);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  runRoCities();
});

class WeatherDataDaily {
  constructor(apiResponse) {
    const dataRes = apiResponse.data && apiResponse.data[0];
    this.city = dataRes.city_name;
    this.temperature = Math.floor(dataRes.temp);
    this.condition = dataRes.weather.description;
    this.icon = dataRes.weather.icon;
    this.country = dataRes.country_code;
    this.timezone = dataRes.timezone;
    this.humidity = dataRes.rh;
    this.windSpeed = dataRes.wind_spd;
    this.realTemp = Math.floor(dataRes.app_temp);
    this.pressure = dataRes.pres;
    this.uvindex = dataRes.uv;
    this.airQuality = dataRes.aqi;
  }
  getWeatherIcon() {
    return animatedWeatherIcons[this.icon] || "images/all/default-icon.svg";
  }
}

class WeatherCardDaily {
  constructor(weatherData) {
    this.weatherData = weatherData;
  }
  renderCurrent() {
    const countryCode = this.weatherData.country;
    const airQuality = this.weatherData.airQuality;
    let airQualityDescription = "";
    let airQualityColor = "";
    if (airQuality < 25) {
      airQualityDescription = "Excelent";
      airQualityColor = "#0051ff";
    } else if (airQuality >= 25 && airQuality <= 50) {
      airQualityDescription = "Good";
      airQualityColor = "green";
    } else if (airQuality > 50 && airQuality <= 100) {
      airQualityDescription = "Moderate";
      airQualityColor = "#e7e70e";
    } else if (airQuality > 100 && airQuality <= 150) {
      airQualityDescription = "Poor";
      airQualityColor = "orange";
    } else if (airQuality > 150 && airQuality <= 200) {
      airQualityDescription = "Unhealthy";
      airQualityColor = "red";
    } else if (airQuality > 200 && airQuality <= 300) {
      airQualityDescription = "Severe";
      airQualityColor = "purple";
    } else if (airQuality > 300) {
      airQualityDescription = "Hazardous";
      airQualityColor = "maroon";
    }
    const currentTime = formatTime();
    const card = document.createElement("div");

    card.className = `weather-card`;

    card.innerHTML = `
       <div class="weather-header">
        <p id="city-name">${this.weatherData.city}, ${countryCode}</p >
        <span id="local-time">${currentTime}</span>
      </div>
      <div class="weather-value">
        <div id="weather-info">
          <div class="weather-temps">
          <div class="weather-icon-container">
            <img class="weather-icon" src="${this.weatherData.getWeatherIcon()}" alt="${
      this.weatherData.condition
    }"></div>
          <div class="weather-temp">
            <span class="temperature">${
              this.weatherData.temperature
            }<span class="temp-circle">°</span></span>
            <span class="celsius">C</span>
            <p class="real-feel">Real feel:${
              this.weatherData.realTemp
            }<span>°</span></p>
            </div>
          </div>
            <p id="condition">${this.weatherData.condition}</p>
        </div>
        <div class="additional-info">
           <p class="spaced-content"><span class="weather-description">Humidity</span> <span class="table-value">${
             this.weatherData.humidity
           }%</span></p>
           <p class="spaced-content"><span class="weather-description">Wind</span> <span class="table-value wind-speed">${
             this.weatherData.windSpeed
           } km/h</span></p>
           <p class="spaced-content"><span class="weather-description">Pressure</span><span class="table-value">${
             this.weatherData.pressure
           } hPa</span></p>
           <p class="spaced-content"><span class="weather-description">UV Index</span><span class="table-value">${
             this.weatherData.uvindex
           } of 11</span></p>
           <p class="spaced-content"><span class="weather-description">Air quality</span><span class="table-value" style="color: ${airQualityColor}; font-weight: 900;">${airQualityDescription} </span></p>
        </div>
      <div>
    `;

    return card;
  }
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    try {
      const res = await axios.get(
        `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=05857751833645b2bbeb8c3f5d79234f`
      );
      const weatherData = new WeatherDataDaily(res.data);
      const popupContent = `
        <b>${weatherData.city}</b><br>
        <img src="${weatherData.getWeatherIcon()}" alt="${
        weatherData.condition
      }" class="popupImage"><br>
        Temperature: <b>${weatherData.temperature}°C</b><br>
        Condition: <b>${weatherData.condition}</b>
      `;
      const popup = L.popup()
        .setLatLng([lat, lon])
        .setContent(popupContent)
        .openOn(map);
      map.setView([lat, lon], 10);
    } catch (error) {
      console.error("Error fetching weather data for guest location:", error);
    }
  });
} else {
  console.error("Geolocation is not supported by this browser.");
}

document.addEventListener("DOMContentLoaded", async function () {
  btnList.classList.add("removeBtnList");
  const selectedCities = getRandomCities(4);
  const weatherContainer1 = document.getElementById("weatherContainer1");
  const weatherContainer2 = document.getElementById("weatherContainer2");
  const forecastCont = document.querySelector(".forecastCont");
  if (!weatherContainer1 || !weatherContainer2) {
    console.error("Weather containers not found in the DOM.");
    return;
  }
  weatherContainer1.innerHTML = "";
  weatherContainer2.innerHTML = "";
  const midpoint = Math.ceil(selectedCities.length / 2);
  for (let i = 0; i < selectedCities.length; i++) {
    const city = selectedCities[i];
    try {
      const res = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${city.city}&country=${city.country}&key=05857751833645b2bbeb8c3f5d79234f`
      );
      const weatherDataOnload = new WeatherDataDaily(res.data);
      const weatherCardOnload = new WeatherCardDaily(weatherDataOnload);
      if (i < midpoint) {
        weatherContainer1.append(weatherCardOnload.renderCurrent());
      } else {
        weatherContainer2.append(weatherCardOnload.renderCurrent());
      }
    } catch (error) {
      console.error(`Error fetching weather data for ${city.city}:`, error);
      if (i < midpoint) {
        weatherContainer1.innerHTML += `<p>Error fetching weather data for ${city.city}.</p>`;
      } else {
        weatherContainer2.innerHTML += `<p>Error fetching weather data for ${city.city}.</p>`;
      }
    }
  }
});

class WeatherForecastDaily {
  constructor(apiResponse) {
    this.city = apiResponse.city_name;
    this.country = apiResponse.country_code;
    this.forecast = apiResponse.data.map((day) => ({
      date: day.datetime,
      temperature: Math.floor(day.temp),
      condition: day.weather.description,
      icon: day.weather.icon,
      realTemp: Math.floor(day.app_temp),
      humidity: day.rh,
      windSpeed: day.wind_spd,
      pressure: day.pres,
      uvindex: day.uv,
      maxTemp: Math.floor(day.max_temp),
      minTemp: Math.floor(day.min_temp),
    }));
  }

  getWeatherIcon(icon) {
    return animatedWeatherIcons[icon] || "images/all/default-icon.svg";
  }

  renderForecast() {
    const wrapper = document.createElement("div");
    wrapper.className = "forecast-wrapper";

    const leftButton = document.createElement("button");
    leftButton.className = "scroll-button left";
    leftButton.innerHTML = `<i class="bi bi-caret-left-fill"></i>`;

    const rightButton = document.createElement("button");
    rightButton.className = "scroll-button right";
    rightButton.innerHTML = `<i class="bi bi-caret-right-fill"></i>`;

    const forecastContainer = document.createElement("div");
    forecastContainer.className = "forecast-container";

    this.forecast.forEach((day) => {
      const dayCard = document.createElement("div");
      dayCard.className = "forecast-card";
      dayCard.innerHTML = `
        <span class="forecast-date">${day.date}</span>
        <span class="forecast-img"><img class="forecast-icon" src="${this.getWeatherIcon(
          day.icon
        )}"></span>
        <span class="forecast-temp">Max: ${
          day.maxTemp
        }°<span class="temp-unit">C</span></span>
        <span class="forecast-temp"><span class="forecast-value">Min:</span> ${
          day.minTemp
        }°<span class="temp-unit">C</span></span>
        <span class="forecast-condition">${day.condition}</span>
      `;
      forecastContainer.appendChild(dayCard);
    });

    wrapper.appendChild(leftButton);
    wrapper.appendChild(forecastContainer);
    wrapper.appendChild(rightButton);

    return wrapper;
  }

  renderForecastCards() {
    const forecastDaily = document.createElement("div");
    forecastDaily.classList = "forecastDaily";
    const bigCont = document.querySelector(".big-cont");

    this.forecast.forEach((day) => {
      const dailyCont = document.createElement("div");
      dailyCont.classList.add("daily-cont");
      dailyCont.innerHTML = `
            <div class="weather-header">
                <p id="city-name">${this.city}</p>
                <span id="local-date">${day.date}</span>
            </div>
            <div class="weather-value">
                <div id="weather-info">
                    <div class="weather-temps">
                        <div class="weather-icon-container">
                            <img class="weather-icon" src="${this.getWeatherIcon(
                              day.icon
                            )}" />
                        </div>
                        <div class="weather-temp-all">
                        <div class="weather-temp">
                                    <span class="temperature">${
                                      day.maxTemp
                                    }<span class="temp-circle">°</span></span>
                                 <span class="minTemp">/${day.minTemp}°C</span>
                                 
                                </div>
                            
                        </div>
                        
                    </div>
                    <p id="condition">${day.condition}</p>
                </div>
                <div class="additional-info-table">
                    <p class="spaced-content">
                        <span class="weather-description">Humidity</span>
                        <span class="table-value">${day.humidity}%</span>
                    </p>
                    <p class="spaced-content">
                        <span class="weather-description">Wind</span>
                        <span class="table-value wind-speed">${
                          day.windSpeed
                        } km/h</span>
                    </p>
                    <p class="spaced-content">
                        <span class="weather-description">Pressure</span>
                        <span class="table-value">${day.pressure} hPa</span>
                    </p>
                    <p class="spaced-content">
                        <span class="weather-description">UV Index Max</span>
                        <span class="table-value">${day.uvindex} of 11</span>
                    </p>
                </div>
            </div>
        `;
      forecastDaily.appendChild(dailyCont);
    });

    return forecastDaily;
  }
}

document
  .querySelector(".currentForcast")
  .addEventListener("click", async function () {
    setActiveButton(this);
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      inputSearch.value = lastSearch;
    }
    btnList.classList.remove("removeBtnList");
    contCities.style.display = "block";
    mapExpand.style.display = `flex`;
    resetMapView();
    const apiKey = "05857751833645b2bbeb8c3f5d79234f";
    const baseUrl = "https://api.weatherbit.io/v2.0/current";
    const forecastUrl = "https://api.weatherbit.io/v2.0/forecast/daily";
    const hourlyUrl = "https://api.weatherbit.io/v2.0/forecast/hourly";
    if (inputSearch.value) {
      try {
        const res = await axios.get(
          `${baseUrl}?city=${inputSearch.value}&key=${apiKey}`
        );
        const forecastRes = await axios.get(
          `${forecastUrl}?city=${inputSearch.value}&key=${apiKey}`
        );
        const forecastHourly = await axios.get(
          `${hourlyUrl}?city=${inputSearch.value}&key=${apiKey}`
        );
        const weatherData = new WeatherDataDaily(res.data);
        const weatherCard = new WeatherCardDaily(weatherData);
        const weatherForecast = new WeatherForecastDaily(forecastRes.data);
        weatherContainer1.innerHTML = "";
        weatherContainer1.append(weatherCard.renderCurrent());
        weatherContainer1.append(forecastCont);
        forecastCont.innerHTML = "<h5>Forecast for 16 days</h5>";
        forecastCont.append(weatherForecast.renderForecast());
        weatherContainer2.innerHTML = "";
        hourlyCont.innerHTML = "";
        weatherContainer2.innerHTML = "<h5>Forecast for 48 hours</h5> ";
        const hourlyForecast = new WeatherForecastHourly(forecastHourly.data);
        weatherContainer2.append(hourlyCont);
        hourlyCont.append(hourlyForecast.renderForecastHourly());
        initializeScrollButtons();
        initializeScrollButtonsHourly();
        const { lat, lon } = res.data.data[0];
        const popupContent = `
        <b>${weatherData.city}</b><br>
        Temperature: <b>${weatherData.temperature}°C</b><br>
        Condition: <b>${weatherData.condition}</b>
      `;
        L.popup().setLatLng([lat, lon]).setContent(popupContent).openOn(map);
        map.setView([lat, lon], 10);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    form.reset();
  });

document
  .querySelector(".dailyForecast")
  .addEventListener("click", async function () {
    setActiveButton(this);
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      inputSearch.value = lastSearch;
    }
    const apiKey = "05857751833645b2bbeb8c3f5d79234f";
    const forecastUrl = "https://api.weatherbit.io/v2.0/forecast/daily";
    const bigCont = document.querySelector(".big-cont");
    weatherContainer1.innerHTML = "";
    weatherContainer2.innerHTML = "";
    contCities.style.display = "none";
    mapExpand.style.display = `none`;
    if (inputSearch.value) {
      try {
        const forecastRes = await axios.get(
          `${forecastUrl}?city=${inputSearch.value}&key=${apiKey}`
        );
        const weatherForecast = new WeatherForecastDaily(forecastRes.data);
        weatherContainer1.append(weatherForecast.renderForecastCards());
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    form.reset();
  });

function initializeScrollButtons() {
  const scrollContainer = document.querySelector(".forecast-container");
  const scrollLeftButton = document.querySelector(".scroll-button.left");
  const scrollRightButton = document.querySelector(".scroll-button.right");
  const scrollAmount = 300;
  scrollLeftButton.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  scrollRightButton.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  function updateButtonVisibility() {
    scrollLeftButton.style.display =
      scrollContainer.scrollLeft === 0 ? "none" : "block";
    scrollRightButton.style.display =
      scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
      scrollContainer.scrollWidth
        ? "none"
        : "block";
  }
  scrollContainer.addEventListener("scroll", updateButtonVisibility);
  updateButtonVisibility();
  function updateButtonState() {
    scrollLeftButton.disabled = scrollContainer.scrollLeft === 0;
    scrollRightButton.disabled =
      scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
      scrollContainer.scrollWidth;
  }
  scrollContainer.addEventListener("scroll", updateButtonState);
  updateButtonState();
}

const forecastCont = document.querySelector(".forecastCont");

class WeatherForecastHourly {
  constructor(apiResponse) {
    this.city = apiResponse.city_name;
    this.country = apiResponse.country_code;
    this.forecast = apiResponse.data.map((hour) => ({
      date: hour.datetime,
      temperature: Math.floor(hour.temp),
      condition: hour.weather.description,
      icon: hour.weather.icon,
      realTemp: Math.floor(hour.app_temp),
      humidity: hour.rh,
      windSpeed: hour.wind_spd,
      pressure: hour.pres,
      uvindex: hour.uv,
      maxTemp: Math.floor(hour.max_temp),
      minTemp: Math.floor(hour.min_temp),
    }));
  }

  getWeatherIcon(icon) {
    return animatedWeatherIcons[icon] || "images/all/default-icon.svg";
  }

  renderForecastHourly() {
    const wrapper = document.createElement("div");
    wrapper.className = "hourly-wrapper";

    const leftButton = document.createElement("button");
    leftButton.className = "scroll-button left hourly";
    leftButton.innerHTML = `<i class="bi bi-caret-left-fill"></i>`;

    const rightButton = document.createElement("button");
    rightButton.className = "scroll-button right hourly";
    rightButton.innerHTML = `<i class="bi bi-caret-right-fill"></i>`;

    const hourlyContainer = document.createElement("div");
    hourlyContainer.className = "hourly-container";

    this.forecast.forEach((hour) => {
      const dayCard = document.createElement("div");
      dayCard.className = "forecast-card";
      dayCard.innerHTML = `
        <span class="forecast-date">${hour.date}</span>
        <span class="forecast-img"><img class="forecast-icon" src="${this.getWeatherIcon(
          hour.icon
        )}"></span>
        <span class="forecast-temp">${
          hour.temperature
        }°<span class="temp-unit">C</span></span>
        
        <span class="forecast-condition">${hour.condition}</span>
      `;
      hourlyContainer.appendChild(dayCard);
    });

    wrapper.appendChild(leftButton);
    wrapper.appendChild(hourlyContainer);
    wrapper.appendChild(rightButton);

    return wrapper;
  }

  renderForecastCards() {
    const forecastHourly = document.createElement("div");
    forecastHourly.classList = "forecastHourly";
    const bigCont = document.querySelector(".big-cont");

    this.forecast.forEach((hour) => {
      const hourlyContBig = document.createElement("div");
      hourlyContBig.classList.add("hourly-cont-big");
      hourlyContBig.innerHTML = `
            <div class="weather-header">
                <p id="city-name">${this.city}</p>
                <span id="local-date">${hour.date}</span>
            </div>
            <div class="weather-value">
                <div id="weather-info">
                    <div class="weather-temps">
                        <div class="weather-icon-container">
                            <img class="weather-icon" src="${this.getWeatherIcon(
                              hour.icon
                            )}" />
                        </div>
                        <div class="weather-temp-all">
                        <div class="weather-temp">
                                    <span class="temperature">${
                                      hour.temperature
                                    }<span class="temp-circle">°</span></span>
                                 <span class="celsius">C</span>
                                 
                                </div>
                            
                        </div>
                        
                    </div>
                    <p id="condition">${hour.condition}</p>
                </div>
                <div class="additional-info-table">
                    <p class="spaced-content">
                        <span class="weather-description">Humidity</span>
                        <span class="table-value">${hour.humidity}%</span>
                    </p>
                    <p class="spaced-content">
                        <span class="weather-description">Wind</span>
                        <span class="table-value wind-speed">${
                          hour.windSpeed
                        } km/h</span>
                    </p>
                    <p class="spaced-content">
                        <span class="weather-description">Pressure</span>
                        <span class="table-value">${hour.pressure} hPa</span>
                    </p>
                    <p class="spaced-content">
                        <span class="weather-description">UV Index Max</span>
                        <span class="table-value">${hour.uvindex} of 11</span>
                    </p>
                </div>
            </div>
        `;
      forecastHourly.appendChild(hourlyContBig);
    });

    return forecastHourly;
  }
}
document
  .querySelector(".hourlyForecast")
  .addEventListener("click", async function () {
    setActiveButton(this);
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      inputSearch.value = lastSearch;
    }
    const apiKey = "05857751833645b2bbeb8c3f5d79234f";
    const hourlyUrl = "https://api.weatherbit.io/v2.0/forecast/hourly";
    weatherContainer1.innerHTML = "";
    weatherContainer2.innerHTML = "";
    contCities.style.display = "none";
    mapExpand.style.display = `none`;
    if (inputSearch.value) {
      try {
        const forecastHourly = await axios.get(
          `${hourlyUrl}?city=${inputSearch.value}&key=${apiKey}`
        );
        const hourlyForecast = new WeatherForecastHourly(forecastHourly.data);
        weatherContainer1.append(hourlyForecast.renderForecastCards());
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    form.reset();
  });
function initializeScrollButtonsHourly() {
  const scrollContainer = document.querySelector(".hourly-container");
  const scrollLeftButton = document.querySelector(".scroll-button.left.hourly");
  const scrollRightButton = document.querySelector(
    ".scroll-button.right.hourly"
  );
  const scrollAmount = 300;
  scrollLeftButton.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  scrollRightButton.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  function updateButtonVisibility() {
    scrollLeftButton.style.display =
      scrollContainer.scrollLeft === 0 ? "none" : "block";
    scrollRightButton.style.display =
      scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
      scrollContainer.scrollWidth
        ? "none"
        : "block";
  }
  scrollContainer.addEventListener("scroll", updateButtonVisibility);
  updateButtonVisibility();
  function updateButtonState() {
    scrollLeftButton.disabled = scrollContainer.scrollLeft === 0;
    scrollRightButton.disabled =
      scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
      scrollContainer.scrollWidth;
  }
  scrollContainer.addEventListener("scroll", updateButtonState);
  updateButtonState();
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".forecastButton");
  buttons.forEach((btn) => btn.classList.remove("activeButton"));
  button.classList.add("activeButton");
}
