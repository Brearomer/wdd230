const hamburgerElement = document.querySelector('#ibutton')
const navElement = document.querySelector('.menuLinks'); 

hamburgerElement.addEventListener('click', () =>{
	navElement.classList.toggle('open');
	hamburgerElement.classList.toggle('open');
});