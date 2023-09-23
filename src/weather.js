async function getWeatherData() {
  const response = await fetch(
    'http://api.weatherapi.com/v1/current.json?key=bc2325d447fe4062b0350010232009&q=kathmandu'
  );
  const data = await response.json();
  console.log(data);
  console.log(data.location.country, data.location.name);
  console.log(data.current.temp_c);
  console.log(data.current.temp_f);
  return data;
}

export default getWeatherData;
