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

// document.addEventListener("DOMContentLoaded", runRoCities);

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

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  resetMapView();
  const apiKey = "05857751833645b2bbeb8c3f5d79234f	";
  const baseUrl = "https://api.weatherbit.io/v2.0/current";
  const inputVal = inputSearch.value;
  if (inputVal) {
    try {
      const res = await axios.get(`${baseUrl}?city=${inputVal}&key=${apiKey}`);
      const weatherData = new WeatherDataDaily(res.data);
      const weatherCard = new WeatherCardDaily(weatherData);
      weatherContainer1.innerHTML = "";
      weatherContainer1.append(weatherCard.renderCurrent());
      weatherContainer2.innerHTML = "";
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  form.reset();
});

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

document.addEventListener("DOMContentLoaded", async function () {
  const selectedCities = getRandomCities(2);
  const weatherContainer1 = document.getElementById("weatherContainer1");
  const weatherContainer2 = document.getElementById("weatherContainer2");
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

const map = L.map("map", { attributionControl: false }).setView(
  [45.9432, 24.9668],
  6
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 13,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const cities = [
  { name: "Bucharest", coords: [44.439663, 26.096306] },
  { name: "Cluj-Napoca", coords: [46.770439, 23.591423] },
  { name: "Timișoara", coords: [45.760696, 21.226788] },
  { name: "Iași", coords: [47.151726, 27.587914] },
  { name: "Constanța", coords: [44.179249, 28.64994] },
  { name: "Brașov", coords: [45.657974, 25.601198] },
  { name: "Craiova", coords: [44.319305, 23.800678] },
];

cities.forEach((city) => {
  L.marker(city.coords).addTo(map).bindPopup(`<b>${city.name}</b>`);
});

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

mapExpand.addEventListener("transitionend", function () {
  const legendItems = document.querySelector(".legend");
  if (mapExpand.classList.contains("full-map")) {
    legendItems.style.transform = "translateY(-290%)";
  } else {
    legendItems.style.transform = "translateY(0)";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    mapExpand.classList.remove("full-map");
    expandBtn.classList.remove("full-map-btn");
    expandBtn.classList.add("expand-btn");
    body.classList.remove("hide-scroll");
    map.invalidateSize();
  }
});
