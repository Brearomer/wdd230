const darkmode = document.getElementById('#darkmode'); 
const main = document.querySelector('main');


function toggleDarkMode(){
    const body = document.body;
    body.classList.toggle('dark-mode');
}