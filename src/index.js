console.log('Hello from index.js');
import domManipulation from './dom';
import './styles.css';
import weatherImage from './asset/weatherImage.jpg';
const imageBox = document.querySelector('#backgroundImage');
imageBox.src = weatherImage;

console.log(domManipulation);
