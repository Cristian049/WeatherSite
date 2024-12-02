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

class WeatherDataDaily {
  constructor(apiResponse) {
    const dataRes = apiResponse.data && apiResponse.data[0];
    this.city = dataRes.city_name;
    this.temperature = dataRes.temp;
    this.condition = dataRes.weather.description;
    this.icon = dataRes.weather.icon;
    this.country = dataRes.country_code;
    this.timezone = dataRes.timezone;
    this.humidity = dataRes.rh;
    this.windSpeed = dataRes.wind_spd;
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
    const timezone = this.weatherData.timezone || "UTC";
    const localTime = new Date().toLocaleString("en-US", {
      timeZone: timezone,
    });
    const card = document.createElement("div");
    card.className = "weather-card";

    card.innerHTML = `
       <div class="weather-header">
        <h5 id="city-name">${this.weatherData.city}</h5 >
        <h5 id="local-time">${localTime}</h5>
      </div>
      <div class="weather-info">
        <img id="weather-icon" src="${this.weatherData.getWeatherIcon()}" alt="${
      this.weatherData.condition
    }">
        <p id="temperature">${this.weatherData.temperature}°C</p>
        <p id="condition">${this.weatherData.condition}</p>
      </div>
      <div class="additional-info">
        <p>Humidity: <span id="humidity">${
          this.weatherData.humidity
        }%</span></p>
        <p>Wind: <span id="wind-speed">${
          this.weatherData.windSpeed
        } km/h</span></p>
      </div>
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
      weatherContainer.innerHTML = "";
      weatherContainer.append(weatherCard.render());
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  form.reset();
});
