import getWeatherData from './weather';

const dom = (() => {
  const searchBox = document.querySelector('#search-box');
  const searchBtn = document.querySelector('#search-btn');
  const temperatureDisplay = document.querySelector('#temperature');
  const cityBox = document.querySelector('#city');
  const humidityName = document.querySelector('.humidity');
  const windName = document.querySelector('.wind');

  searchBtn.addEventListener('click', getTemperatureOfTheCity);

  async function getTemperatureOfTheCity() {
    const city = searchBox.value;
    const data = await getWeatherData(city);
    const cityName = data.location.name;
    const tempCelsius = data.current.temp_c;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;
    render(cityName, tempCelsius, humidity, windSpeed);
    // console.log('from dom.js   ', data);
  }
  function render(cityName, tempCelsius, humidity, windSpeed) {
    console.log(cityName, tempCelsius, humidity, windSpeed);
    temperatureDisplay.textContent = tempCelsius;
    cityBox.textContent = cityName;
    humidityName.textContent = `${humidity} %`;
    windName.textContent = `${windSpeed} km/h`;
  }
})();
export default dom;
