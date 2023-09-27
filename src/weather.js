async function getWeatherData(city) {
  try {
    const url = `http://api.weatherapi.com/v1/current.json?key=bc2325d447fe4062b0350010232009&q=${city}`;
    const response = await fetch(url);

    const data = await response.json();
    if (response.ok) {
      // console.log(data);
      return data;
    } else {
      throw new Error(`City ${city} not found`);
    }
  } catch (error) {
    alert(error);
    return null;
  }
}

export default getWeatherData;
