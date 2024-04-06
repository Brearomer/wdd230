const currentWeather = document.querySelector('#weather');
const currentForecast = document.querySelector('#forecast');
const Temperature = document.querySelector('#temp');




const key ="81a46a5488c9937f09d0bad295c0919d"
const lat = "25.12709"
const long ="-77.31405"


const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`

  function fetchcurrentWeather(){
    fetch(`//api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`)
    .then(response => response.json())
    .then(data =>{
        const currentWeatherDiv = document.getElementById('currentWeather');
        currentWeatherDiv.innerHTML =
        `<p> Temperature: ${data.main.temp}°C</p>
         <p> Description:${data.weather[O].description}</p>  `;
 
    }) 
    .catch(error => console.log('Error fetching current weather:', error));
}

  function fetchForecast(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${key}&units=metric`)
    .then(response => response.json())
    .then(data =>{
        const forecastDiv = document.getElementById('forecast');
        forecastDiv.innerHTML ='';
        for (let i = O; i < data.list.length; i += 8){
            const forecast = data.list[i];
            const date = new Date(forecast.dt * 1000);
            forecastDiv.innerHTML +=` <p>Date: ${date.toDateString()}</p>
            <p>Temperature: ${forecast.main.temp}°C</p>
            <p>Description: ${forecast.weather[0].description}</p>
        `;
        }
    })
    .catch(error => console.log('Error fetching forecast:', error));
} 

window.onload = function(){
    fetchcurrentWeather();
    fetchForecast();
};   

async function apiFetch(){
   try{
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      }
   }  catch{
       throw Error(await response.text());
   }
}
 
function displayResults(data) {
    console.log('hello')
}
