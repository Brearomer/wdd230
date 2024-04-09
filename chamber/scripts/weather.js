const apiKey = '81a46a5488c9937f09d0bad295c0919d';
const city = 'Nassau';
const country ='+1'; 
const lat = '25.0408';
const lon= '-77.3712';


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data =>{
        const temp = document.createElement('p');
        const img = document.createElement('img');
        const currentWeather = document.getElementById('currentWeather');
  
        temp.textContent = data.main.temp;
        const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        img.setAttribute('src', iconURL);
        const description = document.createElement('p');
        
       description.textContent = data.weather[0].description;
       currentWeather.appendChild(img);
       currentWeather.appendChild(temp);
       currentWeather.appendChild(description);
    }) 
    .catch(error =>{
        console.error('Error fetching current weather:',error);
    });

    document.addEventListener("DOMContentLoaded", function() {
      const apiKey = '81a46a5488c9937f09d0bad295c0919d'; 
      const city = 'Nassau'; 
  
      fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              const temperature = Math.round(data.main.temp - 273.15); 
              const description = data.weather[0].description;
              const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
              const forecastContainer = document.querySelector('.forecast');
  
              const forecastHTML = `
                  <div>
                      <img src="${icon}" alt="Weather Icon">
                      <p>Temperature: ${temperature}°C</p>
                      <p>Description: ${description}</p>
                  </div>
              `;
  
              forecastContainer.innerHTML = forecastHTML;
          })
          .catch(error => {
              console.error('Error fetching weather data:', error);
          });
  });
  
  
