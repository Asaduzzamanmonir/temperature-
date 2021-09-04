const API_KEY = `7d8992a29d3e8ddb7e14922ca6ca837b`
const getTemperature = () => {
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value
    searchInput.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const displayTemp = city => {
    const infoContainer = document.getElementById('info-container')
    infoContainer.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="">
            <h1>${city.name}</h1>
            <h3><span>${city.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${city.weather[0].main}</h1>
    `

}