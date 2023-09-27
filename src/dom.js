import getWeatherData from './weather';

const dom = (() => {
  const searchBox = document.querySelector('#search-box');
  const searchBtn = document.querySelector('#search-btn');
  const temperatureDisplay = document.querySelector('#temperature');
  const cityBox = document.querySelector('#city');
  const humidityName = document.querySelector('.humidity');
  const windName = document.querySelector('.wind');
  const imageBox = document.querySelector('img');

  searchBtn.addEventListener('click', getDataOfTheCity);
  searchBox.addEventListener('keydown', getDataOfTheCityByEnter);

  function getDataOfTheCityByEnter(event) {
    if (event.key === 'Enter') {
      searchBtn.click();
    }
  }

  async function getDataOfTheCity() {
    let city = searchBox.value;

    const data = await getWeatherData(city);
    const cityName = data.location.name;
    const tempCelsius = data.current.temp_c;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;
    const weatherCondition = data.current.condition.text;
    render(cityName, tempCelsius, humidity, windSpeed, weatherCondition);
    // console.log('from dom.js   ', data);
  }
  function render(
    cityName,
    tempCelsius,
    humidity,
    windSpeed,
    weatherCondition
  ) {
    // console.log(cityName, tempCelsius, humidity, windSpeed);
    temperatureDisplay.textContent = `${tempCelsius}°c`;
    cityBox.textContent = cityName;
    humidityName.textContent = `${humidity} %`;
    windName.textContent = `${windSpeed} km/h`;
    imageBox.src = getAppropriateImage(weatherCondition);
  }
  function getAppropriateImage(weatherCondition) {
    const regexSnow = /snow|ice|pellet|blizzard/i;
    const regexRain = /rain|sleet|thunder/i;
    const regexDrizzle = /drizzle/i;
    const regexMist = /mist|fog/i;
    const regexSunny = /sunny|clear/i;
    const regexCloudy = /cloud|overcast/i;
    // console.log('the regex to be matched is ', weatherCondition);
    if (regexSunny.test(weatherCondition)) {
      return './clear.png';
    } else if (regexRain.test(weatherCondition)) {
      return './rain.png';
    } else if (regexDrizzle.test(weatherCondition)) {
      return './drizzle.png';
    } else if (regexMist.test(weatherCondition)) {
      return './mist.png';
    } else if (regexCloudy.test(weatherCondition)) {
      return './clouds.png';
    } else if (regexSnow.test(weatherCondition)) {
      return './snow.png';
    } else {
      console.log('fired from last... nothing matched so loading clouds.png');
      return './clouds.png';
    }
  }

  return {
    getDataOfTheCity,
  };
})();
export default dom;
