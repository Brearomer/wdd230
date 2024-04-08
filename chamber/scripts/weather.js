const apiKey = '81a46a5488c9937f09d0bad295c0919d';
const city = 'Nassau';
const country ='+1'; 


fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data =>{
        const currentWeather = document.getElementById('currentWeather');
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        currentWeather.innerHTML =`<p>Current Temperature: ${temperature}°C</p>`
                           `<p>Current Weather Description: ${description}</p>`;
                                
    }) 
    .catch(error =>{
        console.error('Error fetching current weather:',error);
    });

fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data =>{
            const forecast = document.getElementById('forecast');
            const forecastData = data.list.slice(0.8);

          forecast.innerHTML = '<h2> Three-day Temperature Forecast:</h2>';
          forecastData.forEach(entry =>{
            const dateTime = entry.dt_txt;
            const temperature = entry.main.temp;
            const description = entry.weather[0].description;
            forecast.innerHTML +=`<p>${dateTime}: ${temperature}°C, ${description}</p>`;

          });  
     })  
     .catch(error =>{
        console.error('Error fetching forecast:', error);
     }); 
