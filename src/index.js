import weather from "./weather"
import display from "./display"

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const weatherData = await weather.getData(searchInput.value);
    display.setSearchResult(weatherData);
});