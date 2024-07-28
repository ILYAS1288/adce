const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherIcon = document.getElementById('weather-icon');
const tempData = document.getElementById('temp-data');
const city = document.getElementById('city');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

const apiKey = 'f99fccc88b5a75f1bc57490cb3cb37c7';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cityName = cityInput.value.trim();
    if (cityName) {
        fetchWeatherData(cityName);
    }
});



function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            updateWeatherInfo(data);
           
        })
        .catch(error => {
            alert(error.message);
            clearWeatherInfo();
           
        });
    
    
            city.Input.value  =  "";
    
}

function updateWeatherInfo(data) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    tempData.textContent = `${data.main.temp}°C`;
    city.textContent = `${data.name}, ${data.sys.country}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
}

function clearWeatherInfo() {
    weatherIcon.src = '';
    tempData.textContent = '';
    city.textContent = '';
    humidity.textContent = '';
    windSpeed.textContent = '';
    
}

