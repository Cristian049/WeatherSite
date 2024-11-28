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
    const dataRes = apiResponse.data[0];
    this.city = dataRes.city_name;
    this.temperature = dataRes.temp;
    this.condition = dataRes.weather.description;
    this.icon = dataRes.weather.icon;
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
    const card = document.createElement("div");
    card.className = "weather-card";

    card.innerHTML = `
        <h2>${this.weatherData.city}</h2>
        <p>${this.weatherData.temperature}°C</p>
        <p>${this.weatherData.condition}</p>
        <img src="${this.weatherData.getWeatherIcon()}" alt="${
      this.weatherData.condition
    }">
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
