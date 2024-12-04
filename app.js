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

// Fetch weather data for Craiova when the page loads
// window.onload = function () {
//   fetchWeatherData(); // Fetch default weather for Craiova
// };

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

function getWeatherCardClass(condition) {
  switch (condition.toLowerCase()) {
    case "clear sky":
      return "clear-day";
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
    case "overcast clouds":
      return "cloudy";
    case "light rain":
    case "rain":
    case "shower rain":
      return "rainy";
    case "snow":
    case "light snow":
      return "snowy";
    case "thunderstorm":
      return "thunderstorm";
    case "fog":
    case "mist":
      return "foggy";
    case "wind":
    case "windy":
      return "windy";
    default:
      return "night";
  }
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
  }
  getWeatherIcon() {
    return `https://www.weatherbit.io/static/img/icons/${this.icon}.png`;
  }
}

class WeatherCardDaily {
  constructor(weatherData) {
    this.weatherData = weatherData;
  }
  render() {
    const countryCode = this.weatherData.country;
    const currentTime = formatTime();
    const card = document.createElement("div");
    const weatherClass = getWeatherCardClass(this.weatherData.condition);
    card.className = `weather-card ${weatherClass}`;

    card.innerHTML = `
       <div class="weather-header">
        <p id="city-name">${this.weatherData.city}, ${countryCode}</p >
        <span id="local-time">${currentTime}</span>
      </div>
      <div class="weather-value">
        <div id="weather-info">
          <div class="weather-temps">
            <img class="weather-icon" src="${this.weatherData.getWeatherIcon()}" alt="${
      this.weatherData.condition
    }">
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
           <p class="spaced-content"><span class="weather-description">Wind</span> <span class="table-value">${
             this.weatherData.windSpeed
           } km/h</span></p>
           <p class="spaced-content"><span class="weather-description">Pressure</span><span class="table-value">${
             this.weatherData.pressure
           } hPa</span></p>
        </div>
      <div>
    `;

    return card;
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const apiKey = "0b5eac87736d4cab95709976b8c2e278";
  const baseUrl = "https://api.weatherbit.io/v2.0/current";
  const inputVal = inputSearch.value;
  if (inputVal) {
    try {
      const res = await axios.get(`${baseUrl}?city=${inputVal}&key=${apiKey}`);
      const weatherData = new WeatherDataDaily(res.data);
      const weatherCard = new WeatherCardDaily(weatherData);

      weatherContainer.append(weatherCard.render());
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  form.reset();
});
