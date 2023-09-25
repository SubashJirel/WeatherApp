import getWeatherData from './weather';

const dom = (() => {
  const searchBox = document.querySelector('#search-box');
  const searchBtn = document.querySelector('#search-btn');

  searchBtn.addEventListener('click', getTemperatureOfTheCity);

  async function getTemperatureOfTheCity() {
    const city = searchBox.value;
    const data = await getWeatherData(city);
    console.log('from dom.js   ', data);
  }
})();
export default dom;
