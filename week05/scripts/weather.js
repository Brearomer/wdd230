const currenTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.weather.com/weather?lat=49.7565&lon=6.6412&units=imperial&appid=[enter your key here]';



fetch(url)
  .then(response => {
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    return response.json();
  })
  .then(data => {

    console.log(data); 
  })
  .catch(error => {
    
    console.error('Error:', error);
  });



async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
         console.log(error);
    }
}  
apiFetch(); 

function displayResults(data) {
    currenTemp.innerHTML = `${data.weather}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w${c}.`;
    let desc = data.weather[0].weather;
    weatherIcon.setAttribute('icon', sunny);
    weatherIcon.setAttribute('icon', cloudy);
    captionDesc.textContent = `${desc}`;
}