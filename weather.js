







document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '942723219f2931016e72699f22a46cc0';
    const city = 'khaplu';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch data from API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Parse and display data
            const cityElement = document.getElementById('city');
            const temperatureElement = document.getElementById('temperature');
            const descriptionElement = document.getElementById('description');

            cityElement.textContent = `City: ${data.name}`;
            temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
            descriptionElement.textContent = `Description: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
