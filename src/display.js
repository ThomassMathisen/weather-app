const regionNames = new Intl.DisplayNames(
    ['en'], {type: 'region'}
  );

const display = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return;

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const location = document.getElementById("cityName");
        const description = document.getElementById("description");
        const currentTemp = document.getElementById("temperature");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        location.textContent = `${weatherData.location}, ${regionNames.of(weatherData.country)}`;
        description.textContent = `${weatherData.description}`.charAt(0).toUpperCase()
        + `${weatherData.description}`.slice(1);
        currentTemp.textContent = `${Math.floor(weatherData.currentTemp)}°C`;
        feelsLike.textContent = `Feels like: ${Math.floor(weatherData.feelsLike)}°C`;
        humidity.textContent = `Humidity: ${weatherData.humidity}%`;
        wind.textContent = `Wind: ${Math.floor(weatherData.wind)} km/h`;
    }
    return { setSearchResult };
})();

export default display