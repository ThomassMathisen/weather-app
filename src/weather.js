const weather = (() => {
    function convertData(weatherData) {
      const locationData = {
        location: weatherData.name,
        country: weatherData.sys.country,
        currentTemp: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed,
        description: weatherData.weather[0].description,
      };
      return locationData;
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=243a73ac26129bddad37ba623014c585`;
        try {
          const response = await fetch(endpoint, {mode: "cors"});
          if (!response.ok) throw new Error(`Location ${city} not found`);
          const data = convertData(await response.json());
          return data;
        } catch (error) {
          alert(error);
          return null;
        }
    }
    return { getData };
})();

export default weather;