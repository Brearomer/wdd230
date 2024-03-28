
const myKey ="81a46a5488c9937f09d0bad295c0919d"
const myLat = "25.03274"
const myLong = "-77.33007"

const URL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function  apiFetch(url) {
    try{
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    }  catch (error){
        console.log(error);
    }
} 

function displayResults(data){

    const Decription = document.querySelector('#description');
    const Temperature = document.querySelector('#temperature');
    const Graphic = document.querySelector('#graphic');
    
   
   Decription.innerHTML = data.weather[0].description
   Temperature.innerHTML = `${data.main.temp}&deg;F`
   const iconsrc =` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   Graphic.setAttribute('src', iconsrc)
   Graphic.setAttribute('alt', data.weather[0].description)
   

}
apiFetch(URL); 
