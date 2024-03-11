const hamburgerElement = document.querySelector('button')
const navElement = document.querySelector('.menuLinks'); 

hamburgerElement.addEventListener('click', () =>{
	navElement.classList.toggle('open');
	hamburgerElement.classList.toggle('open');
});