function showWeatherData(response){
    let temp = document.querySelector("#app_temp");
    let tempinfo = Math.round(response.data.temperature.current);
    let city = document.querySelector("#city")
    city.innerHTML = response.data.city;
    temp.innerHTML = tempinfo;
}

function searchCity(city){
let apiKey = "d001310fae770o7ftaaab3f4b5974a90";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiURL).then(showWeatherData);
}

function onSearch(event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
searchCity(searchInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", onSearch);

searchCity("Harare");