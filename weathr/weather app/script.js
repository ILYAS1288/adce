// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');

// search.addEventListener('click',()=>{
//     const APIKey ='34db572e910c9f4110273358dec3784d';
//     const city = document.querySelector('.search-box input').value;
//     // console.log(APIKey);

//     if (city == '')
//         return;

//     fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{

//         const image = document.querySelector('weather-box img');
//         const temperature = document.querySelector('weather-box .temperature');
//         const description = document.querySelector('weather-box .description');
//         const humidity = document.querySelector('weather-details .humidity span');
//         const wind = document.querySelector('weather-box .wind span');

//         switch (json.weather[0].main) {
//             case 'Clear':
//                 image.src = 'images/sun.png';
                
//                 break;

//                 case 'rain':
//                 image.src = 'images/rain.png';
                
//                 break;

//                 case 'mist':
//                     image.src = 'images/mist.png';
                    
//                     break;

//                     case 'clounds':
//                         image.src = 'images/cloud.png';
                        
//                         break;

//                         case 'haza':
//                         image.src = 'images/mist.png';
                
//             default:
//             image.src = 'img/cloud.png';
//         }
//         temperature.innerHTML = '${parseInt(json.main.temp)}<span>C<span';
//         description.innerHTML = '${json.weather[0].description}';
//         humidity.innerHTML = '${json.main.humidity}%';
//         wind.innerHTML = '${parseInt(json.wind.speed)}km/h';
//     });
// });


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = '34db572e910c9f4110273358dec3784d';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-box .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'weather/weather app/images../clear.png';
                    break;
                case 'Rain':
                    image.src = 'weather/weather app/images/rain.png';
                    break;
                case 'Mist':
                    image.src = 'weather/weather app/images/mist.png';
                    break;
                case 'Clouds':
                    image.src = 'weather/weather app/images/cloud.png';
                    break;
                case 'Haze':
                    image.src = 'weather/weather app/images/mist.png';
                    break;
                default:
                    image.src = 'weather/weather app/images/cloud.png';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;
        });
});
