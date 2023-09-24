console.log('Hello from index.js');
import domManipulation from './dom';
import './styles.css';
import weatherImage from './asset/weatherImage.jpg';
import rain from './asset/rain.png';
import humidity from './asset/humidity.png';
import wind from './asset/wind.png';
// const imageBox = document.querySelector('#backgroundImage');
// imageBox.src = weatherImage;
import getWeatherData from './weather';

console.log(domManipulation());
console.log(getWeatherData());
